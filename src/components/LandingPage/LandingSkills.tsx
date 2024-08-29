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
              className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-white dark:bg-customGrayLight w-72 hover:bg-dPrimary hover:border-gray-400 transition duration-300"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 mb-2"
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
