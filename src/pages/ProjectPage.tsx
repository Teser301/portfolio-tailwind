import React, { useEffect, useState } from "react";
// Hooks/Data/Context
import { useFilter } from "../context/FilterContext";
import { Project } from "../types/project";
import { projects } from "../data/projectsData";
import useGroupedProjects from "../hooks/useGroupedProjects";

// Components
import ProjectIntro from "../components/ProjectPage/ProjectIntro";
import FilterButton from "../components/ProjectPage/FilterButton";
import OptionButton from "../components/ProjectPage/OptionButton";
import ProjectList from "../components/ProjectPage/ProjectList";
import ProjectDetail from "../components/ProjectPage/ProjectDetail";

const Portfolio: React.FC = () => {
  const { activeFilter, activeViewOption } = useFilter();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  const groupedProjects = useGroupedProjects(
    projects,
    activeFilter,
    activeViewOption
  );

  // Update expanded groups. Making the dropdown visible on page visit
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
    <div className="max-w-[1440px] mx-auto min-h-screen px-6 py-5 flex flex-col">
      <ProjectIntro />
      <div className="bg-backgroundPrimary  my-5 p-8">
        <FilterButton />
        <OptionButton />
      </div>
      <div className="relative flex-1 gap-10 flex flex-col md:flex-row min-h-[400px] md:min-h-[600px]">
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
