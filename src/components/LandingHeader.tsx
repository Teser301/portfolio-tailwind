import { Canvas } from "@react-three/fiber";
import { useGLTF, PresentationControls } from "@react-three/drei";
function LandingHeader() {
  const model = useGLTF("./room.glb");
  return (
    <>
      <div className="flex">
        <div className="w-full max-w-3xl flex flex-col pl-40 pr-20 py-20 justify-center bg-dSecondary ">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Looking for a Front end developer ?</h1>
          <p>My name is Carlo Aavekukk. I am a front end developer for 6+ years. This is my portfolio website. Designed to showcase my work and my skills.</p>
        </div>
        <div className="w-full h-[800px] bg-wBackground">
          <Canvas flat dpr={[1, 2]} camera={{ fov: 45, position: [0, 1, 5] }} shadows>
            <color attach="background" args={["#020c1a"]} />
            <ambientLight intensity={2} />
            <PresentationControls snap global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
              <pointLight position={[0, 1, 0]} color={0xffffff} intensity={10} />
              <spotLight position={[-2, 0, 1]} color={0xffffff} intensity={25} />
              <group position={[0, -1, 0]} dispose={null}>
                <primitive object={model.scene} />
              </group>
            </PresentationControls>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default LandingHeader;
