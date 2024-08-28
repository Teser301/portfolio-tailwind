import React from "react";

interface ProjectStatusProps {
  status: string;
}

const ProjectStatus: React.FC<ProjectStatusProps> = ({ status }) => {
  const getStatusClass = () => {
    if (status.toLowerCase().includes("online but")) {
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200";
    } else if (status.toLowerCase().includes("online")) {
      return "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200";
    } else {
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <div className="mt-4">
      <p className={`px-3 py-1 rounded ${getStatusClass()}`}>{status}</p>
    </div>
  );
};

export default ProjectStatus;
