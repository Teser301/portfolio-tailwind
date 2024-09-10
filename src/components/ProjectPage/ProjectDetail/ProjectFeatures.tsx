import React from "react";

interface ProjectFeaturesProps {
  features: string[];
}

const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({ features }) => {
  return (
    <div className="my-4 text-text">
      <h3 className="text-lg font-semibold">Features:</h3>
      <ul className="list-disc list-inside mt-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFeatures;
