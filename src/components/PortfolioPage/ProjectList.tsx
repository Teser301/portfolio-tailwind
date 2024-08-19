import React from "react";

interface ProjectListProps {
  groupedProjects: { group: string; projects: Project[] }[];
  expandedGroups: string[];
  toggleGroup: (group: string) => void;
  handleProjectClick: (link: string) => void;
  setSelectedProject: (project: Project | null) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ groupedProjects, expandedGroups, toggleGroup, handleProjectClick, setSelectedProject }) => {
  return (
    <ul className="w-full md:w-1/3 space-y-6 overflow-auto">
      {groupedProjects.map((group, groupIndex) => (
        <li key={groupIndex}>
          <h3 onClick={() => toggleGroup(group.group)} className="text-2xl font-bold text-gray-700 mb-4 cursor-pointer hover:text-blue-600 transition">
            {group.group}
          </h3>
          {expandedGroups.includes(group.group) && (
            <ul className="space-y-4">
              {group.projects.map((project, projectIndex) => (
                <li
                  key={projectIndex}
                  onMouseEnter={() => setSelectedProject(project)}
                  onMouseLeave={() => setSelectedProject(null)}
                  onClick={() => handleProjectClick(project.link)}
                  className="relative p-4 bg-white shadow-md rounded-lg cursor-pointer hover:bg-blue-100 transition"
                >
                  <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
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
