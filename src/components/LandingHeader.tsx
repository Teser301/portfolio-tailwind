import { Canvas } from "@react-three/fiber";
import { useGLTF, PresentationControls } from "@react-three/drei";
import { useControls } from "leva";
function LandingHeader() {
  const earth = useGLTF("./building.glb");
  const { lightX, lightY, lightZ } = useControls({ lightX: 1, lightY: 1, lightZ: 1 });
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="w-full flex flex-col pb-5  mt-11">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Front end developer</h1>
          <p>My name is Carlo Aavekukk. I am a front end developer for 7+ years. This is my portfolio website. Designed to showcase my work and my skills.</p>
        </div>
        <div className="bg-wBackground w-full h-[800px]">
          <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>
            <color attach="background" args={["#020c1a"]} />
            <ambientLight />
            <PresentationControls snap global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
              <directionalLight position={[lightX, lightY, lightZ]} color={0xffff00} intensity={5} />

              <group position={[0, -1, 0]} scale={0.3} dispose={null}>
                <primitive object={earth.scene} />
              </group>
            </PresentationControls>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default LandingHeader;
