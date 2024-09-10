import React from "react";

const PortfolioIntroduction: React.FC = () => {
  return (
    <div className=" rounded-lg ">
      <h3 className="text-3xl font-extrabold text-primary text-center my-8">
        Welcome to my Projects page
      </h3>
      <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
        Here, you'll find a diverse range of work I've completed for clients,
        companies, and personal curiosity-driven experiments. Each project
        reflects my commitment to delivering high-quality solutions, whether
        it's through building dynamic web applications, crafting engaging user
        experiences, or exploring the latest technologies.
      </p>
    </div>
  );
};

export default PortfolioIntroduction;
