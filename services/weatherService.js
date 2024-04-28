// services/weatherService.js
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config({ path: '../.env' });

export async function fetchWeatherData(lat, lng) {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric&lang=fr`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!data || !data.main || !data.weather) {
      throw new Error('Weather data is incomplete or unavailable.');
    }
    return {
      name: data.name,
      temperature: data.main.temp,
      weather: data.weather[0].description,
      icon: data.weather[0].icon,
      maxTemperature: data.main.temp_max,
      minTemperature: data.main.temp_min,
      windSpeed: data.wind.speed,
      humidity: data.main.humidity,
      rain: data.rain ? data.rain["1h"] : 0,
    };
  } catch (error) {
    throw error;
  }
}
