import Header from "./LandingHeader/Header";
// Three JS's Div
import { Canvas } from "@react-three/fiber";
// The Model
import OfficeModel from "./LandingHeader/OfficeModel";
// Access to Canvas Camera
import CameraController from "./LandingHeader/CameraControl";

const LandingHeader: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className=" md:w-[800px] max-w-3xl flex flex-col pl-20 md:pl-40 pr-20 py-20 justify-center order-2 md:order-1">
        <Header />
      </div>
      <div className="w-full h-[800px] overflow-hidden order-1 md:order-2">
        <Canvas camera={{ fov: 175, position: [0, 1, 5] }} shadows>
          <ambientLight intensity={2} />
          <OfficeModel />
          <CameraController />
        </Canvas>
      </div>
    </div>
  );
};

export default LandingHeader;
