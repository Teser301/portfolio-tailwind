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
    description:
      "Here are the projects developed using PHP, mainly with Wordpress",
  },
  {
    name: "Handlebars",
    icon: Handlebars,
    description:
      "These projects utilize Handlebars templates, mainly for BigCommerce",
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
            className={`flex flex-col items-center justify-center px-6 py-3 rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              activeFilter === filter.name
                ? "bg-blue-600 text-text scale-105 dark:bg-blue-500"
                : "bg-gray-200 dark:bg-gray-700  text-text  "
            }`}
            onClick={() => setActiveFilter(filter.name)}
          >
            {filter.icon && (
              <img
                src={filter.icon}
                alt={filter.name}
                className="w-5 h-5 mb-1"
              />
            )}
            <span className="font-semibold">{filter.name}</span>
          </button>
        ))}
      </div>
      <p className="mt-4 text-center text-gray-700 dark: text-text">
        {filters.find((filter) => filter.name === activeFilter)?.description}
      </p>
    </>
  );
};

export default FilterButton;
