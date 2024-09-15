import { useState, useEffect } from "react";
import { ProjectType } from "../types/project";

type GroupedProject = {
  group: string;
  projects: ProjectType[];
};

const useGroupedProjects = (
  projects: ProjectType[],
  activeFilter: string,
  viewOption: string
): GroupedProject[] => {
  // Function to filter projects based on the active filter
  const filterProjects = (
    projects: ProjectType[],
    filter: string
  ): ProjectType[] => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.type.includes(filter));
  };

  // Function to group filtered projects based on the view option
  const groupProjects = (
    projects: ProjectType[],
    viewOption: string
  ): GroupedProject[] => {
    const groupBy = viewOption === "Year" ? "yearDate" : "company";

    // Create a unique set of groups
    const groups = Array.from(
      new Set(
        projects.map(
          (project) => project[groupBy as keyof ProjectType] as string
        )
      )
    );

    // Group projects by the selected criteria
    return groups.map((group) => ({
      group,
      projects: projects.filter(
        (project) => project[groupBy as keyof ProjectType] === group
      ),
    }));
  };

  // State to hold the grouped projects
  const [groupedProjects, setGroupedProjects] = useState<GroupedProject[]>(
    groupProjects(filterProjects(projects, activeFilter), viewOption)
  );

  // Effect to update the grouped projects when the filter or view option changes
  useEffect(() => {
    const filtered = filterProjects(projects, activeFilter);
    setGroupedProjects(groupProjects(filtered, viewOption));
  }, [activeFilter, viewOption, projects]);

  return groupedProjects;
};

export default useGroupedProjects;
