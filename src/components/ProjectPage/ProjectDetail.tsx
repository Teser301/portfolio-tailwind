import React from "react";
import { Project } from "../../types/project";
import ProjectContent from "./ProjectDetail/ProjectContent";
import { MdClose } from "react-icons/md";
interface ProjectDetailProps {
  selectedProject: Project | null;
  onClose: () => void; // Callback to close the modal
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  selectedProject,
  onClose,
}) => {
  return (
    <>
      {selectedProject && (
        <>
          {/*Desktop Format */}
          <div className="hidden md:flex flex-1 flex-col justify-start sticky h-[800px] p-6 top-20 bg-backgroundPrimary shadow-md rounded-lg overflow-x-hidden  overflow-y-scroll custom-scrollbar-container">
            <ProjectContent project={selectedProject} />
          </div>
          {/*Mobile Format */}
          <div className="flex fixed inset-0 bg-black bg-opacity-50  items-center justify-center z-50 md:hidden">
            <div className="bg-backgroundPrimary p-6 m-6 rounded-lg shadow-md  w-full relative h-4/5 overflow-y-scroll custom-scrollbar-container">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 p-3 bg-primary rounded-full"
              >
                <MdClose className="w-5 h-5" />
              </button>
              <ProjectContent project={selectedProject} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectDetail;
