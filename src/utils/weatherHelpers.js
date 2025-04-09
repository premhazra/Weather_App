export const fetchWeatherData = async (cityName) => {
  const API_KEY = "49a91d7600447ff7d86ed3f922a29f51";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch weather data");
  const data = await res.json();

  return {
    currentConditions: {
      temp: data.main.temp,
      icon: data.weather[0].main.toLowerCase(),
      conditions: data.weather[0].description,
      windspeed: data.wind.speed,
      winddir: data.wind.deg,
      humidity: data.main.humidity,
      visibility: data.visibility / 1000,
      sunrise: formatUnixTime(data.sys.sunrise, data.timezone),
      sunset: formatUnixTime(data.sys.sunset, data.timezone),
      uvindex: 5, // static or use another OpenWeather endpoint
    },
    resolvedAddress: `${data.name}, ${data.sys.country}`,
  };
};

const formatUnixTime = (unix, offset) => {
  const date = new Date((unix + offset) * 1000);
  return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
};

export const getIcon = (condition) => {
  switch (condition) {
    case "clouds": return "https://i.ibb.co/PZQXH8V/27.png";
    case "rain": return "https://i.ibb.co/kBd2NTS/39.png";
    case "clear": return "https://i.ibb.co/rb4rrJL/26.png";
    default: return "https://i.ibb.co/rb4rrJL/26.png";
  }
};

export const getBackgroundImage = (condition) => {
  switch (condition) {
    case "clouds": return "https://i.ibb.co/qNv7NxZ/pc.webp";
    case "rain": return "https://i.ibb.co/h2p6Yhd/rain.webp";
    case "clear": return "https://i.ibb.co/WGry01m/cd.jpg";
    default: return "https://i.ibb.co/qNv7NxZ/pc.webp";
  }
};

export const getUVStatus = (uv) => {
  if (uv <= 2) return "Low";
  if (uv <= 5) return "Moderate";
  if (uv <= 7) return "High";
  if (uv <= 10) return "Very High";
  return "Extreme";
};

export const getHumidityStatus = (humidity) => {
  if (humidity <= 30) return "Low";
  if (humidity <= 60) return "Moderate";
  return "High";
};

export const getVisibilityStatus = (vis) => {
  if (vis <= 1) return "Dense Fog";
  if (vis <= 3) return "Foggy";
  if (vis <= 6) return "Mist";
  if (vis <= 10) return "Clear";
  return "Very Clear";
};

export const getAirQualityStatus = (deg) => {
  if (deg <= 90) return "Good👌";
  if (deg <= 180) return "Moderate😐";
  if (deg <= 270) return "Poor😷";
  return "Very Poor😨";
};
