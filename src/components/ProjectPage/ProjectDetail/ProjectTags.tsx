import React from "react";

interface ProjectTagsProps {
  tags: string[];
}

const ProjectTags: React.FC<ProjectTagsProps> = ({ tags }) => {
  // Tags for different languages.
  const tagStyles: { [key: string]: string } = {
    handlebars:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    react: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    javascript:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    php: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  };

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`text-xs font-medium px-2.5 py-0.5 rounded ${
            tagStyles[tag.toLowerCase()] ||
            "bg-gray-100 text-gray-800 dark:bg-gray-700 dark: text-text"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;
