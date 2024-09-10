import { skills } from "../../data/skillsData";

const LandingSkills = () => {
  return (
    <div className="my-4  ">
      <div>
        <h3 className="text-3xl font-extrabold text-primary text-center my-8">
          Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center p-8 border-white dark:border-gray-800 bg-backgroundPrimary dark:bg-gray-800">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-backgroundSecondary  w-full max-w-72 transition-all duration-300 transform  hover:shadow-2xl hover:scale-105 hover:rotate-1"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 mb-2 "
              />
              <p className="text-lg font-medium text-text">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingSkills;
