import { skills } from "../../data/skillsData";

const LandingSkills = () => {
  return (
    <div className="my-4">
      <div>
        <h1 className="text-center text-2xl font-semibold mb-6 text-black dark:text-white">
          Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-white dark:bg-customGrayLight w-72 transition-all duration-300 transform hover:bg-dPrimary hover:shadow-2xl hover:scale-105 hover:rotate-1"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 mb-2 transition-transform duration-300 transform hover:scale-110"
              />
              <p className="text-lg font-medium text-black dark:text-white">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingSkills;
