"use client";
import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { TiSocialInstagram } from "react-icons/ti";
import { BsLinkedin } from "react-icons/bs";
import { playMusic } from './playMusic';
import { playHover } from './playHover';

import NavBar from './NavBar';
import Projects from './Projects';
import Skills from './Skills';

// ------------------------Download PDF--------------------- 
const downloadPDF = () => {
  const confirmed = window.confirm("Do you want to download the Resume📃??");
  if (confirmed) {
    const link = document.createElement('a');
    link.href = './path/to/your/file.pdf';
    link.download = 'Arijit Roy-s Resume📃.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

const handleButtonClick = () => {
  playMusic();
};

const Page = () => {

  return (
    <>
      {/*-------------------------Navbar------------------------*/}

      <NavBar />

      {/*----------------------------Header------------------------*/}

      {/*-------------------------First Page------------------------*/}
      <div className='min-h-screen flex' id='firstPg'>
        <h1></h1>
      </div>
      {/*----------------------------About Page------------------------*/}
      <div
  className="lg:min-h-screen h-[68vh] flex flex-col justify-center items-center w-full"
  id="aboutPg"
>
  {/* Section Heading */}
  <div className="text-center text-[1.3rem] md:text-[1.99rem] md:px-6 lg:text-[2.5rem] lg:px-10 popBlack font-bold bg-[#defbff]">
    <h1>Meet the Developer</h1>
  </div>

  {/* Content Section */}
  <div className="flex flex-col  md:flex-row lg:flex-row md:gap-x-6 w-2/3 lg:gap-x-8 md:p-6 items-center justify-center ">
    {/* Profile Image */}
    <img
      src="./logos/aa.jpg"
      className="rounded-full w-[18rem] md:w-[24.5rem] lg:w-[26rem] border-white lg:border-3 shadow-lg"
      alt="Developer Profile"
    />

    {/* Description and Buttons */}
    <div className="flex flex-col  items-center md:items-start justify-center text-center md:text-left mt-8 md:mt-0">
      {/* Description */}
      <p className="text-left  text-sm md:text-base lg:text-lg text-gray-800 md:pr-6 lg:pr-8">
        Hello, I’m Arijit Roy, passionate about development with a focus on websites and applications. My hands-on
        experience with personal projects has sharpened my skills and creativity. Proficient in JavaScript and React, I
        embrace new challenges to refine my expertise and contribute meaningfully to projects which are impactful, driven by an
        enthusiasm for learning and creating.
      </p>

      {/* Buttons */}
      <div className="flex flex-row gap-4 md:gap-6 font-medium mt-6">
        <button
          className="hover:bg-black bg-[#ff0000] px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-3 border-2 shadow-md border-white text-white rounded-lg text-sm md:text-base lg:text-xl transition-all"
          onMouseEnter={playHover}
          onClick={handleButtonClick}
        >
          Hire Me
        </button>
        <button
          className="hover:bg-black hover:text-white text-sm md:text-base lg:text-lg border-2 px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-3 shadow-md border-black rounded-lg transition-all"
          onMouseEnter={playHover}
          onClick={() => {
            handleButtonClick();
            downloadPDF();
          }}
        >
          View Resume
        </button>
      </div>
    </div>
  </div>
</div>

      {/*----------------------------Skills------------------------*/}
      <div>
        <div>
          <Skills />
        </div>
      </div>

      {/*----------------------------Projects------------------------*/}
      <div className='min-h-screen flex flex-col  place-items-center py-3 md:py-5 lg:py-10' id='projectPg'>
        <div className='text-center text-[1.15rem] md:text-[1.8rem] px-2 md:px-6 lg:text-[2.5rem] lg:px-10 font-bold bg-[#d1ffa3] '>
          <h1 className='popBlack'>Projects I have Worked On</h1>
        </div>
        <div className='flex p-9 items-center justify-center'>
          <Projects />
        </div>
      </div>
      {/*----------------------------Contact------------------------*/}

      {/*-----------------------------Footer--------------------------*/}
      <div className="lg:text-[15px] text-center lg:py-2 text-gray-900" id='contactPg'>
        <div className="flex flex-row  gap-[0.2rem] lg:gap-1.5 justify-center items-center cursor-pointer animate-bounce">
          <a href="https://github.com/arijiiiitttt" target="_blank" rel="noopener noreferrer">
            <TiSocialInstagram className="lg:size-[1.02rem] " />
          </a>
          <a href="https://www.instagram.com/realarijiiiittttroyyy/" target="_blank" rel="noopener noreferrer">
            <IoLogoGithub className="lg:size-[1.02rem]" />
          </a>
          <a href="https://www.linkedin.com/in/realarijiiiitttt/" target="_blank" alt='linkedin'>
            < BsLinkedin className="lg:size-[1.02rem]" />
          </a>
        </div>
        <p className="text-xs md:text-sm lg:text-sm mt-[0.6px] md:mt-1">© Made with 💖 by realarijit</p>
      </div>
    </>
  )
}

export default Page
