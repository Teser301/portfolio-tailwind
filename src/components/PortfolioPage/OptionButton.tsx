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
          className={`px-4 py-2 rounded mr-2 ${
            viewOption === option ? "bg-blue-500 text-white" : "bg-gray-200"
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
