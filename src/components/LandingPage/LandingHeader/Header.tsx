import {
  FaHtml5,
  FaPython,
  FaJsSquare,
  FaReact,
  FaWordpress,
} from "react-icons/fa"; // Example icons

const skills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaPython },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaWordpress },
];
const Header = () => {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight sm:text-center md:text-5xl lg:text-6xl text-primary">
        Looking for a front-end developer?
      </h1>
      <div className="flex flex-wrap gap-6 mt-8 justify-center">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="flex flex-col items-center">
              <Icon className="text-4xl mb-2" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Header;
