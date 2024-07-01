import { Canvas } from "@react-three/fiber";
import { useGLTF, PresentationControls } from "@react-three/drei";
function LandingHeader() {
  const model = useGLTF("./room.glb");
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="w-full flex flex-col pb-5  mt-11">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Front end developer</h1>
          <p>My name is Carlo Aavekukk. I am a front end developer for 7+ years. This is my portfolio website. Designed to showcase my work and my skills.</p>
        </div>
        <div className="bg-wBackground w-full h-[800px]">
          <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }} shadows>
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
