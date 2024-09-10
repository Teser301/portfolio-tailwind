import React from "react";
import { Project } from "../../types/project";
import ProjectFeatures from "./ProjectDetail/ProjectFeatures";
import ProjectStatus from "./ProjectDetail/ProjectStatus";
import ProjectTags from "./ProjectDetail/ProjectTags";

interface ProjectDetailProps {
  selectedProject: Project | null;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ selectedProject }) => {
  return (
    <div
      className={`hidden md:flex flex-1 bg-backgroundPrimary dark:bg-gray-800 p-6 shadow-md rounded-lg flex-col justify-start h-screen transition-opacity duration-500 overflow-y-auto`}
    >
      {selectedProject ? (
        <>
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-96 object-cover object-top rounded-md"
          />
          <ProjectStatus
            status={selectedProject.status}
            link={selectedProject.link}
          />
          <h2 className="text-2xl font-bold mt-4 text-gray-800 dark:text-gray-200">
            {selectedProject.title}
          </h2>
          <ProjectTags tags={selectedProject.type} />
          <ProjectFeatures features={selectedProject.features} />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Description:
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {selectedProject.description}
            </p>
          </div>

          {selectedProject.bigFeatureTitle &&
            selectedProject.bigFeatureDescription && (
              <div className="mt-2">
                <h3 className="text-lg  font-semibold text-gray-800 dark:text-gray-200">
                  {selectedProject.bigFeatureTitle}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {selectedProject.bigFeatureDescription}
                </p>
              </div>
            )}
        </>
      ) : (
        <p className="text-gray-500 dark:text-text text-center">
          Hover over a project to see its details.
        </p>
      )}
    </div>
  );
};

export default ProjectDetail;
