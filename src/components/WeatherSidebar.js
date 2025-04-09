import React from "react";
import { getIcon } from "../utils/weatherHelpers";

const WeatherSidebar = ({ city, setCity, unit, timeFormat, weather }) => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sidebar">
      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmR9fI15lST7ep4if4QlXmXE0K5G9EpSDZA&s" alt="search" />
        </button>
      </form>
      {weather && (
        <>
          <div className="weather-icon">
            <img id="icon" src={getIcon(weather.currentConditions.icon)} alt="weather icon" />
          </div>
          <div className="temperature">
            <h1 id="temp">
              {unit === "c"
                ? weather.currentConditions.temp
                : ((weather.currentConditions.temp * 9) / 5 + 32).toFixed(1)}
            </h1>
            <span className="temp-unit">°{unit.toUpperCase()}</span>
          </div>
          <div className="date-time">
            <p id="date-time">{new Date().toLocaleString()}</p>
          </div>
          <div className="divider"></div>
          <div className="condition-rain">
            <div className="condition">
              <i className="fas fa-cloud"></i>
              <p id="condition">{weather.currentConditions.conditions}</p>
            </div>
           
          </div>
          <div className="location">
            <div className="location-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="location-text">
              <p id="location">{weather.resolvedAddress}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherSidebar;
