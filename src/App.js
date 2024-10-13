import axios from 'axios'; // Importing axios for API requests
import React, { useState } from 'react';
import './App.css'; // Importing the CSS file for styles
import alarmIcon from './images/alarm-icon.png'; // Alarm icon
import sleepIcon from './images/bed-time-icon.png'; // Bed Time icon
import chartImage from './images/charta.png'; // Weekly chart image
import diaperIcon from './images/diaper-icon.png'; // Diaper icon
import feedIcon from './images/feed-icon.png'; // Feed icon
import goalIcon from './images/goal-icon.png'; // Goal icon
import healthIcon from './images/health-icon.png'; // Health icon
import logoIcon from './images/logo.png'; // Logo icon
import profilePic from './images/profile-picture-placeholder.png'; // Profile picture
import progressIcon from './images/progress-icon.png'; // Progress icon
import sleepQualityIcon from './images/sleep-quality-icon.png'; // Sleep quality icon
import wakeUpIcon from './images/wake-up-icon.png'; // Wake Up icon

function App() {
  const [predictedSleepTime, setPredictedSleepTime] = useState(''); // State to hold the predicted sleep time
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [formData, setFormData] = useState({
    activity_start_time: '',
    prev_sleep_duration: '',
    time_since_last_nap: '',
    room_temp: ''
  }); // State to hold form data

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission and fetch predicted sleep time
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Fetch the prediction from the Flask API
    axios.post('http://127.0.0.1:5000/predict', formData)
      .then(response => {
        setPredictedSleepTime(response.data.predicted_sleep_start_time); // Set the predicted sleep time
        setShowModal(false); // Hide the modal after submission
      })
      .catch(error => {
        console.error('Error fetching the prediction:', error);
      });
  };

  // Function to show the modal
  const handleSleepClick = () => {
    setShowModal(true); // Show the modal when Sleep button is clicked
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false); // Hide the modal
  };

  return (
    <div className="App">
      <div className="sidebar">
        <div className="logo-section">
          <h2>BabyChart</h2>
          <img src={logoIcon} alt="BabyChart Logo" />
        </div>
        <div className="menu-item" onClick={handleSleepClick}>
          <img src={sleepIcon} alt="Sleep Icon" /> Sleep
        </div>
        <div className="menu-item">
          <img src={feedIcon} alt="Feed Icon" /> Feed
        </div>
        <div className="menu-item">
          <img src={diaperIcon} alt="Diaper Icon" /> Diaper
        </div>
        <div className="menu-item">
          <img src={healthIcon} alt="Health Icon" /> Health
        </div>
        <div className="menu-item">
          <img src={progressIcon} alt="Progress Icon" /> Progress
        </div>
      </div>

      <div className="main-content">
        <div className="header">
          <h1>Welcome Back, Mrs. Geetha!</h1>
          <img src={profilePic} alt="Profile Picture" />
        </div>

        <div className="banner"></div>

        <div className="card-container">
          <div className="card">
            <img src={sleepIcon} alt="Bed Time Icon" />
            <div className="card-content">
              <p>Bed Time</p>
              <p>21:00</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="card">
            <img src={alarmIcon} alt="Alarm Icon" />
            <div className="card-content">
              <p>Alarm</p>
              <p>16H and 18Min</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="card">
            <img src={wakeUpIcon} alt="Wake Up Icon" />
            <div className="card-content">
              <p>Wake Up</p>
              <p>06:30</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* New section for predicted sleep time */}
        {/* <div className="predicted-sleep-container">
          {predictedSleepTime && (
            <div className="predicted-sleep-card">
              <h2>Predicted Next Sleep Time</h2>
              <p>{predictedSleepTime} minutes from now</p>
            </div>
          )}
        </div> */}

        <div className="quality-goal-container">
          <div className="quality-goal-card">
            <div className="info">
              <img src={sleepQualityIcon} alt="Sleep Quality Icon" />
              <p>Sleep Quality</p>
            </div>
            <div className="circular-value">06 hr</div>
          </div>
          <div className="quality-goal-card">
            <div className="info">
              <img src={goalIcon} alt="Goal Icon" />
              <p>Goal</p>
            </div>
            <div className="circular-value">{predictedSleepTime} minutes</div>
          </div>
        </div>

        <div className="weekly-overview">
          <h2>Weekly Overview</h2>
          <div className="chart">
            <img src={chartImage} alt="Chart Overview" />
          </div>
        </div>
      </div>

      {/* Modal for sleep form */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Sleep Prediction Form</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Activity Start Time (Hours 6-18):</label>
                <input
                  type="number"
                  name="activity_start_time"
                  value={formData.activity_start_time}
                  onChange={handleInputChange}
                  min="6"
                  max="18"
                  required
                />
              </div>
              <div className="form-group">
                <label>Previous Sleep Duration (Minutes):</label>
                <input
                  type="number"
                  name="prev_sleep_duration"
                  value={formData.prev_sleep_duration}
                  onChange={handleInputChange}
                  min="30"
                  max="120"
                  required
                />
              </div>
              <div className="form-group">
                <label>Time Since Last Nap (Minutes):</label>
                <input
                  type="number"
                  name="time_since_last_nap"
                  value={formData.time_since_last_nap}
                  onChange={handleInputChange}
                  min="60"
                  max="300"
                  required
                />
              </div>
              <div className="form-group">
                <label>Room Temperature (Celsius 20-26):</label>
                <input
                  type="number"
                  name="room_temp"
                  value={formData.room_temp}
                  onChange={handleInputChange}
                  min="20"
                  max="26"
                  required
                />
              </div>
              <button type="submit">Predict Sleep Time</button>
              <button type="button" className="close-button" onClick={closeModal}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
