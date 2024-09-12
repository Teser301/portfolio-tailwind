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
    html: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    css: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    sass: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    bootstrap:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    typescript: "bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-300",
  };

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`text-xs font-medium px-2.5 py-0.5 rounded ${
            tagStyles[tag.toLowerCase()] || "bg-background"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;
