// WeatherDisplay.js
import React from 'react';
import Forecast from './Forecast'; // Ensure the import path is correct
import '../styles/WeatherDisplay.css';

const WeatherDisplay = ({ currentData, forecastData }) => {
  const timezoneOffset = currentData.timezone; // Offset in seconds
  const localTime = new Date(Date.now() + timezoneOffset * 1000); // Calculate local time

  const currentTime = localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const currentDate = localTime.toLocaleDateString();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[localTime.getUTCDay()];

  return (
    <>
      <div className="timeAndDay" style={{ color: "white" }}>
        <p className='time'>{currentTime}</p>
        <p>{currentDay} {currentDate}</p>
      </div>

      <div className="location" style={{ color: "white" }}>
        <p>{currentData.name}, {currentData.sys.country}</p>
      </div>

      <div className="forecast">
      {forecastData && <Forecast data={forecastData} />} 
      </div>
  
    </>
  );
};

export default WeatherDisplay;
