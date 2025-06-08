import React from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "./logos/ecommerce.png",
    description: "React & Node.js online store",
    live: true,
    liveLink: "https://example.com/ecommerce",
    githubLink: "https://github.com/user/ecommerce",
    techStack: ["html", "nodejs"],
  },
  {
    id: 2,
    title: "Task Manager",
    image: "https://via.placeholder.com/300x180",
    description: "Real-time productivity app",
    live: false,
    liveLink: "#",
    githubLink: "https://github.com/user/task-manager",
    techStack: ["react", "firebase"],
  },{
    id: 3,
    title: "E-Commerce Platform",
    image: "./logos/ecommerce.png",
    description: "React & Node.js online store",
    live: true,
    liveLink: "https://example.com/ecommerce",
    githubLink: "https://github.com/user/ecommerce",
    techStack: ["html", "nodejs"],
  },
  {
    id: 4,
    title: "Task Manager",
    image: "https://via.placeholder.com/300x180",
    description: "Real-time productivity app",
    live: false,
    liveLink: "#",
    githubLink: "https://github.com/user/task-manager",
    techStack: ["react", "firebase"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Project Image */}
              <div className="h-44 overflow-hidden relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Live Status Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`relative flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full shadow-sm ${
                      project.live
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {project.live ? "Live" : "Offline"}
                    <span className="ml-1.5">{project.live ? "🟢" : "🔴"}</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center gap-x-3 px-5 py-3 border-t bg-gray-100">
                {/* Tech Stack Icons */}
                <div className="flex items-center">
                  {project.techStack.slice(0, 5).map((tech, i) => (
                    <div
                      key={i}
                      className={`relative z-[${10 - i}] -ml-2 first:ml-0 group`}
                    >
                      <img
                        src={`/items/${tech}.png`}
                        alt={tech}
                        className="w-8 h-8 rounded-full object-contain border-2 border-white shadow-sm hover:scale-105 transition-transform bg-white p-1"
                        title={tech}
                      />
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {tech}
                      </span>
                    </div>
                  ))}
                  {project.techStack.length > 5 && (
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-semibold -ml-2 z-0">
                      +{project.techStack.length - 5}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 ml-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white text-sm px-3 py-1.5 rounded-md hover:bg-black transition flex items-center gap-1"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.112.793-.26.793-.577V19.5c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.806 1.304 3.49.998.107-.775.418-1.305.762-1.604-2.666-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.22-.124-.303-.535-1.525.117-3.177 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.002-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.117 3.177.77.839 1.236 1.91 1.236 3.22 0 4.609-2.807 5.625-5.479 5.922.43.372.824 1.102.824 2.222v3.293c0 .319.193.694.801.576C20.565 21.798 24 17.302 24 12c0-6.628-5.372-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      project.live
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-gray-300 cursor-not-allowed"
                    } text-white text-sm px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 shadow-sm hover:shadow-md`}
                  >
                    Visit
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

export default Projects;
