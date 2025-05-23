import React, { useEffect, useRef, useState } from "react";

const items = [
  "js",
  "react",
  "python",
  "html",
  "nodejs",
  "java",
  "mongodb",
  "css",
  "bluej",
];

const Skills = () => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += 1; // Adjust scroll speed here
        container.scrollLeft = scrollPosition;

        // Reset to start when fully scrolled
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div className="skills flex flex-col items-center bg-white py-10 ">
      <h4 className="text-xl font-medium mb-4 anton">Mastered Skills</h4>

      <div
        className="  logo-container w-full max-w-[700px] h-[120px] overflow-hidden relative bg-white rounded-lg"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={containerRef}
      >
        <div className="flex w-max animate-scroll item-center flex whitespace-nowrap">
          {items.concat(items).map((logo, i) => (
            <img
              key={i}
              src={`items/${logo}.png`}
              alt={logo}
              className="h-[100px] w-[100px] md:h-[120px] md:w-[120px] lg:h-[137px] lg:w-[137px] object-contain px-2 sm:px-4 inline-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;