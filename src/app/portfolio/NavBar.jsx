import React, { useState, useEffect } from "react";
import { HiOutlineBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { playHover } from "./playHover";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('nav')) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav className="flex items-center justify-between lg:p-5 p-3" id="homePg">
            <div className="flex items-center justify-start flex-1">
                <a className="flex items-center group relative">
                    <img
                        src="./logos/a.png"
                        className="h-19 transform transition-transform duration-500 group-hover:rotate-180"
                        alt="logo"
                    />
                    <span className="ml-4 text-white text-sm bg-gray-800 bg-opacity-80 px-4 py-2 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-xl">
                        Hello, I'm Arijit Roy, passionate about web development, curious & eager to tackle impactful projects.
                    </span>
                </a>
            </div>

            {/* Hamburger Menu Icon */}
            <div className="lg:hidden z-50">
                <button onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? (
                        <HiOutlineXMark className="w-6 h-6" />
                    ) : (
                        <HiOutlineBars3BottomRight className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Navigation Items */}
            <div className={`lg:static lg:flex lg:items-center lg:w-auto lg:opacity-100 lg:translate-y-0 transition-all duration-300 ease-in-out
                ${isMenuOpen 
                    ? "fixed inset-0 bg-white z-40 flex items-center justify-center translate-y-0 opacity-100" 
                    : "fixed -translate-y-full opacity-0 pointer-events-none"}`}
            >
                <ul className="flex flex-col lg:flex-row lg:gap-7 text-xl lg:text-[20px] font-light text-center">
                    <li className="my-4 lg:my-0">
                        <a href="#homePg" onClick={closeMenu} className="hover:text-[#ff003a] transition-colors">Home</a>
                    </li>
                    <li className="my-4 lg:my-0">
                        <a href="#aboutPg" onClick={closeMenu} className="hover:text-[#ff003a] transition-colors">About</a>
                    </li>
                    <li className="my-4 lg:my-0">
                        <a href="/underprocess" onClick={closeMenu} className="hover:text-[#ff003a]  pointer transition-colors">Blog</a>
                    </li>
                    <li className="my-4 lg:my-0">
                        <a href="#projectPg" onClick={closeMenu} className="hover:text-[#ff003a] transition-colors">Projects</a>
                    </li>
                    <li className="my-4 lg:my-0">
                        <a
                            href="#contactPg"
                            className="text-lg hover:bg-black font-semibold hover:text-white bg-[#ff003a] lg:px-5 lg:py-1 px-6 py-2 rounded-lg text-white block"
                            onMouseEnter={playHover}
                            onClick={closeMenu}
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;