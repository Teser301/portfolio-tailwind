import React, { useState } from "react";
import { experiences } from "../../data/timelineData";

function HorizontalTimeline() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <div className="relative  w-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div
        className="absolute w-full h-full bg-cover bg-center bg-no-repeat bg-blend-lighten opacity-30 transition-all duration-500"
        style={{
          backgroundImage: `url(${selectedExperience.backgroundImage})`,
        }}
      ></div>
      <div className="z-10 w-full max-w-4xl  bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 ">
        <h1 className="text-center text-2xl font-semibold mb-6 text-black dark:text-white">
          Experience Timeline
        </h1>

        {/* Horizontal Timeline */}
        <div className="relative flex justify-between items-center w-full mx-auto mb-10">
          <div className="absolute h-0.5 w-full bg-black dark:bg-white"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedExperience(exp)}
            >
              <div
                className={`w-6 h-6 rounded-full border-4 ${
                  selectedExperience === exp
                    ? "bg-black dark:bg-white border-white dark:border-black"
                    : "bg-white dark:bg-black border-none"
                }`}
              ></div>
              <span className="absolute mt-2 text-xs font-medium text-black dark:text-white transform -translate-y-full top-11">
                {exp.year}
              </span>
            </div>
          ))}
        </div>

        {/* Experience Details */}
        <div className="mt-4 text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-2 text-black dark:text-white">
            {selectedExperience.title}
          </h2>
          <h3 className="text-md font-bold mb-2 text-black dark:text-white">
            {selectedExperience.company}
          </h3>
          <p className="text-md mb-4 text-black dark:text-white">
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
                className="mb-4 p-4 bg-white dark:bg-gray-800  rounded-lg"
              >
                <div className="flex items-center mb-2">
                  {achievement.icon && (
                    <img
                      src={achievement.icon}
                      alt="Icon"
                      className="w-6 h-6 mr-2"
                    />
                  )}
                  <h4 className="text-md font-semibold text-black dark:text-white">
                    {achievement.title}
                  </h4>
                </div>
                <p className="text-sm text-black dark:text-gray-300">
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

export default HorizontalTimeline;
