import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    headerVideo: "./video/gg.mp4", // Replace with your video URL
    avatarImage: "./logos/a.png", // Placeholder avatar for consistency
    description:
      "A comprehensive online store built with React for the frontend and Node.js for the backend. Features include user authentication, product listings, shopping cart, and secure payment processing.",
    live: true,
    liveLink: "https://example.com/ecommerce",
    githubLink: "https://github.com/user/ecommerce",
    techStack: ["html", "css", "javascript", "react", "nodejs", "mongodb"],
  },
  {
    id: 2,
    title: "Task Manager App",
    headerVideo: null, // No video for this project
    avatarImage: "https://via.placeholder.com/64/0000FF/FFFFFF?text=TM", // Placeholder avatar
    image: "https://via.placeholder.com/300x180/7B68EE/FFFFFF?text=TaskApp", // Placeholder image
    description:
      "A real-time productivity application enabling users to manage tasks, set deadlines, and collaborate with team members. Built with React and Firebase.",
    live: false,
    liveLink: "#",
    githubLink: "https://github.com/user/task-manager",
    techStack: ["react", "firebase", "redux", "tailwind", "vscode"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    headerVideo: null, // No video for this project
    avatarImage: "https://via.placeholder.com/64/008000/FFFFFF?text=PW", // Placeholder avatar
    image: "https://via.placeholder.com/300x180/ADD8E6/000000?text=Portfolio",
    description:
      "My personal portfolio website showcasing various projects, skills and contact information. Developed using modern web technologies.",
    live: true,
    liveLink: "https://example.com/portfolio",
    githubLink: "https://github.com/user/portfolio",
    techStack: ["html", "css", "javascript", "react", "vite", "git", "github"],
  },
  {
    id: 4,
    title: "Weather Dashboard",
    headerVideo: null, // No video for this project
    avatarImage: "https://via.placeholder.com/64/FFFF00/000000?text=WD", // Placeholder avatar
    image: "https://via.placeholder.com/300x180/FFD700/000000?text=Weather",
    description:
      "An interactive weather dashboard that provides real-time weather updates based on user location or city search. Integrates with a third-party weather API.",
    live: true,
    liveLink: "https://example.com/weather",
    githubLink: "https://github.com/user/weather-app",
    techStack: ["html", "css", "javascript", "api"],
  },
  {
    id: 5,
    title: "Recipe Finder",
    headerVideo: null, // No video for this project
    avatarImage: "https://via.placeholder.com/64/00FF00/000000?text=RF", // Placeholder avatar
    image: "https://via.placeholder.com/300x180/90EE90/000000?text=Recipes",
    description:
      "A web application to search for recipes based on ingredients or cuisine type. Utilizes a recipe API to fetch and display detailed cooking instructions.",
    live: true,
    liveLink: "https://example.com/recipes",
    githubLink: "https://github.com/user/recipe-finder",
    techStack: ["react", "api", "css-modules"],
  },
  {
    id: 6,
    title: "Simple Blog",
    headerVideo: null, // No video for this project
    avatarImage: "https://via.placeholder.com/64/FF0000/FFFFFF?text=SB", // Placeholder avatar
    image: "https://via.placeholder.com/300x180/F08080/FFFFFF?text=Blog",
    description:
      "A lightweight blog platform allowing users to create, publish, and manage posts. Features a clean interface and Markdown support.",
    live: false,
    liveLink: "#",
    githubLink: "https://github.com/user/simple-blog",
    techStack: ["nodejs", "express", "ejs", "mongodb"],
  },
  {
    id: 7,
    title: "Online Quiz System",
    headerVideo: null, // No video for this project
    avatarImage: "https://via.placeholder.com/64/00FFFF/000000?text=OQ", // Placeholder avatar
    image: "https://via.placeholder.com/300x180/87CEEB/000000?text=Quiz",
    description:
      "An interactive online quiz system with multiple categories and difficulty levels. Tracks user scores and provides instant feedback.",
    live: true,
    liveLink: "https://example.com/quiz",
    githubLink: "https://github.com/user/quiz-system",
    techStack: ["javascript", "html", "css"],
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
      setLoading(false);
    }, 500);
  };

  const projectsToShow = projectsData.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < projectsData.length;

  return (
    <div className="min-h-screen py-8 px-2"> {/* Reduced padding for overall smaller section */}
      <div className="max-w-5xl mx-auto"> {/* Decreased max-width to make cards seem smaller */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Reduced gap for tighter layout */}
          {projectsToShow.map((project) => (
            <div
              key={project.id}
              className="bg-white p-3 rounded-2xl shadow-lg w-full overflow-hidden transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl" // Reduced scale for hover
            >
              {/* Header Video/Image Section */}
              <div className="relative aspect-[5/4]">
                {project.headerVideo ? (
                  <video
                    src={project.headerVideo}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                )}
              </div>

              {/* Main Content Area - contains avatar, text content, tech stack, and button */}
              <div className="relative px-3 pb-3"> {/* Reduced padding */}
                {/* Project Avatar - subtle hover effect */}
                <img
                  src={project.avatarImage}
                  alt={project.title}
                  className="w-14 h-14 absolute -top-7 left-3 rounded-full border-3 border-white shadow-lg object-cover transform transition-transform duration-200 hover:scale-105" // Reduced size and border
                />

                {/* Text content (Title, Dot, GitHub, Description) */}
                <div className="pt-8"> {/* Reduced padding-top */}
                  <div className="flex items-center mb-1">
                    {/* Title with sticky Live Status Dot */}
                    <h2 className="text-base font-bold text-gray-900 flex-grow"> {/* Reduced font size */}
                      {project.title}
                      <span
                        className={`inline-block w-2.5 h-2.5 rounded-full ml-1.5 ${ // Slightly reduced size and margin
                          project.live ? "bg-green-500 animate-pulse-slow" : "bg-red-500"
                        }`}
                        title={project.live ? "Live Project" : "Offline Demo"}
                      ></span>
                    </h2>
                    {/* GitHub Icon at the end of the title line - Improved hover effect */}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-0.5 text-gray-700 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-110 hover:shadow-md" // Slightly reduced padding
                      title="View Code on GitHub"
                    >
                      <svg
                        className="w-4 h-4" // Reduced icon size
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.112.793-.26.793-.577V19.5c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.806 1.304 3.49.998.107-.775.418-1.305.762-1.604-2.666-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.22-.124-.303-.535-1.525.117-3.177 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.002-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.117 3.177.77.839 1.236 1.91 1.236 3.22 0 4.609-2.807 5.625-5.479 5.922.43.372.824 1.102.824 2.222v3.293c0 .319.193.694.801.576C20.565 21.798 24 17.302 24 12c0-6.628-5.372-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 text-xs line-clamp-2"> {/* Reduced font size */}
                    {project.description}
                  </p>

                  {/* Tech Stack Icons - Moved here, below description. Added a subtle shadow and scale on hover. */}
                  <div className="flex items-center -ml-1 mt-2"> {/* Reduced negative margin and top margin */}
                    {project.techStack.slice(0, 5).map((tech, i) => (
                      <div
                        key={i}
                        className={`relative z-[${10 - i}] -ml-1.5 first:ml-0 group`} // Further reduced negative margin
                      >
                        <img
                          src={`/items/${tech}.png`} // Make sure this path is correct
                          alt={tech}
                          className="w-7 h-7 rounded-full object-contain border-1.5 border-white shadow-sm hover:scale-105 transition-transform bg-white p-0.5 hover:shadow-md" // Reduced size and border
                          title={tech}
                        />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-1.5 py-0.5 text-[0.55rem] bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"> {/* Adjusted tooltip size */}
                          {tech}
                        </span>
                      </div>
                    ))}
                    {project.techStack.length > 5 && (
                      <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-[0.55rem] font-semibold -ml-1.5 z-0"> {/* Adjusted size and margin */}
                        +{project.techStack.length - 5}
                      </div>
                    )}
                  </div>

                  {/* "View the website" button - Improved hover and focus effects */}
                  <div className="mt-3"> {/* Reduced top margin */}
                    {project.live ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center py-2.5 px-1 bg-gray-800 text-white text-sm rounded-full shadow-md transition-all duration-200 transform hover:scale-[0.96]" // Adjusted padding and text size
                      >
                        View the website
                      </a>
                    ) : (
                      <button
                        disabled
                        className="w-full flex items-center justify-center py-2.5 px-1 bg-gray-300 text-gray-500 text-sm rounded-full cursor-not-allowed" // Adjusted padding and text size
                      >
                        Website Unavailable
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "See More" Button - Improved hover effect */}
        {hasMoreProjects && (
          <div className="flex justify-center mt-5"> {/* Reduced top margin */}
            <button
              onClick={handleLoadMore}
              className="bg-white text-black font-semibold p-3  border-1 border-gray-400 text-md rounded-xl shadow-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 transform hover:-translate-y-0.5 text-sm" 
            >
              {loading ? "Loading..." : "See More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;