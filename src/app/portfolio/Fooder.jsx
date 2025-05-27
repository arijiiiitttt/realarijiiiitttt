import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { PiMicrophoneStageFill } from "react-icons/pi";

export default function Fooder() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fdf5ef] to-[#fdfbe6] flex items-center justify-center px-4 py-16 sm:py-24">
      <div
        className="bg-white rounded-[40px] sm:rounded-[60px] shadow-2xl w-full max-w-6xl text-center py-16 px-4 sm:py-24 sm:px-8"
        data-aos="fade-up"
      >
        {/* Top Text */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-8 sm:mb-10">
          Got a proposal or project or want to work <br className="hidden sm:block" />
          together on something?
        </p>

        {/* Huge Heading */}
        <h1 className="text-[48px] sm:text-[72px] md:text-[100px] lg:text-[120px] font-black tracking-tight text-black leading-none mb-16 sm:mb-24">
          CONTACT ME
        </h1>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 sm:gap-12 md:gap-16 mb-12 sm:mb-20 flex-wrap">
          {/* Instagram */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-100 flex items-center justify-center hover:scale-110 transition">
            <FaInstagram className="text-black" size={28} />
          </div>
          {/* X (Twitter) */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-yellow-100 via-green-100 to-blue-100 flex items-center justify-center hover:scale-110 transition">
            <FaXTwitter className="text-black" size={28} />
          </div>
          {/* Mic Icon */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-200 flex items-center justify-center hover:scale-110 transition">
            <PiMicrophoneStageFill className="text-black" size={28} />
          </div>
        </div>

        {/* Footer */}
        <p className="text-base sm:text-lg md:text-xl text-black font-semibold">
          @Lumio ‘24
        </p>
      </div>
    </div>
  );
}
