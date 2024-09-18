import { skills } from "../../data/skillsData";
import Heading from "../Basic/Heading";

const LandingSkills = () => {
  return (
    <div className="my-4">
      <div>
        <Heading tag="h3" text="Skills" />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center p-8 bg-backgroundPrimary shadow-md rounded-lg">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg shadow-md bg-backgroundSecondary w-full max-w-72"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 mb-2"
              />
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingSkills;
