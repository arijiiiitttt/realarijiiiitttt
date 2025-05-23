import React from 'react';

const Calendar = () => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth(); // 0-indexed
  const currentYear = today.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const daysArray = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysArray.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  return (
    <div className="w-64 p-4 rounded-2xl bg-[#f7efe6] text-gray-800 font-sans shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="text-5xl font-bold leading-none">{currentDay}</div>
        <div className="text-sm tracking-widest font-semibold uppercase text-gray-600">
          {today.toLocaleDateString('en-US', { weekday: 'long' })}
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold mb-2">
        {weekdays.map((day, i) => (
          <div key={i} className="text-gray-700">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-2 text-sm text-center">
        {daysArray.map((day, idx) => (
          <div key={idx} className="h-6 flex items-center justify-center">
            {day ? (
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full ${
                  day === currentDay ? 'bg-blue-500 text-white font-bold' : ''
                }`}
              >
                {day}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
