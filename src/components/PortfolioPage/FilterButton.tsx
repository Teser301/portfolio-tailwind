import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

import ReactLogo from "../../assets/icons/react.svg";
import Wordpress from "../../assets/icons/wordpress.svg";
import Handlebars from "../../assets/icons/handlebars.svg";

const FilterButton: React.FC = () => {
  const { activeFilter, setActiveFilter } = useContext(FilterContext)!;

  const filters = ["All", "React", "PHP", "Handlebars"];

  const filterDescriptions: Record<string, string> = {
    All: "Showing all projects.",
    React: "Displaying projects built with React.",
    PHP: "Here are the projects developed using PHP.",
    Handlebars: "These projects utilize Handlebars templates.",
  };

  return (
    <>
      <div className="flex my-4 justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded mr-2 transition-colors ${
              activeFilter === filter
                ? "bg-blue-500 text-white dark:bg-blue-400"
                : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter === "React" && (
              <img src={ReactLogo} alt="React" className="w-16 h-16 mb-2" />
            )}
            {filter === "PHP" && (
              <img src={Wordpress} alt="Wordpress" className="w-16 h-16 mb-2" />
            )}
            {filter === "Handlebars" && (
              <img
                src={Handlebars}
                alt="Handlebars"
                className="w-16 h-16 mb-2"
              />
            )}
            {filter}
          </button>
        ))}
      </div>
      <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
        {filterDescriptions[activeFilter]}
      </p>
    </>
  );
};

export default FilterButton;
