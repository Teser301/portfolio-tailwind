import { Canvas } from "@react-three/fiber";
import OfficeModel from "../OfficeModel";

function LandingHeader() {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="md:w-[800px] max-w-3xl flex flex-col pl-40 pr-20 py-20 justify-center  order-2 md:order-1">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-customGray dark:text-white">Looking for a front-end developer ?</h1>
        <p className="text-customGrayText dark:text-white">
          My name is Carlo Aavekukk. I am a front-end developer for 6+ years. This is my portfolio website. Designed to showcase my work and my skills.
        </p>
      </div>
      <div className="w-full h-[800px]  overflow-hidden order-1 md:order-2">
        <Canvas resize={{ scroll: true, debounce: { scroll: 50, resize: 1 } }} flat dpr={[1, 2]} camera={{ fov: 45, position: [0, 1, 5] }} shadows>
          <color attach="background" args={["#020c1a"]} />
          <ambientLight intensity={2} />
          <OfficeModel />
        </Canvas>
      </div>
    </div>
  );
}

export default LandingHeader;
