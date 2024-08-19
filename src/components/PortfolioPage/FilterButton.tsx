import React from "react";

interface FilterButtonProps {
  filters: string[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ filters, activeFilter, setActiveFilter }) => {
  return (
    <div className="mb-6 flex justify-center space-x-4">
      {filters.map((filter, index) => (
        <button
          key={index}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 rounded-lg ${activeFilter === filter ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"} hover:bg-blue-500 transition`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButton;
