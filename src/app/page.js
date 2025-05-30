"use client";
import React, { useEffect, useState } from 'react';
import Website from '@/components/Website';
import MobileVew from '@/components/otherElements/MobileVew';

const page = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768); 
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileVew /> 
      ) : (
        <Website /> 
      )}
    </>
  );
};

export default page;
