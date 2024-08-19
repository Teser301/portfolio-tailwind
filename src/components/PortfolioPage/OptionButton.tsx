import React from "react";

interface OptionButtonProps {
  viewOptions: string[];
  viewOption: string;
  handleViewOptionClick: (option: string) => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({ viewOptions, viewOption, handleViewOptionClick }) => {
  return (
    <div className="mb-6 flex justify-center space-x-4">
      {viewOptions.map((option, index) => (
        <button
          key={index}
          onClick={() => handleViewOptionClick(option)}
          className={`px-4 py-2 rounded-lg ${viewOption === option ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"} hover:bg-blue-500 transition`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default OptionButton;
