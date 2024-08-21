import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

import ReactLogo from "../../assets/icons/react.svg";
import Wordpress from "../../assets/icons/wordpress.svg";
import Handlebars from "../../assets/icons/handlebars.svg";

const filters = [
  {
    name: "All",
    icon: null,
    description: "Showing all projects.",
  },
  {
    name: "React",
    icon: ReactLogo,
    description: "Displaying projects built with React.",
  },
  {
    name: "PHP",
    icon: Wordpress,
    description: "Here are the projects developed using PHP.",
  },
  {
    name: "Handlebars",
    icon: Handlebars,
    description: "These projects utilize Handlebars templates.",
  },
];

const FilterButton: React.FC = () => {
  const { activeFilter, setActiveFilter } = useContext(FilterContext)!;
  return (
    <>
      <div className="flex gap-4 my-4 justify-center">
        {filters.map((filter) => (
          <button
            key={filter.name}
            className={`flex flex-col items-center justify-center min-w-20 px-4 py-2 rounded ${
              activeFilter === filter.name
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveFilter(filter.name)}
          >
            {/* Render icon if available */}
            {filter.icon && (
              <img
                src={filter.icon}
                alt={filter.name}
                className="w-16 h-16 mb-2"
              />
            )}
            {filter.name}
          </button>
        ))}
      </div>
      <p className="mt-4 text-center">
        {filters.find((filter) => filter.name === activeFilter)?.description}
      </p>
    </>
  );
};

export default FilterButton;
