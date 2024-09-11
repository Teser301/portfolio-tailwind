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
      {groupedProjects.map((group, groupIndex) => {
        const isExpanded = expandedGroups.includes(group.group);

        return (
          <li key={groupIndex}>
            <h3
              onClick={() => toggleGroup(group.group)}
              className="flex justify-between items-center mb-4 text-2xl font-bold cursor-pointer hover:text-primary"
            >
              {group.group}
              <span className="ml-2">{isExpanded ? "−" : "+"}</span>
            </h3>
            {isExpanded && (
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
                    className={`flex justify-between items-center relative p-4 my-5 bg-backgroundPrimary shadow-md rounded-lg transition hover:bg-primary
                    ${
                      project.status.toLowerCase().includes("online")
                        ? "cursor-pointer "
                        : "cursor-default"
                    }`}
                  >
                    <h4 className="text-xl font-semibold ">{project.title}</h4>
                    {project.status.toLowerCase().includes("online") && (
                      <MdOpenInNew className="text-dark dark:text-light" />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
