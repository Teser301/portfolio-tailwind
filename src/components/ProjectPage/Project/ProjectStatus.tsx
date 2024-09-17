import React from "react";

interface ProjectStatusProps {
  status: string;
  link: string;
}

const ProjectStatus: React.FC<ProjectStatusProps> = ({ status, link }) => {
  const getStatusClass = () => {
    if (status.toLowerCase().includes("online but")) {
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200";
    } else if (status.toLowerCase().includes("online")) {
      return "bg-primary text-white";
    } else {
      return "bg-backgroundSecondary text-white";
    }
  };

  return (
    <div>
      <div
        className={`my-4 px-3 flex flex-col justify-between items-center ${getStatusClass()}`}
      >
        <p className="py-1 rounded">{status}</p>
      </div>
      <div className="flex">
        {status.toLowerCase().includes("online") && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-4 text-center rounded-md shadow-md transition-colors duration-300 bg-accent text-white hover:bg-secondary"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectStatus;
