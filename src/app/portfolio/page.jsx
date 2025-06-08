"use client";
import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { TiSocialInstagram } from "react-icons/ti";
import { BsLinkedin } from "react-icons/bs";
import { playMusic } from './playMusic';
import NavBar from './NavBar';
import Skills from './Skills';
import About from './About';
import { playHover } from './playHover';
import Projects from './Projects';
import { motion } from 'framer-motion';
import Contact from './Contact';
import Footer from './Fooder';
import FAQ from './FAQ';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};

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

const page = () => {
  return (
    <>
      {/*-------------------------Navbar------------------------*/}
      <NavBar />

      {/*----------------------------Header------------------------*/}
      {/*-------------------------First Page------------------------*/}
      <motion.div
        className="h-[100vh] bg-white flex flex-col items-center justify-center p-4 font-inter"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Add your content here with motion components */}
      </motion.div>


      {/*----------------------------About Page------------------------*/}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInVariants}
      >
        <About />
      </motion.div>

      {/*----------------------------Skills------------------------*/}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Skills />
        </motion.div>
      </motion.div>



      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <FAQ />
        </motion.div>
      </motion.div>


      {/*----------------------------Projects------------------------*/}
      <motion.div
        className='min-h-screen flex flex-col place-items-center py-10 md:py-5 lg:py-16'
        id='projectPg'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className='text-center text-[1.15rem] md:text-[1.8rem] px-2 md:px-6 lg:text-[2.5rem] lg:px-10 font-bold bg-[#d1ffa3]'
          variants={itemVariants}
        >
          <h1 className='popBlack'>Projects I have Worked On</h1>
        </motion.div>
        <motion.div
          className='flex p-9 items-center justify-center'
          variants={itemVariants}
        >
          <Projects />
        </motion.div>
      </motion.div>








      {/*----------------------------Contact------------------------*/}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Contact />
        </motion.div>
      </motion.div>




      {/*-----------------------------Footer--------------------------*/}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Footer />
        </motion.div>
      </motion.div>

      {/* <motion.div 
        className="lg:text-[15px] text-center lg:py-2 bg-white text-black h-[20vh] w-full" 
        id='contactPg'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInVariants}
      >
        <motion.div 
          className="flex flex-row gap-[0.2rem] lg:gap-1.5 justify-center items-center cursor-pointer animate-bounce"
          variants={itemVariants}
        >
          <a href="https://github.com/arijiiiitttt" target="_blank" rel="noopener noreferrer">
            <TiSocialInstagram className="lg:size-[1.02rem]" />
          </a>
          <a href="https://www.instagram.com/realarijiiiittttroyyy/" target="_blank" rel="noopener noreferrer">
            <IoLogoGithub className="lg:size-[1.02rem]" />
          </a>
          <a href="https://www.linkedin.com/in/realarijiiiitttt/" target="_blank" alt='linkedin'>
            <BsLinkedin className="lg:size-[1.02rem]" />
          </a>
        </motion.div>
        <motion.p 
          className="text-xs md:text-sm lg:text-sm mt-[0.6px] md:mt-1"
          variants={itemVariants}
        >
          © Made with 💖 by realarijit
        </motion.p>
      </motion.div> */}

    </>
  )
}

export default page