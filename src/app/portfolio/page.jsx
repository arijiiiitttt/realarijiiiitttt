"use client"
import React, { useState, useEffect } from 'react';
import Main from './Main';
import LoadingPg from './assets/Loading/LoadingPg';


const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPg/>
      ) : (
        <Main />
      )}
    </>
  );
};

export default Page;
