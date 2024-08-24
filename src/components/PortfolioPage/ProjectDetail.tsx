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
            className="w-full h-96 object-cover object-top rounded-md"
          />
          <h2 className="text-2xl font-bold mt-4 text-gray-800 dark:text-gray-200">
            {selectedProject.title}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {selectedProject.description}
          </p>

          {/* Tags */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Tags:
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedProject.type.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Status:
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {selectedProject.status}
            </p>
          </div>

          {/* Features */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Features:
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2">
              {selectedProject.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Big Feature */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {selectedProject.bigFeatureTitle}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {selectedProject.bigFeatureDescription}
            </p>
          </div>

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
