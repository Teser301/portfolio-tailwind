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
      return "bg-secondary";
    } else {
      return "bg-backgroundSecondary ";
    }
  };

  return (
    <div
      className={`mt-4 px-3 flex justify-between items-center ${getStatusClass()}`}
    >
      <p className=" py-1 rounded">{status}</p>
      {status.toLowerCase().includes("online") && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-1 text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectStatus;
