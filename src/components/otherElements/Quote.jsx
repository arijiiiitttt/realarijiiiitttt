import React, { useState, useEffect } from "react";

const quotes = [
  "No matter when it is, it's always now. Wow! Mind blown, maaan!",
  "The present is a gift, that's why it's called the present.",
  "Every moment is now. Stay curious!",
  "Time? Never heard of it.",
  "Chill vibes only, wherever you are in time."
];

export default function Quote() {
  const [quote, setQuote] = useState("");
  const [dateInfo, setDateInfo] = useState({ day: "", weekday: "" });

  useEffect(() => {
    // Set random quote
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    // Set current date
    const today = new Date();
    const day = today.getDate();
    const weekday = today.toLocaleString("en-US", { weekday: "short" });
    setDateInfo({ day, weekday });
  }, []);

  return (
    <div
      className="w-[350px] h-[180px] rounded-2xl shadow-md p-4 relative text-sm text-gray-800"
      style={{
        backgroundImage: "url('/cute-bg.jpg')", // Replace with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/80 rounded-md px-3 py-1 w-[70px] text-center shadow-sm">
        <div className="text-lg font-semibold">{dateInfo.day}</div>
        <div className="text-xs">{dateInfo.weekday}</div>
      </div>

      <div className="absolute top-4 right-4 w-[220px] bg-white/80 p-2 rounded-md shadow-sm">
        <p className="text-[13px] font-medium leading-snug">{quote}</p>
      </div>
    </div>
  );
}
