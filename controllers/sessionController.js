// controllers/sessionController.js
import dotenv from 'dotenv';
import moment from 'moment-timezone';
import Session from '../models/sessionModel.js';
import { fetchWeatherData } from '../services/weatherService.js';

dotenv.config({ path: '../.env' });

export const createSession = async (req, res) => {

    const { email, lat, lng, timezone } = req.body;

    if (!timezone) {
        return res.status(400).json({ message: 'Timezone is required' });
    }

    try {
        // fetch last session 
        const tenMinutesAgo = moment().subtract(10, 'minute');
        const existingSession = await Session.findOne({ email, createdAt: { $gte: tenMinutesAgo } });

        if (existingSession) {
            // if a recent session exists, return it
            return res.status(200).json(existingSession);
        }

        // fetch weather data
        const weatherData = await fetchWeatherData(lat, lng);
        const currentData = moment().tz(timezone);
        const formattedDate = currentData.format('DD/MM/YYYY');
        const formattedTime = currentData.format('HH[h]mm');

        const newSession = new Session({
            email,
            lat,
            lng,
            date: formattedDate,
            time: formattedTime,
            name: weatherData.name,
            temperature: weatherData.temperature,
            weather: weatherData.weather,
            weatherIcon: weatherData.icon,
            maxTemperature: weatherData.maxTemperature,
            minTemperature: weatherData.minTemperature,
            windSpeed: weatherData.windSpeed,
            humidity: weatherData.humidity,
        });
        await newSession.save();
        res.status(201).json(newSession);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getLatestSession = async (req, res) => {
    const { email } = req.query;
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }
    try {
        const latestSession = await Session.findOne().sort({ createdAt: -1 });
        if (!latestSession) {
            return res.status(404).json({ message: 'Session not found' });
        }
        res.status(200).json(latestSession);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUserSessions = async (req, res) => {
    const { email } = req.query;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        const userSessions = await Session.find({ email }).sort({ createdAt: -1 });
        res.status(200).json(userSessions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
