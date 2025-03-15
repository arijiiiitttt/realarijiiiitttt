import React from 'react'
import { playHover } from './playHover';

const NavBar = () => {
    return (
        <>
            <nav className="flex items-center justify-between lg:p-5 p-3" id="homePg">
                <div className="flex items-center justify-start flex-1">
                    <a className="flex flex-row items-center">
                        <img
                            src="./Logos/a.svg"
                            className="h-12" alt="logo" />
                    </a>
                </div>

                {/* Hamburger Menu Icon */}
                <div className="lg:hidden">
                    <button>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Items */}
                <ul
                    className={`flex-col lg:flex lg:flex-row lg:gap-7 lg:text-[20px] font-light absolute lg:static left-0 w-full lg:w-auto lg:h-auto lg:bg-transparent bg-white transition-transform transform 
          } lg:translate-y-0 p-5 lg:p-0 top-0 lg:top-auto lg:justify-end`}
                >
                    <li className="my-2 lg:my-0">
                        <a href="#homePg">Home</a>
                    </li>
                    <li className="my-2 lg:my-0">
                        <a href="#aboutPg">About</a>
                    </li>
                    <li className="my-2 lg:my-0">
                        <a href="blog">Blog</a>
                    </li>
                    <li className="my-2 lg:my-0">
                        <a href="#projectPg">Projects</a>
                    </li>
                    <li className="my-2 lg:my-0">
                        <a
                            href="#contactPg"
                            className=" text-lg hover:bg-black font-semibold
 hover:text-white bg-[#ff003a] lg:px-5 lg:py-1 px-3 py-1 rounded-lg text-white font-normal"

                            onMouseEnter={playHover}
                        >

                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar