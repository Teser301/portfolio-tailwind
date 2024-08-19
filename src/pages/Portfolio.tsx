import React, { useState, useEffect } from "react";
import FilterButton from "../components/PortfolioPage/FilterButton";
import OptionButton from "../components/PortfolioPage/OptionButton";
import ProjectList from "../components/PortfolioPage/ProjectList";

const projects: Project[] = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    link: "https://example.com/project-one",
    image: "https://via.placeholder.com/300",
    type: "Web Development",
    chapter: "Company A",
    yearDate: "2021",
  },
  {
    title: "Project One 2",
    description: "A brief description of Project One.",
    link: "https://example.com/project-one",
    image: "https://via.placeholder.com/300",
    type: "Web Development",
    chapter: "Company B",
    yearDate: "2021",
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    link: "https://example.com/project-two",
    image: "https://via.placeholder.com/300",
    type: "Design",
    chapter: "Company B",
    yearDate: "2022",
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    link: "https://example.com/project-three",
    image: "https://via.placeholder.com/300",
    type: "Web Development",
    chapter: "Company C",
    yearDate: "2023",
  },
];

const filters = ["All", "Web Development", "Design"];
const viewOptions = ["Year", "Company"];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [viewOption, setViewOption] = useState<string>("Year");
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  // Filter projects based on activeFilter
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((project) => project.type === activeFilter);

  // Group projects by either Year or Company
  const groupProjects = (viewOption: string) => {
    if (viewOption === "Year") {
      const groups = Array.from(new Set(filteredProjects.map((project) => project.yearDate)));
      return groups.map((group) => ({
        group,
        projects: filteredProjects.filter((project) => project.yearDate === group),
      }));
    } else if (viewOption === "Company") {
      const groups = Array.from(new Set(filteredProjects.map((project) => project.chapter)));
      return groups.map((group) => ({
        group,
        projects: filteredProjects.filter((project) => project.chapter === group),
      }));
    }
    return []; // In case of an invalid viewOption
  };

  // Update groupedProjects based on the current viewOption
  const groupedProjects = groupProjects(viewOption);

  // Handle view option button click
  const handleViewOptionClick = (option: string) => {
    setViewOption(option);
    // Populate expandedGroups with all group names based on the selected viewOption
    const groups = groupProjects(option).map((group) => group.group);
    setExpandedGroups(groups);
  };

  // Initialize expandedGroups with all group names based on the current viewOption on component mount
  useEffect(() => {
    const groups = groupProjects(viewOption).map((group) => group.group);
    setExpandedGroups(groups);
  }, []); // Empty dependency array means this runs only once, on component mount

  const toggleGroup = (group: string) => {
    setExpandedGroups((prev) => (prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]));
  };

  const handleProjectClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col">
      {/* Filter buttons */}
      <FilterButton filters={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* View Option Buttons */}
      <OptionButton viewOptions={viewOptions} viewOption={viewOption} handleViewOptionClick={handleViewOptionClick} />

      <div className="flex-1 flex flex-col md:flex-row">
        {/* Project list with groups */}
        <ProjectList groupedProjects={groupedProjects} expandedGroups={expandedGroups} toggleGroup={toggleGroup} handleProjectClick={handleProjectClick} setSelectedProject={setSelectedProject} />

        {/* Project details - full height */}
        <div className="flex-1 bg-white p-6 shadow-md rounded-lg flex flex-col justify-center h-full">
          {selectedProject ? (
            <>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-md" />
              <h2 className="text-2xl font-bold mt-4">{selectedProject.title}</h2>
              <p className="mt-2 text-gray-600">{selectedProject.description}</p>
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-600 hover:underline">
                View Project
              </a>
            </>
          ) : (
            <p className="text-gray-500 text-center">Hover over a project to see its details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
