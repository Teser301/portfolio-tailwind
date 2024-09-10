import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const OptionButton: React.FC = () => {
  const { activeViewOption, setActiveViewOption } = useContext(FilterContext)!; // Non-null assertion operator
  const viewOptions = ["Year", "Company"];
  return (
    <>
      <div className="flex gap-4  my-4">
        {viewOptions.map((option) => (
          <button
            key={option}
            className={`flex gap-2 items-center  px-6 py-3 rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105 hover:shadow-lg text-text ${
              activeViewOption === option
                ? "bg-primary text-text dark:bg-secondary"
                : "bg-gray-200 text-text dark:bg-gray-700"
            }`}
            onClick={() => setActiveViewOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="mt-4 text-text">
        {activeViewOption === "Year"
          ? "Organized by the Year it was made"
          : activeViewOption === "Company"
          ? "Organized by the company I made it for."
          : ""}
      </p>
    </>
  );
};

export default OptionButton;
