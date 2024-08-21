import React from "react";
import { Project } from "../../types/project";

interface ProjectListProps {
  groupedProjects: { group: string; projects: Project[] }[];
  expandedGroups: string[];
  toggleGroup: (group: string) => void;
  handleProjectClick: (link: string) => void;
  setSelectedProject: (project: Project | null) => void;
}

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
                  onClick={() => handleProjectClick(project.link)}
                  className="relative p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-700 transition"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h4>
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
