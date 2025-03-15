import React, { useEffect, useRef, useState } from "react";

const Skills = () => {
  const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
  ];

  const [animationRunning, setAnimationRunning] = useState(true);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current || !containerRef.current) return;
    
    let slider = sliderRef.current;
    let container = containerRef.current;
    let clone = slider.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    container.appendChild(clone);

    let offset = 0;
    const speed = 0.8; // Slower speed for better loading
    const totalWidth = slider.offsetWidth;

    let animationFrame;
    const scroll = () => {
      if (animationRunning) {
        offset -= speed;
        slider.style.transform = `translateX(${offset}px)`;
        clone.style.transform = `translateX(${offset}px)`;

        if (Math.abs(offset) >= totalWidth) {
          offset = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    
    setTimeout(scroll, 1000); // Delay to allow images to load
    return () => cancelAnimationFrame(animationFrame);
  }, [animationRunning]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        ref={containerRef}
        className="overflow-hidden relative w-[20rem] h-40 whitespace-nowrap"
        onMouseEnter={() => setAnimationRunning(false)}
        onMouseLeave={() => setAnimationRunning(true)}
      >
        <div ref={sliderRef} className="flex items-center absolute">
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index % images.length + 1}`}
              className="h-full w-40 mx-2 object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
