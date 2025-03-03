"use client";
import React, { useEffect, useState } from 'react';
import Website from '@/components/Website';
import MobileVew from '@/components/otherElements/MobileVew';

const page = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768);  // Checking for mobile devices
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileVew /> // Mobile view for devices with width <= 768px
      ) : (
        <Website /> // Website view for tablets and PCs
      )}
    </>
  );
};

export default page;
