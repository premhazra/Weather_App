import React from "react";
import {
  getIcon,
  getUVStatus,
  getHumidityStatus,
  getVisibilityStatus,
  getAirQualityStatus
} from "../utils/weatherHelpers";

const WeatherMain = ({ unit, setUnit, timeFormat, setTimeFormat, weather, loading }) => {
  return (
    <div className="main">
      <nav>
        <ul className="options">
          <button className="active">Today</button>
        </ul>
        <ul className="options units">
          <button className={unit === "c" ? "active" : ""} onClick={() => setUnit("c")}>°C</button>
          <button className={unit === "f" ? "active" : ""} onClick={() => setUnit("f")}>°F</button>
        </ul>
      </nav>

      <div className="cards">
        <div className="card">
          <h2 className="day-name">Now</h2>
          <div className="card-icon">
            <img src={getIcon(weather?.currentConditions?.icon)} className="day-icon" alt="icon" />
          </div>
          <div className="day-temp">
            <h2 className="temp">{weather?.currentConditions?.temp}</h2>
            <span className="temp-unit">°{unit.toUpperCase()}</span>
          </div>
        </div>
      </div>

      <div className="highlights">
        <h2 className="heading">today's highlights</h2>
        <div className="cards">
          <HighlightCard title="UV Index" value={weather?.currentConditions?.uvindex} status={getUVStatus(weather?.currentConditions?.uvindex)} />
          <HighlightCard title="Wind Status" value={`${weather?.currentConditions?.windspeed} km/h`} />
          <HighlightCard title="Sunrise & Sunset" value={`${weather?.currentConditions?.sunrise} / ${weather?.currentConditions?.sunset}`} />
          <HighlightCard title="Humidity" value={`${weather?.currentConditions?.humidity}%`} status={getHumidityStatus(weather?.currentConditions?.humidity)} />
          <HighlightCard title="Visibility" value={`${weather?.currentConditions?.visibility} km`} status={getVisibilityStatus(weather?.currentConditions?.visibility)} />
          <HighlightCard title="Air Quality" value={`${weather?.currentConditions?.winddir}°`} status={getAirQualityStatus(weather?.currentConditions?.winddir)} />
        </div>
      </div>

      <p className="credits">Weather Forecast App</p>
    </div>
  );
};

const HighlightCard = ({ title, value, status }) => (
  <div className="card2">
    <h4 className="card-heading">{title}</h4>
    <div className="content">
      <p className="highlight-value">{value}</p>
      {status && <p className="highlight-status">{status}</p>}
    </div>
  </div>
);

export default WeatherMain;
