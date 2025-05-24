import React, { useEffect, useState } from 'react';
import { FaTabletAlt } from 'react-icons/fa';

const BatteryAndImage = () => {
  const [batteryLevel, setBatteryLevel] = useState(15);
  const [currentImage, setCurrentImage] = useState(0);

  const images = ['/emotes/img1.jpg', '/emotes/img2.jpg', '/emotes/img3.jpg', '/emotes/img4.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    navigator.getBattery?.().then(battery => {
      const updateBattery = () => setBatteryLevel(Math.round(battery.level * 100));
      updateBattery();
      battery.addEventListener('levelchange', updateBattery);
      return () => battery.removeEventListener('levelchange', updateBattery);
    });
  }, []);

  const radius = 22;
  const stroke = 4;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (batteryLevel / 100) * circumference;

  return (
    <div className="flex items-center justify-center gap-6">
      {/* Battery Widget */}
      <div className="bg-gray-100 p-4 rounded-xl shadow-md flex flex-col items-center w-24 h-28">
        {/* Circular Progress Indicator */}
        <div className="relative w-14 h-14 mb-2">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 48 48">
            {/* Background Circle */}
            <circle
              cx="24"
              cy="24"
              r={normalizedRadius}
              fill="transparent"
              stroke="#fcdada"
              strokeWidth={stroke}
            />
            {/* Progress Circle */}
            <circle
              cx="24"
              cy="24"
              r={normalizedRadius}
              fill="transparent"
              stroke="#22c55e"
              strokeWidth={stroke}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-500 ease-out"
            />
          </svg>
          {/* Icon in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <FaTabletAlt className="text-gray-700 text-lg" />
          </div>
        </div>

        <span className="text-md font-semibold text-gray-800">{batteryLevel}%</span>
      </div>

      {/* Rotating Image */}
      <div className="w-27 h-27 rounded-xl overflow-hidden shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
        <img
          src={images[currentImage]}
          alt="Visual"
          className="object-cover w-full h-full hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default BatteryAndImage;
