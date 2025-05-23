"use client";
import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { TiSocialInstagram } from "react-icons/ti";
import { BsLinkedin } from "react-icons/bs";
import { playMusic } from './playMusic';


import NavBar from './NavBar';
// import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import { playHover } from './playHover';


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
      <div className='h-[80vh] flex' id='firstPg'>
        <h1></h1>
      </div>
      {/*----------------------------About Page------------------------*/}
      
<About/>
      {/*----------------------------Skills------------------------*/}
      <div>
        <div>
          <Skills />
        </div>
      </div>

      {/*----------------------------Projects------------------------*/}
      <div className='min-h-screen flex flex-col  place-items-center py-10 md:py-5 lg:py-16' id='projectPg'>
        <div className='text-center text-[1.15rem] md:text-[1.8rem] px-2 md:px-6 lg:text-[2.5rem] lg:px-10 font-bold bg-[#d1ffa3] '>
          <h1 className='popBlack'>Projects I have Worked On</h1>
        </div>
        <div className='flex p-9 items-center justify-center'>
         
        </div>
      </div>
      {/*----------------------------Contact------------------------*/}

      {/*-----------------------------Footer--------------------------*/}
       <div className="lg:text-[15px] text-center lg:py-2 bg-gray-100 text-black  w-full" id='contactPg'>
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
