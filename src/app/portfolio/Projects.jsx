import React from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "https://via.placeholder.com/300x180", 
    description: "React & Node.js online store",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Task Manager",
    image: "https://via.placeholder.com/300x180",
    description: "Real-time productivity app",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Weather App",
    image: "https://via.placeholder.com/300x180",
    description: "Forecasts with interactive maps",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Social Dashboard",
    image: "https://via.placeholder.com/300x180",
    description: "Analytics visualization",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "Recipe Finder",
    image: "https://via.placeholder.com/300x180",
    description: "Dietary-filtered recipes",
    liveLink: "#",
    githubLink: "#",
  },
];

const Cards = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col h-[180px]">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm no-underline hover:text-white hover:bg-blue-800 px-3 py-1 rounded-md transition-all duration-200 flex items-center gap-1"
                  >
                    Demo
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 3h7m0 0v7m0-7L10 14"
                      />
                    </svg>
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 text-sm no-underline hover:text-white hover:bg-gray-800 px-3 py-1 rounded-md transition-all duration-200 flex items-center gap-1"
                  >
                    Code
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.112.793-.26.793-.577V19.5c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.806 1.304 3.49.998.107-.775.418-1.305.762-1.604-2.666-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.22-.124-.303-.535-1.525.117-3.177 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.002-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.117 3.177.77.839 1.236 1.91 1.236 3.22 0 4.609-2.807 5.625-5.479 5.922.43.372.824 1.102.824 2.222v3.293c0 .319.193.694.801.576C20.565 21.798 24 17.302 24 12c0-6.628-5.372-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
