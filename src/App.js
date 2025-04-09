import React, { useEffect, useState } from "react";
import WeatherSidebar from "./components/WeatherSidebar";
import WeatherMain from "./components/WeatherMain";
import { fetchWeatherData, getBackgroundImage } from "./utils/weatherHelpers";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("c");
  const [timeFormat, setTimeFormat] = useState("week");
  const [city, setCity] = useState("Delhi");
  const [loading, setLoading] = useState(true);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    getWeather(city);
  }, [city, unit, timeFormat]);

  const getWeather = async (cityName) => {
    setLoading(true);
    try {
      const data = await fetchWeatherData(cityName);
      setWeather(data);
      setBgImage(getBackgroundImage(data.currentConditions.icon));
    } catch (error) {
      console.error("Error fetching weather:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.3s ease",
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <div className="wrapper">
        <WeatherSidebar
          city={city}
          setCity={setCity}
          unit={unit}
          timeFormat={timeFormat}
          weather={weather}
        />
        <WeatherMain
          unit={unit}
          setUnit={setUnit}
          timeFormat={timeFormat}
          setTimeFormat={setTimeFormat}
          weather={weather}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default App;
