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
            className={`flex gap-2 items-center  px-6 py-3 rounded-lg shadow-md transition-transform duration-200 transform hover:scale-105 hover:shadow-lg ${
              activeViewOption === option
                ? "bg-primary scale-105"
                : "bg-backgroundSecondary "
            }`}
            onClick={() => setActiveViewOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="mt-4">
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
