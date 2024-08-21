import React, { useEffect, useState } from "react";
// Hooks/Data/Context
import { useFilter } from "../context/FilterContext";
import { Project } from "../types/project";
import { projects } from "../data/projectsData";
import useGroupedProjects from "../hooks/useGroupedProjects";

// Components
import PortfolioIntroduction from "../components/PortfolioPage/PortfolioIntro";
import FilterButton from "../components/PortfolioPage/FilterButton";
import OptionButton from "../components/PortfolioPage/OptionButton";
import ProjectList from "../components/PortfolioPage/ProjectList";
import ProjectDetail from "../components/PortfolioPage/ProjectDetail";

const Portfolio: React.FC = () => {
  const { activeFilter, viewOption } = useFilter();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  const groupedProjects = useGroupedProjects(
    projects,
    activeFilter,
    viewOption
  );

  // Update expandedGroups when viewOption changes or on mount
  useEffect(() => {
    const groups = groupedProjects.map((group) => group.group);
    setExpandedGroups(groups);
  }, [groupedProjects]);

  const toggleGroup = (group: string) => {
    setExpandedGroups((prev) =>
      prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
    );
  };

  const handleProjectClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white p-6 flex flex-col">
      <PortfolioIntroduction />
      <FilterButton />
      <OptionButton />
      <div className="flex-1 gap-10 flex flex-col md:flex-row">
        <ProjectList
          groupedProjects={groupedProjects}
          expandedGroups={expandedGroups}
          toggleGroup={toggleGroup}
          handleProjectClick={handleProjectClick}
          setSelectedProject={setSelectedProject}
        />
        <ProjectDetail selectedProject={selectedProject} />
      </div>
    </div>
  );
};

export default Portfolio;
