import React, { useEffect, useRef, useState } from "react";

const logos = [
  "js",
  "react",
  "vite",
  "python",
  "html",
  "tailwindcss",
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
    <div className="skills flex flex-col items-center bg-white py-10">
      <h4 className="text-2xl font-medium mb-4 anton">Mastered Skills</h4>

      <div
        className="logo-container w-full max-w-[700px] h-[120px] overflow-hidden relative bg-white rounded-lg"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={containerRef}
      >
        <div className="flex w-max animate-scroll whitespace-nowrap">
          {logos.concat(logos).map((logo, i) => (
            <img
              key={i}
              src={`logos/${logo}.png`}
              alt={logo}
              className="h-full px-4 inline-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
