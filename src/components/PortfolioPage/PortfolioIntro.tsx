import React from "react";

const PortfolioIntroduction: React.FC = () => {
  return (
    <div className=" rounded-lg ">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
        Explore a collection of projects that showcase my passion for coding,
        creativity, and problem-solving. Here, you'll find a diverse range of
        work I've completed for clients, companies, and personal
        curiosity-driven experiments. Each project reflects my commitment to
        delivering high-quality solutions, whether it's through building dynamic
        web applications, crafting engaging user experiences, or exploring the
        latest technologies.
      </p>
      <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed mt-4">
        Dive in, and discover how I bring ideas to life through code.
      </p>
    </div>
  );
};

export default PortfolioIntroduction;
