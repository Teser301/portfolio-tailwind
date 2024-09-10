import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { filters } from "../../data/filterData";

const FilterButton: React.FC = () => {
  const { activeFilter, setActiveFilter } = useContext(FilterContext)!;
  return (
    <>
      <div className="flex gap-4 my-4">
        {filters.map((filter) => (
          <button
            key={filter.name}
            className={`flex gap-2 items-center  px-6 py-3 rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105 hover:shadow-lg text-text ${
              activeFilter === filter.name
                ? "bg-primary  scale-105 dark:bg-secondary"
                : "bg-gray-200 dark:bg-gray-700 text-text"
            }`}
            onClick={() => setActiveFilter(filter.name)}
          >
            {filter.icon && (
              <img
                src={filter.icon}
                alt={filter.name}
                className="w-7 h-7 mb-1 bg-background rounded-lg"
              />
            )}
            <span className="font-semibold">{filter.name}</span>
          </button>
        ))}
      </div>
      <p className="mt-4 text-text">
        {filters.find((filter) => filter.name === activeFilter)?.description}
      </p>
    </>
  );
};

export default FilterButton;
