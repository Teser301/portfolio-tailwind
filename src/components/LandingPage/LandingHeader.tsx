import Header from "./LandingHeader/Header";
// Three JS's Div
import { Canvas } from "@react-three/fiber";
// The Model
import OfficeModel from "./LandingHeader/OfficeModel";
// Access to Canvas Camera
import CameraController from "./LandingHeader/CameraControl";

const LandingHeader: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row ">
      <Header />
      <div className="order-2 overflow-hidden py-20 md:py-20 xl:py-0 w-full absolute md:relative pointer-events-none md:pointer-events-auto opacity-40 md:opacity-100 h-[600px] lg:h-[700px] ">
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
