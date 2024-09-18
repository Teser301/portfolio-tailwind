import React from "react";
import Button from "../../Basic/Button";
interface ProjectStatusProps {
  status: string;
  link: string | null;
}

const ProjectStatus: React.FC<ProjectStatusProps> = ({ status, link }) => {
  const getStatusClass = () => {
    if (status.toLowerCase().includes("online but")) {
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200";
    } else if (status.toLowerCase().includes("online")) {
      return "bg-primary text-white";
    } else {
      return "bg-backgroundSecondary text-text";
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
        {link && (
          <Button
            text="View Project"
            href={link}
            target="_blank"
            className="w-full text-center"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectStatus;
