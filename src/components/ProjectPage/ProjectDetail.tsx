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
    <div className="hidden md:flex flex-1 flex-col justify-start sticky h-[800px]  p-6 top-20 bg-backgroundPrimary shadow-md rounded-lg">
      {selectedProject ? (
        <div className="flex flex-col overflow-x-hidden overflow-y-scroll custom-scrollbar-container">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-80 object-cover object-top rounded-md"
          />
          <ProjectStatus
            status={selectedProject.status}
            link={selectedProject.link}
          />
          <h2 className="text-2xl font-bold mt-4">{selectedProject.title}</h2>
          <ProjectTags tags={selectedProject.type} />
          <ProjectFeatures features={selectedProject.features} />
          <div>
            <h3 className="text-lg font-semibold ">Description:</h3>
            <p className="mt-2">{selectedProject.description}</p>
          </div>

          {selectedProject.bigFeatureTitle &&
            selectedProject.bigFeatureDescription && (
              <div className="mt-2">
                <h3 className="text-lg  font-semibold">
                  {selectedProject.bigFeatureTitle}
                </h3>
                <p className="mt-2">{selectedProject.bigFeatureDescription}</p>
              </div>
            )}
        </div>
      ) : (
        <p className="text-center">Hover over a project to see its details.</p>
      )}
    </div>
  );
};

export default ProjectDetail;
