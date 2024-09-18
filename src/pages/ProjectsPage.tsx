import React, { useEffect, useState } from "react";
// Hooks/Data/Context
import { useFilter } from "../hooks/useFilter";
import { ProjectType } from "../types/project";
import { projects } from "../data/projectsData";
import useGroupedProjects from "../hooks/useGroupedProjects";

// Components
import FilterButton from "../components/ProjectPage/ProjectsFilterButton";
import OptionButton from "../components/ProjectPage/ProjectsOptionButton";
import ProjectList from "../components/ProjectPage/ProjectsList";
import ProjectDetail from "../components/ProjectPage/Projects";

import Heading from "../components/Basic/Heading";

const Portfolio: React.FC = () => {
  const { activeFilter, activeViewOption } = useFilter();
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  const groupedProjects = useGroupedProjects(
    projects,
    activeFilter,
    activeViewOption
  );

  // Add all items in group to expanded list
  useEffect(() => {
    const groups = groupedProjects.map((group) => group.group);
    setExpandedGroups(groups);
  }, [groupedProjects]);
  // Functionality Responsible for toggling groups from list
  const toggleGroup = (group: string) => {
    setExpandedGroups((prev) =>
      prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
    );
  };
  // De-select the project when closed
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen px-6 my-5 flex flex-col">
      <Heading
        tag="h3"
        text=" Welcome to my Projects page"
        subheading="Here, you'll find a diverse range of work I've completed for clients,
        companies, and personal curiosity-driven experiments. Each project
        reflects my commitment to delivering high-quality solutions, whether
        it's through building dynamic web applications, crafting engaging user
        experiences, or exploring the latest technologies."
      />
      <div className="bg-backgroundPrimary my-5 p-8 shadow-md rounded-lg">
        <FilterButton />
        <OptionButton />
      </div>
      <div className="relative flex-1 gap-10 flex flex-col md:flex-row min-h-[400px] md:min-h-[600px]">
        <ProjectList
          groupedProjects={groupedProjects}
          expandedGroups={expandedGroups}
          toggleGroup={toggleGroup}
          setSelectedProject={setSelectedProject}
        />
        <ProjectDetail
          onClose={handleCloseModal}
          selectedProject={selectedProject}
        />
      </div>
    </div>
  );
};

export default Portfolio;
