// MoodTracker.jsx
import React, { useEffect, useState } from 'react';

const MoodTracker = () => {
  const [weather, setWeather] = useState(null);
  const [mood, setMood] = useState('Loading...');
  const [emoji, setEmoji] = useState('😐');

  const getMoodFromWeather = (main) => {
    switch (main) {
      case 'Rain': return { mood: 'Relaxed', emoji: '🌧️' };
      case 'Clear': return { mood: 'Exhausted', emoji: '☀️' };
      case 'Clouds': return { mood: 'Calm', emoji: '☁️' };
      case 'Snow': return { mood: 'Chill', emoji: '❄️' };
      case 'Thunderstorm': return { mood: 'Tense', emoji: '⛈️' };
      case 'Drizzle': return { mood: 'Sleepy', emoji: '🌦️' };
      case 'Mist':
      case 'Fog': return { mood: 'Drowsy', emoji: '🌫️' };
      default: return { mood: 'Neutral', emoji: '😐' };
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );
      const data = await res.json();
      setWeather(data.weather[0].main);
      const { mood, emoji } = getMoodFromWeather(data.weather[0].main);
      setMood(mood);
      setEmoji(emoji);
    });
  }, []);

  return (
    <div className="w-80 p-4 rounded-3xl bg-[#fff7ee] shadow-md font-sans text-gray-800">
      <div className="flex justify-between items-start">
        <h2 className="text-sm font-medium text-gray-700">Today’s Mood</h2>
        <span className="text-xl">{emoji}</span>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2 text-xs text-gray-500">
          {['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Today'].map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>
        <div className="text-lg font-bold text-right">
          {mood}
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
