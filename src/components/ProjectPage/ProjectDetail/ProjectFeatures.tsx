import React from "react";

interface ProjectFeaturesProps {
  features: string[];
}

const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({ features }) => {
  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-text">
        Features:
      </h3>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFeatures;
