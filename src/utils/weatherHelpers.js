export const fetchWeatherData = async (cityName) => {
    const API_KEY = "EJ6UBL2JEQGYB3AA4ENASN62J";
    const res = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=${API_KEY}&contentType=json`
    );
    if (!res.ok) throw new Error("Failed to fetch weather data");
    return await res.json();
  };
  
  export const getIcon = (condition) => {
    switch (condition) {
      case "partly-cloudy-day": return "https://i.ibb.co/PZQXH8V/27.png";
      case "partly-cloudy-night": return "https://i.ibb.co/Kzkk59k/15.png";
      case "rain": return "https://i.ibb.co/kBd2NTS/39.png";
      case "clear-day": return "https://i.ibb.co/rb4rrJL/26.png";
      case "clear-night": return "https://i.ibb.co/1nxNGHL/10.png";
      default: return "https://i.ibb.co/rb4rrJL/26.png";
    }
  };
  
  export const getBackgroundImage = (condition) => {
    switch (condition) {
      case "partly-cloudy-day": return "https://i.ibb.co/qNv7NxZ/pc.webp";
      case "partly-cloudy-night": return "https://i.ibb.co/RDfPqXz/pcn.jpg";
      case "rain": return "https://i.ibb.co/h2p6Yhd/rain.webp";
      case "clear-day": return "https://i.ibb.co/WGry01m/cd.jpg";
      case "clear-night": return "https://i.ibb.co/kqtZ1Gx/cn.jpg";
      default: return "https://i.ibb.co/qNv7NxZ/pc.webp";
    }
  };
  
  export const getDayName = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };
  
  export const formatTime = (time) => {
    const [h, m] = time.split(":");
    const hour = parseInt(h);
    const period = hour >= 12 ? "pm" : "am";
    return `${hour % 12 || 12}:${m} ${period}`;
  };
  
  export const getTemp = (temp, unit) => {
    return unit === "c" ? temp : ((temp * 9) / 5 + 32).toFixed(1);
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
    if (vis <= 0.03) return "Dense Fog";
    if (vis <= 0.16) return "Moderate Fog";
    if (vis <= 0.35) return "Light Fog";
    if (vis <= 1.13) return "Very Light Fog";
    if (vis <= 2.16) return "Light Mist";
    if (vis <= 5.4) return "Very Light Mist";
    if (vis <= 10.8) return "Clear Air";
    return "Very Clear Air";
  };
  
  export const getAirQualityStatus = (aqi) => {
    if (aqi <= 50) return "Good👌";
    if (aqi <= 100) return "Moderate😐";
    if (aqi <= 150) return "Unhealthy for Sensitive Groups😷";
    if (aqi <= 200) return "Unhealthy😷";
    if (aqi <= 250) return "Very Unhealthy😨";
    return "Hazardous😱";
  };
  