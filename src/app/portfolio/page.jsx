"use client";
import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { TiSocialInstagram } from "react-icons/ti";
import { BsLinkedin } from "react-icons/bs";
import { playMusic } from './playMusic';


import NavBar from './NavBar';

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
    
<NavBar/>
    
      {/*----------------------------Header------------------------*/}

      {/*-------------------------First Page------------------------*/}
      <div className='min-h-screen flex' id='firstPg'>
        <h1></h1>
      </div>
      {/*----------------------------About Page------------------------*/}
      <div className='lg:min-h-screen h-[68vh] flex flex-col justify-center items-center lg:py-10' id='aboutPg'>
        <div className='text-center text-[1.3rem] md:text-[1.99rem] md:px-6 lg:text-[2.5rem] lg:px-10 popBlack font-bold bg-[#defbff] '>
          <h1>Meet the Developer</h1>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row md:gap-x-3 lg:gap-x-6 md:p-6 lg:p-12 items-center justify-center'>
          <img src='./Logos/cat.png' className='rounded-full w-[18rem] md:w-[24.5rem] lg:w-[29rem] border-white lg:border-3 shadow-sm' alt='img'></img>
          <div className='flex flex-col items-center md:items-start justify-center mt-4 md:mt-0 lg:mt-0'>
            <p className='text-center md:text-left'>Click the button below or visit his LinkedIn profile.</p>
            <div className='flex flex-row gap-2 md:gap-3 lg:gap-3 font-medium mt-4'>
              <button
                className='hover:bg-black bg-[#ff0000] px-5 py-1 md:px-7 md:py-2 lg:px-7 lg:py-2 border-2 md:border-2 lg:border-2 shadow-md border-white text-white rounded-lg text-[19px] md:text-[21.5px] lg:text-[22px]'
                onClick={handleButtonClick}
              >
                Hire Me
              </button>
              <button
                className='hover:bg-black hover:text-white lg:text-[22px] text-[19px] md:text-[21.5px] border-2 lg:border-2 md:px-6 px-5 lg:px-8 shadow-md border-black rounded-lg'
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
        <h2 className='flex md:text-xs lg:text-lg anton justify-center'>Mastered Skills</h2>
        <div>

        </div>
      </div>

      {/*----------------------------Projects------------------------*/}
      <div className='min-h-screen flex flex-col  place-items-center py-3 md:py-5 lg:py-10' id='projectPg'>
        <div className='text-center text-[1.15rem] md:text-[1.8rem] px-2 md:px-6 lg:text-[2.5rem] lg:px-10 font-bold bg-[#d1ffa3] '>
          <h1 className='popBlack'>Projects I have Worked On</h1>
        </div>
        <div>
          {/* Cards */}
        </div>
      </div>
      {/*----------------------------Contact------------------------*/}
      <div className='w-full h-[50vh] bg-red-200 rounded-t-lg inset-shadow-sm inset-shadow-indigo-500 flex flex-col justify-center items-center' id='contactPg'>

      </div>
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
