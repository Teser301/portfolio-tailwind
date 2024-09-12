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
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type.includes(activeFilter));
  const groupProjects = (viewOption: string): GroupedProject[] => {
    const groupBy = viewOption === "Year" ? "yearDate" : "company";

    // Ensuring that the group is always a string
    const groups = Array.from(
      new Set(
        filteredProjects.map(
          (project) => project[groupBy as keyof ProjectType] as string
        )
      )
    );

    return groups.map((group) => ({
      group,
      projects: filteredProjects.filter(
        (project) => project[groupBy as keyof ProjectType] === group
      ),
    }));
  };

  const [groupedProjects, setGroupedProjects] = useState<GroupedProject[]>(
    groupProjects(viewOption)
  );

  useEffect(() => {
    setGroupedProjects(groupProjects(viewOption));
  }, [activeFilter, viewOption]);

  return groupedProjects;
};

export default useGroupedProjects;
