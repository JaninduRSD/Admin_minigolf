import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "bb03bfddfa9247b4897124634240410";
  const LOCATION = "Colombo, Sri Lanka"; // Change to dynamic location if needed
  const WEATHER_API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${LOCATION}&days=5`;

  const iconMapping = {
    "Clear": "☀️",
    "Sunny": "☀️",
    "Partly cloudy": "🌤️",
    "Cloudy": "☁️",
    "Overcast": "☁️",
    "Mist": "🌫️",
    "Fog": "🌫️",
    "Drizzle": "🌦️",
    "Light rain": "🌧️",
    "Rain": "🌧️",
    "Heavy rain": "🌧️",
    "Showers": "🌧️",
    "Thunderstorm": "⛈️",
    "Snow": "❄️",
    "Light snow": "🌨️",
    "Heavy snow": "❄️",
    "Sleet": "🌨️",
    "Hail": "🌧️",
    "Tornado": "🌪️",
    "Dust storm": "🌫️",
    "Sandstorm": "🌪️",
    "Windy": "💨",
    "Hot": "🔥",
    "Cold": "❄️",
    "Tropical storm": "🌩️",
    "Hurricane": "🌪️",
    "Icy": "❄️",
    "Freezing rain": "🌧️",
    "Blizzard": "❄️",
    "Partly sunny": "🌤️", // Additional condition
    "Thundery outbreaks possible": "⛈️", // Additional condition
    "Isolated thunderstorms": "⛈️", // Additional condition
    "Patchy rain": "🌦️", // Additional condition
    "Heavy showers": "🌧️", // Additional condition
    "Light showers": "🌦️", // Additional condition
    "Frost": "❄️", // Additional condition
    "Showers in the vicinity": "🌦️", // Additional condition
    "Moderate rain": "🌧️", // Additional condition
    "Heavy drizzle": "🌦️", // Additional condition
    "Showers with thunder": "⛈️", // Additional condition
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await axios.get(WEATHER_API_URL);
        const weather = response.data;

        // Transform the response into our component's state
        const currentWeather = {
          currentTemp: Math.round(weather.current.temp_c), // Use Celsius and round
          location: weather.location.name, // City name
          condition: weather.current.condition.text, // Weather condition
          forecast: weather.forecast.forecastday.map((day) => ({
            day: new Date(day.date).toLocaleString("en-US", { weekday: "short" }), // Format day
            temp: Math.round(day.day.avgtemp_c), // Average temperature
            condition: day.day.condition.text, // Condition for the day
          })),
        };

        setWeatherData(currentWeather);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading || !weatherData) {
    return <div>Loading weather data...</div>; // Loading state
  }

  return (
    <div className="bg-color5 text-white rounded-lg p-5 w-full">
      {/* Main Weather Info */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="text-6xl">{iconMapping[weatherData.condition] || "❓"}</span>
          <div className="ml-3">
            <h2 className="text-3xl font-bold">{weatherData.currentTemp}°C</h2>
            <p className="text-lg">{weatherData.location}</p>
          </div>
        </div>
        <button className="text-xl hover:bg-green-700 p-2 rounded-full">⋮</button>
      </div>

      {/* Forecast */}
      <div className="grid grid-cols-5 gap-2 text-center">
        {weatherData.forecast.map((day, index) => (
          <div key={index}>
            <span className="block text-xl">{iconMapping[day.condition] || "❓"}</span>
            <span className="block text-sm">{day.temp}°C</span>
            <span className="block text-sm">{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherWidget;
