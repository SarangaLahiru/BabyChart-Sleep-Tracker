from flask import Flask, request, jsonify
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from keras.models import Sequential
from keras.layers import LSTM, Dense
from sklearn.model_selection import train_test_split

from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


# Step 1: Generate Dummy Data (for scaling purposes)
np.random.seed(42)

# Generate synthetic baby activity data
activity_start_time = np.random.randint(6, 18, size=100)  
prev_sleep_duration = np.random.randint(30, 120, size=100)
time_since_last_nap = np.random.randint(60, 300, size=100)
room_temp = np.random.randint(20, 26, size=100)
predicted_sleep_start = (time_since_last_nap + prev_sleep_duration) + np.random.randint(-30, 30, size=100)

# Combine features into a single dataset
X = np.column_stack((activity_start_time, prev_sleep_duration, time_since_last_nap, room_temp))
y = predicted_sleep_start

# Step 2: Scale the data (normalization)
scaler = MinMaxScaler(feature_range=(0, 1))
X_scaled = scaler.fit_transform(X)
X_scaled = X_scaled.reshape((X_scaled.shape[0], 1, X_scaled.shape[1]))

# Step 3: Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Step 4: Build the LSTM model
def create_lstm_model():
    model = Sequential()
    model.add(LSTM(50, activation='relu', input_shape=(X_train.shape[1], X_train.shape[2])))
    model.add(Dense(1))  # Output layer for regression
    model.compile(optimizer='adam', loss='mse')
    return model

# Create and train the model
model = create_lstm_model()
model.fit(X_train, y_train, epochs=100, batch_size=16, validation_data=(X_test, y_test), verbose=2)

# Step 5: Flask API Route for Predicting Next Sleep Start Time
@app.route('/predict', methods=['POST'])
def predict_sleep():
    # Get JSON data from the request
    data = request.get_json(force=True)

    # Extract the input values
    activity_start_time = data['activity_start_time']
    prev_sleep_duration = data['prev_sleep_duration']
    time_since_last_nap = data['time_since_last_nap']
    room_temp = data['room_temp']

    # Prepare input data for the model
    input_data = np.array([[activity_start_time, prev_sleep_duration, time_since_last_nap, room_temp]])

    # Scale and reshape the input data for LSTM
    input_data_scaled = scaler.transform(input_data).reshape((1, 1, 4))

    # Predict the next sleep start time
    predicted_sleep = model.predict(input_data_scaled)

    # Return the prediction as a JSON response
    return jsonify({
        'predicted_sleep_start_time': round(float(predicted_sleep[0][0]), 2)  # Rounding for clarity
    })

if __name__ == '__main__':
    # Run the Flask app
    app.run(debug=True)
