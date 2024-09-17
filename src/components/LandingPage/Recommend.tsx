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
            className="flex flex-col md:flex-row items-center rounded-lg p-8 shadow-md max-w-4xl mx-auto  border border-backgroundPrimary bg-backgroundPrimary "
          >
            <div className="flex-shrink-0">
              <img
                src={skill.image}
                alt={skill.name}
                className="rounded-full w-32 h-32 object-cover mr-0 md:mr-8 mb-6 md:mb-0"
              />
            </div>
            <div className="flex flex-col w-full">
              {skill.link ? (
                <a
                  href={skill.link}
                  target="_blank"
                  className="flex flex-col w-full"
                >
                  <h3 className="text-2xl font-bold text-primary cursor-pointer hover:underline">
                    {skill.name}
                  </h3>
                </a>
              ) : (
                <h3 className="text-2xl font-bold text-primary cursor-pointer hover:underline">
                  {skill.name}
                </h3>
              )}

              <p className="text-lg font-bold text-secondary">{skill.title}</p>
              <p className="text-xl italic my-4">"{skill.quote}"</p>
              <p className="text-lg text-right">{skill.year}</p>
            </div>
          </div>
        ))}
        {/* <div className="flex flex-col w-full md:flex-row items-center justify-center border-4 border-dashed rounded-lg p-8 max-w-4xl mx-auto bg-backgroundPrimary border-backgroundPrimary  opacity-50">
          <p className="text-lg italic  text-center">
            More recommendations coming soon...
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default RecommendationCard;
