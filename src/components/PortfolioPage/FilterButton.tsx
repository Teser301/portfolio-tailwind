import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const FilterButton: React.FC = () => {
  const { activeFilter, setActiveFilter } = useContext(FilterContext)!;

  const filters = ["All", "React", "PHP", "Handlebars"];

  // Mapping of filters to their corresponding paragraph text
  const filterDescriptions: Record<string, string> = {
    All: "Showing all projects.",
    React: "Displaying projects built with React.",
    PHP: "Here are the projects developed using PHP.",
    Handlebars: "These projects utilize Handlebars templates.",
  };

  return (
    <div className="mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 rounded mr-2 ${
            activeFilter === filter ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}

      {/* Paragraph that changes based on the active filter */}
      <p className="mt-4">{filterDescriptions[activeFilter]}</p>
    </div>
  );
};

export default FilterButton;
