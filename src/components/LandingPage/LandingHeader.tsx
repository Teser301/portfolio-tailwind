import { Canvas } from "@react-three/fiber";
import OfficeModel from "../LandingPage/OfficeModel";
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

const LandingHeader: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-[800px] max-w-3xl flex flex-col pl-20 md:pl-40 pr-20 py-20 justify-center order-2 md:order-1">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight sm:text-center md:text-5xl lg:text-6xl text-primary">
          Looking for a front-end developer?
        </h1>
        <div className="flex flex-wrap gap-6 mt-8 justify-center">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <Icon className="text-4xl text-text mb-2" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[800px]  overflow-hidden order-1 md:order-2">
        <Canvas
          resize={{ scroll: true, debounce: { scroll: 50, resize: 1 } }}
          flat
          dpr={[1, 2]}
          camera={{ fov: 45, position: [0, 1, 5] }}
          shadows
        >
          <color attach="background" args={["#020c1a"]} />
          <ambientLight intensity={2} />
          <OfficeModel />
        </Canvas>
      </div>
    </div>
  );
};

export default LandingHeader;
