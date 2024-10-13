import React from 'react';
import './App.css'; // Importing the CSS file for styles
import sleepIcon from './images/bed-time-icon.png'; // Bed Time icon
import alarmIcon from './images/alarm-icon.png'; // Alarm icon
import wakeUpIcon from './images/wake-up-icon.png'; // Wake Up icon
import feedIcon from './images/feed-icon.png'; // Feed icon
import diaperIcon from './images/diaper-icon.png'; // Diaper icon
import healthIcon from './images/health-icon.png'; // Health icon
import progressIcon from './images/progress-icon.png'; // Progress icon
import logoIcon from './images/logo.png'; // Logo icon
import profilePic from './images/profile-picture-placeholder.png'; // Profile picture
import sleepQualityIcon from './images/sleep-quality-icon.png'; // Sleep quality icon
import goalIcon from './images/goal-icon.png'; // Goal icon
import chartImage from './images/charta.png'; // Weekly chart image

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="logo-section">
          <h2>BabyChart</h2>
          <img src={logoIcon} alt="BabyChart Logo" /> {/* Adding the logo icon */}
        </div>
        <div className="menu-item">
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

        <div className="banner">
          
        </div>

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
            <div className="circular-value">08 hr</div>
          </div>
        </div>

        <div className="weekly-overview">
          <h2>Weekly Overview</h2>
          <div className="chart">
            <img src={chartImage} alt="Chart Overview" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
