import axios from 'axios';
import React, { useState } from 'react';
import { FaBaby, FaBed, FaChartBar, FaHeartbeat, FaUtensils } from 'react-icons/fa';
import alarmIcon from './images/alarm-icon.png';
import banner from './images/banner.png';
import sleepIcon from './images/bed-time-icon.png';
import chartImage from './images/charta.png';
import goalIcon from './images/goal-icon.png';
import profilePic from './images/profile-picture-placeholder.png';
import sleepQualityIcon from './images/sleep-quality-icon.png';
import wakeUpIcon from './images/wake-up-icon.png';
import './index.css';

function App() {
  const [predictedSleepTime, setPredictedSleepTime] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    activity_start_time: '',
    prev_sleep_duration: '',
    time_since_last_nap: '',
    room_temp: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/predict', formData)
      .then(response => {
        setPredictedSleepTime(response.data.predicted_sleep_start_time);
        setShowModal(false);
      })
      .catch(error => {
        console.error('Error fetching the prediction:', error);
      });
  };

  const handleSleepClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="sidebar bg-purple-700 text-white fixed bottom-0 w-full md:static md:w-1/4 p-4 md:p-6 flex justify-between md:flex-col">
        <div className="logo-section md:mb-10 text-center md:text-left">
          {/* <h2 className="text-xl md:text-3xl font-bold">BabyChart</h2> */}
          {/* <img src={logoIcon} alt="BabyChart Logo" className="w-8 md:w-12 mx-auto md:mx-0 mt-2 md:mt-4" /> */}
        </div>
        <div className="menu-item cursor-pointer flex-grow md:flex-grow-0" onClick={handleSleepClick}>
          <FaBed className="w-6 h-6 md:w-8 md:h-8 inline-block" /> {/* Sleep Icon */}
        </div>
        <div className="menu-item cursor-pointer flex-grow md:flex-grow-0">
          <FaUtensils className="w-6 h-6 md:w-8 md:h-8 inline-block" /> {/* Feed Icon */}
        </div>
        <div className="menu-item cursor-pointer flex-grow md:flex-grow-0">
          <FaBaby className="w-6 h-6 md:w-8 md:h-8 inline-block" /> {/* Diaper Icon */}
        </div>
        <div className="menu-item cursor-pointer flex-grow md:flex-grow-0">
          <FaHeartbeat className="w-6 h-6 md:w-8 md:h-8 inline-block" /> {/* Health Icon */}
        </div>
        <div className="menu-item cursor-pointer flex-grow md:flex-grow-0">
          <FaChartBar className="w-6 h-6 md:w-8 md:h-8 inline-block" /> {/* Progress Icon */}
        </div>
      </div>

      {/* Main Content */}
      
      <div className="main-content flex-1 p-4 sm:p-6 md:ml-24">
        <div className="header flex justify-between items-center mb-6">
          <h1 className="text-xl md:text-3xl font-bold">Welcome Back, Mrs. Geetha!</h1>
          <img src={profilePic} alt="Profile Picture" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" />
        </div>
        <div className="card m-1">
            <img src={banner} alt="Bed Time Icon" className='h-[100px]' />
            
            
          </div>

        <div className="card-container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="card bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <img src={sleepIcon} alt="Bed Time Icon" className="w-8" />
            <div className="card-content">
              <p className="text-lg font-semibold">Bed Time</p>
              <p className="text-sm">21:00</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer" />
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
</label>
          </div>

          <div className="card bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <img src={alarmIcon} alt="Alarm Icon" className="w-8" />
            <div className="card-content">
              <p className="text-lg font-semibold">Alarm</p>
              <p className="text-sm">16H and 18Min</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer" />
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
</label>
          </div>

          <div className="card bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <img src={wakeUpIcon} alt="Wake Up Icon" className="w-8" />
            <div className="card-content">
              <p className="text-lg font-semibold">Wake Up</p>
              <p className="text-sm">06:30</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer" />
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
</label>
          </div>
        </div>

        <div className="quality-goal-container mt-6 grid grid-cols-2 gap-4 sm:gap-2">
          <div className="quality-goal-card bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <div className="info flex items-center">
              <img src={sleepQualityIcon} alt="Sleep Quality Icon" className="w-[15px] mr-2" />
              <p className="text-lg font-semibold">Quality</p>
            </div>
            <div className="circular-value text-[13px] font-bold">{(predictedSleepTime/2)*3}min</div>
          </div>
          <div className="quality-goal-card bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <div className="info flex items-center">
              <img src={goalIcon} alt="Goal Icon" className="w-6 mr-2" />
              <p className="text-lg font-semibold">Goal</p>
            </div>
            <div className="circular-value text-[13px] font-bold">{predictedSleepTime} min</div>
          </div>
        </div>

        <div className="weekly-overview mt-6">
          <h2 className="text-lg md:text-2xl font-semibold">Weekly Overview</h2>
          <div className="chart mt-4">
            <img src={chartImage} alt="Chart Overview" className="w-full" />
          </div>
        </div>
      </div>

      {/* Modal for sleep form */}
      {showModal && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="modal-content bg-white p-6 rounded-lg w-full sm:w-3/4 md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Sleep Prediction Form</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group mb-4">
                <label className="block mb-2 text-lg">Activity Start Time (Hours 6-18):</label>
                <input
                  type="number"
                  name="activity_start_time"
                  value={formData.activity_start_time}
                  onChange={handleInputChange}
                  min="6"
                  max="18"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="form-group mb-4">
                <label className="block mb-2 text-lg">Previous Sleep Duration (Minutes):</label>
                <input
                  type="number"
                  name="prev_sleep_duration"
                  value={formData.prev_sleep_duration}
                  onChange={handleInputChange}
                  min="30"
                  max="120"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="form-group mb-4">
                <label className="block mb-2 text-lg">Time Since Last Nap (Minutes):</label>
                <input
                  type="number"
                  name="time_since_last_nap"
                  value={formData.time_since_last_nap}
                  onChange={handleInputChange}
                  min="60"
                  max="300"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="form-group mb-4">
                <label className="block mb-2 text-lg">Room Temperature (Celsius 20-26):</label>
                <input
                  type="number"
                  name="room_temp"
                  value={formData.room_temp}
                  onChange={handleInputChange}
                  min="20"
                  max="26"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-md">Predict Sleep Time</button>
                <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded-md" onClick={closeModal}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
