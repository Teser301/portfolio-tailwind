import React from "react";
import { recommendations } from "../../data/recommendationData";

const RecommendationCard: React.FC = () => {
  return (
    <div className="my-4">
      <h3 className="text-3xl font-extrabold text-primary text-center my-8">
        Recommendations
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {recommendations.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center border  rounded-lg p-8  shadow-lg max-w-4xl mx-auto border-backgroundPrimary dark:border-gray-800 bg-backgroundPrimary dark:bg-gray-800"
          >
            <div className="flex-shrink-0">
              <img
                src={skill.image}
                alt={skill.name}
                className="rounded-full w-32 h-32 object-cover mr-0 md:mr-8 mb-6 md:mb-0"
              />
            </div>
            <div className="flex flex-col w-full">
              <h3 className="text-2xl font-bold text-primary  ">
                {skill.name}
              </h3>
              <p className="text-lg font-bold text-secondary">{skill.title}</p>
              <p className="text-xl italic text-text  my-4">"{skill.quote}"</p>
              <p className="text-lg text-gray-500  text-right">{skill.year}</p>
            </div>
          </div>
        ))}
        <div className="flex flex-col w-full md:flex-row items-center justify-center border-4 border-dashed rounded-lg p-8 max-w-4xl mx-auto bg-backgroundPrimary  border-gray-400 dark:border-gray-600 opacity-50">
          <p className="text-lg italic text-gray-400 dark:text-gray-500 text-center">
            More recommendations coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
