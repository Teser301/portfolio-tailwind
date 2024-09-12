import React from "react";
import { MdOpenInNew } from "react-icons/md";
import { ProjectType } from "../../types/project";

interface ProjectListProps {
  groupedProjects: { group: string; projects: ProjectType[] }[];
  expandedGroups: string[];
  toggleGroup: (group: string) => void;
  handleProjectClick: (link: string) => void;
  setSelectedProject: (project: ProjectType | null) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({
  groupedProjects,
  expandedGroups,
  toggleGroup,
  handleProjectClick,
  setSelectedProject,
}) => {
  const handleProjectItemClick = (
    project: ProjectType,
    event: React.MouseEvent
  ) => {
    // Prevent icon click event from bubbling up to project item
    event.stopPropagation();
    // Set the selected project
    setSelectedProject(project);
  };

  const handleIconClick = (link: string, event: React.MouseEvent) => {
    // Prevent the icon click event from bubbling up to project item
    event.stopPropagation();
    // Redirect to the project link
    handleProjectClick(link);
  };

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
                    onClick={(e) => handleProjectItemClick(project, e)}
                    className={`flex justify-between  relative my-5 bg-backgroundPrimary  group hover:bg-primary shadow-md rounded-lg transition
                    ${
                      project.status.toLowerCase().includes("online")
                        ? "cursor-pointer"
                        : "cursor-default"
                    }
                   `}
                  >
                    <h4 className="text-xl font-semibold p-4">
                      {project.title}
                    </h4>
                    {project.status.toLowerCase().includes("online") && (
                      <div
                        onClick={(e) => handleIconClick(project.link, e)}
                        className="text-xl ml-4 p-4 cursor-pointer flex group-hover:bg-secondary items-center justify-center rounded-r-lg transition
                        hover:bg-secondary"
                      >
                        <MdOpenInNew className="text-dark dark:text-light" />
                      </div>
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
