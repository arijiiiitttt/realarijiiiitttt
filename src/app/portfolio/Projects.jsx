import React from "react";

const projects = [
  {
    id: 1,
    title: "Project One",
    image: "https://via.placeholder.com/300", // Replace with your project image link
    liveLink: "https://live-project-one.com", // Replace with your live project link
    githubLink: "https://github.com/username/project-one", // Replace with your GitHub project link
  },
  {
    id: 2,
    title: "Project Two",
    image: "https://via.placeholder.com/300", // Replace with your project image link
    liveLink: "https://live-project-two.com",
    githubLink: "https://github.com/username/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    image: "https://via.placeholder.com/300", // Replace with your project image link
    liveLink: "https://live-project-three.com",
    githubLink: "https://github.com/username/project-three",
  },
];

const Projects = () => {
  return (
    <div className=" min-h-screen p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className=" rounded shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <div className="flex justify-between mt-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    GitHub
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
