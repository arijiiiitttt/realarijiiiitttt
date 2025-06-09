import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    headerVideo: "https://example.com/ecommerce-header.mp4", // Replace with your video URL
    avatarImage: "https://via.placeholder.com/64/FF5733/FFFFFF?text=EC", // Placeholder avatar for consistency
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
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"> {/* Reduced gap for tighter layout */}
          {projectsToShow.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg w-full overflow-hidden transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl" // Reduced scale for hover
            >
              {/* Header Video/Image Section */}
              <div className="relative aspect-[5/4]">
                {project.headerVideo ? (
                  <video
                    src={project.headerVideo}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover rounded-t-2xl"
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
              <div className="relative px-4 pb-4">
                {/* Project Avatar - subtle hover effect */}
                <img
                  src={project.avatarImage}
                  alt={project.title}
                  className="w-16 h-16 absolute -top-8 left-4 rounded-full border-4 border-white shadow-lg object-cover transform transition-transform duration-200 hover:scale-105"
                />

                {/* Text content (Title, Dot, GitHub, Description) */}
                <div className="pt-10">
                  <div className="flex items-center mb-1">
                    {/* Title with sticky Live Status Dot */}
                    <h2 className="text-lg font-bold text-gray-900 flex-grow">
                      {project.title}
                      <span
                        className={`inline-block w-3 h-3 rounded-full ml-2 ${
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
                      className="p-1 text-gray-700 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-110 hover:shadow-md"
                      title="View Code on GitHub"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.112.793-.26.793-.577V19.5c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.806 1.304 3.49.998.107-.775.418-1.305.762-1.604-2.666-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.22-.124-.303-.535-1.525.117-3.177 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.002-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.117 3.177.77.839 1.236 1.91 1.236 3.22 0 4.609-2.807 5.625-5.479 5.922.43.372.824 1.102.824 2.222v3.293c0 .319.193.694.801.576C20.565 21.798 24 17.302 24 12c0-6.628-5.372-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Icons - Moved here, below description. Added a subtle shadow and scale on hover. */}
                  <div className="flex items-center -ml-2 mt-3"> {/* Removed border-b */}
                    {project.techStack.slice(0, 5).map((tech, i) => (
                      <div
                        key={i}
                        className={`relative z-[${10 - i}] -ml-2 first:ml-0 group`}
                      >
                        <img
                          src={`/items/${tech}.png`} // Make sure this path is correct
                          alt={tech}
                          className="w-9 h-9 rounded-full object-contain border-2 border-white shadow-sm hover:scale-105 transition-transform bg-white p-0.5 hover:shadow-md" // Added hover:shadow-md
                          title={tech}
                        />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-[0.6rem] bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {tech}
                        </span>
                      </div>
                    ))}
                    {project.techStack.length > 5 && (
                      <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-[0.6rem] font-semibold -ml-2 z-0">
                        +{project.techStack.length - 5}
                      </div>
                    )}
                  </div>

                  {/* "View the website" button - Improved hover and focus effects */}
                  {project.live && project.liveLink && (
                    <div className="mt-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center py-2 px-4 bg-gray-800 text-white rounded-full shadow-md hover:bg-white hover:text-black hover:border-1 border-black transition-all duration-200 transform hover:scale-[0.933]" // Added hover:scale-[1.02] and hover:shadow-xl
                      >
                        View the website
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "See More" Button - Improved hover effect */}
        {hasMoreProjects && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="bg-white text-gray-700 font-semibold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 transform hover:-translate-y-1" // Added hover:-translate-y-1 and hover:shadow-xl
              disabled={loading}
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
