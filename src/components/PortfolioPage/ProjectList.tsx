import React from "react";
import { ProjectListProps } from "../../types/project";

import { MdOpenInNew } from "react-icons/md";

const ProjectList: React.FC<ProjectListProps> = ({
  groupedProjects,
  expandedGroups,
  toggleGroup,
  handleProjectClick,
  setSelectedProject,
}) => {
  return (
    <ul className="w-full md:w-1/3 space-y-6 overflow-auto">
      {groupedProjects.map((group, groupIndex) => (
        <li key={groupIndex}>
          <h3
            onClick={() => toggleGroup(group.group)}
            className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {group.group}
          </h3>
          {expandedGroups.includes(group.group) && (
            <ul className="space-y-4">
              {group.projects.map((project, projectIndex) => (
                <li
                  key={projectIndex}
                  onMouseEnter={() => setSelectedProject(project)}
                  onClick={
                    project.status.toLowerCase().includes("online")
                      ? () => handleProjectClick(project.link)
                      : undefined
                  }
                  className={`flex justify-between items-center relative p-4 my-5 bg-white dark:bg-gray-800 shadow-md rounded-lg transition hover:bg-blue-100 dark:hover:bg-blue-700
                    ${
                      project.status.toLowerCase().includes("online")
                        ? "cursor-pointer "
                        : "cursor-default"
                    }`}
                >
                  <h4 className="text-xl  font-semibold text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h4>
                  {project.status.toLowerCase().includes("online") && (
                    <MdOpenInNew />
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
