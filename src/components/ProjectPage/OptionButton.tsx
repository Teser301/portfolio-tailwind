import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const OptionButton: React.FC = () => {
  const { viewOption, setViewOption } = useContext(FilterContext)!; // Non-null assertion operator
  const viewOptions = ["Year", "Company"];

  return (
    <div className="flex my-4 justify-center">
      {viewOptions.map((option) => (
        <button
          key={option}
          className={`px-4 py-2 rounded mr-2 transition-colors ${
            viewOption === option
              ? "bg-blue-500 text-white dark:bg-blue-400 dark:text-gray-900"
              : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
          }`}
          onClick={() => setViewOption(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default OptionButton;
