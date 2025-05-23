import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (value) => value.toString().padStart(2, '0');
  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  const weekday = weekdayNames[time.getDay()];
  const day = time.getDate();
  const month = monthNames[time.getMonth()];

  return (
    <div className="bg-gray-700 text-white px-14 py-5 rounded-xl inline-block shadow-md text-center">
      <div className="text-3xl font-mono tracking-widest">
        {hours}:{minutes}:{seconds}
      </div>
      <div className="text-sm mt-1 text-gray-300">
        {weekday}, {day} {month}
      </div>
    </div>
  );
};

export default Clock;
