import { useState } from "react";
import { experiences } from "../../data/timelineData";

function Timeline() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div
        className="absolute w-full h-full bg-cover bg-center bg-no-repeat bg-blend-lighten opacity-30 transition-all duration-500"
        style={{
          backgroundImage: `url(${selectedExperience.backgroundImage})`,
        }}
      ></div>
      <div className="z-10 w-full max-w-4xl bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
        <h3 className="text-3xl font-extrabold text-center text-primary my-8">
          Experience Timeline
        </h3>
        <div className="relative flex justify-between items-center w-full mx-auto mb-10">
          <div className="absolute h-0.5 w-full bg-gray-300 dark:bg-gray-600"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:scale-105"
              onClick={() => setSelectedExperience(exp)}
            >
              <div
                className={`w-8 h-8 rounded-full border-4 ${
                  selectedExperience === exp
                    ? "bg-primary border-none"
                    : "bg-gray-700 dark:bg-white border-white dark:border-gray-800"
                }`}
              ></div>
              <span className="absolute mt-2 text-xs font-medium text-gray-700 dark: text-text transform -translate-y-full top-11">
                {exp.year}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-2 text-primary">
            {selectedExperience.title}
          </h2>
          <h3 className="text-md font-bold mb-2 text-secondary">
            {selectedExperience.company}
          </h3>
          <p className="text-md mb-4 text-gray-600 dark: text-text">
            {selectedExperience.description}
          </p>
        </div>
      </div>
      <div className="z-10 max-w-4xl ">
        {selectedExperience.achievements?.length ? (
          <div className="mt-4">
            {selectedExperience.achievements.map((achievement, index) => (
              <div
                key={index}
                className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  {achievement.icon && (
                    <img
                      src={achievement.icon}
                      alt="Icon"
                      className="w-6 h-6 mr-2"
                    />
                  )}
                  <h4 className="text-md font-semibold text-primary">
                    {achievement.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-700 dark: text-text">
                  {achievement.content}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Timeline;
