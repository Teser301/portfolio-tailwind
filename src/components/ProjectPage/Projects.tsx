import React from "react";
import { ProjectType } from "../../types/project";
import Project from "./Project/Project";
import { MdClose } from "react-icons/md";
interface ProjectDetailProps {
  selectedProject: ProjectType | null;
  onClose: () => void; // Callback to close the modal
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  selectedProject,
  onClose,
}) => {
  return (
    <>
      {selectedProject ? (
        <>
          {/*Desktop Format */}
          <div className="hidden md:flex flex-1 flex-col justify-start sticky max-h-[800px] p-6 top-24 bg-backgroundPrimary shadow-md rounded-lg overflow-x-hidden  overflow-y-scroll custom-scrollbar-container">
            <Project project={selectedProject} />
          </div>
          {/*Mobile Format */}
          <div
            className="flex fixed inset-0 bg-black bg-opacity-50  items-center justify-center z-50 md:hidden"
            onClick={onClose}
          >
            <button
              onClick={onClose}
              className="absolute top-20 right-2 p-3 bg-primary rounded-full z-50"
            >
              <MdClose className="w-5 h-5" />
            </button>
            <div
              className="bg-backgroundPrimary p-6 m-6 rounded-lg shadow-md  w-full relative h-4/5 overflow-y-scroll custom-scrollbar-container"
              onClick={(e) => e.stopPropagation()}
            >
              <Project project={selectedProject} />
            </div>
          </div>
        </>
      ) : (
        <div className="hidden md:flex flex-1 flex-col justify-center items-center sticky  max-h-[800px] p-6 top-24 bg-backgroundPrimary shadow-md rounded-lg">
          <h3 className="text-2xl font-bold  text-center">
            Select a project to view it
          </h3>
          <p className="text-lg mt-2">
            Click on a project from the list to see its details!
          </p>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
