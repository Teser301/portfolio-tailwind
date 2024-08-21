import React from "react";

const OptionButton: React.FC = () => {
  return (
    <div className="flex justify-center my-4">
      <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded">
        Option 1
      </button>
      <button className="ml-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded">
        Option 2
      </button>
    </div>
  );
};

export default OptionButton;
