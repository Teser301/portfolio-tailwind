import React from "react";
import { Project } from "../../types/project";

interface ProjectDetailProps {
  selectedProject: Project | null;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ selectedProject }) => {
  return (
    <div
      className={`flex-1 bg-white p-6 shadow-md rounded-lg  flex-col justify-center h-full transition-opacity duration-500
      hidden md:flex`} // Hide on mobile, show on md and larger screens
    >
      {selectedProject ? (
        <>
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-64 object-cover rounded-md"
          />
          <h2 className="text-2xl font-bold mt-4">{selectedProject.title}</h2>
          <p className="mt-2 text-gray-600">{selectedProject.description}</p>
          <a
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            View Project
          </a>
        </>
      ) : (
        <p className="text-gray-500 text-center">
          Hover over a project to see its details.
        </p>
      )}
    </div>
  );
};

export default ProjectDetail;
