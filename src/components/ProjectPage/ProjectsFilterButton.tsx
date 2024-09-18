import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { filters } from "../../data/filterData";

const FilterButton: React.FC = () => {
  const { activeFilter, setActiveFilter } = useContext(FilterContext)!;

  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap gap-4 my-4 justify-center md:justify-start">
        {filters.map((filter) => (
          <button
            key={filter.name}
            className={`h-12 flex gap-2 items-center px-4 py-2 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-md ${
              activeFilter === filter.name
                ? "bg-primary scale-105"
                : "bg-backgroundSecondary"
            }`}
            onClick={() => setActiveFilter(filter.name)}
          >
            {filter.icon && (
              <img
                src={filter.icon}
                alt={filter.name}
                className={`w-6 h-6 mb-1 rounded-lg ${
                  filter.name === "Handlebars" && "bg-background"
                }`}
              />
            )}
            <span className="font-semibold text-sm md:text-base">
              {filter.name}
            </span>
          </button>
        ))}
      </div>
      <p className="mt-4 text-center md:text-left">
        {filters.find((filter) => filter.name === activeFilter)?.description}
      </p>
    </>
  );
};

export default FilterButton;
