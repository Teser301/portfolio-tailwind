import React from "react";
import { Project } from "../../types/project";

interface ProjectDetailProps {
  selectedProject: Project | null;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ selectedProject }) => {
  return (
    <div
      className={`hidden md:flex flex-1 bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg flex-col justify-center h-full transition-opacity duration-500`}
    >
      {selectedProject ? (
        <>
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-64 object-cover rounded-md"
          />
          <h2 className="text-2xl font-bold mt-4 text-gray-800 dark:text-gray-200">
            {selectedProject.title}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {selectedProject.description}
          </p>
          <a
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Project
          </a>
        </>
      ) : (
        <p className="text-gray-500 dark:text-gray-300 text-center">
          Hover over a project to see its details.
        </p>
      )}
    </div>
  );
};

export default ProjectDetail;
