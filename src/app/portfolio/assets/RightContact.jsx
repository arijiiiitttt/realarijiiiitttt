// RightContact.jsx (Moving Left to Right)
import React from 'react';

const RightContact = () => {
  return (
    <div className="overflow-hidden relative w-full bg-gradient-to-l from-pink-500 to-red-500 py-2">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mx-8 shadow-md hover:shadow-lg transition-shadow duration-300">Contact Me</span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mx-8 shadow-md hover:shadow-lg transition-shadow duration-300">Contact Me</span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mx-8 shadow-md hover:shadow-lg transition-shadow duration-300">Contact Me</span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mx-8 shadow-md hover:shadow-lg transition-shadow duration-300">Contact Me</span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mx-8 shadow-md hover:shadow-lg transition-shadow duration-300">Contact Me</span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mx-8 shadow-md hover:shadow-lg transition-shadow duration-300">Contact Me</span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mx-8 shadow-md hover:shadow-lg transition-shadow duration-300">Contact Me</span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mx-8 shadow-md hover:shadow-lg transition-shadow duration-300">Contact Me</span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mx-8 shadow-md hover:shadow-lg transition-shadow duration-300">Contact Me</span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mx-8 shadow-md hover:shadow-lg transition-shadow duration-300">Contact Me</span>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite reverse;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default RightContact;
