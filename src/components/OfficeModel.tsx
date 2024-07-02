import { useGLTF, PresentationControls } from "@react-three/drei";

function OfficeModel() {
  const model = useGLTF("./room.glb");
  return (
    <PresentationControls snap global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
      <pointLight position={[0, 1, 0]} color={0xffffff} intensity={10} />
      <spotLight position={[-2, 0, 1]} color={0xffffff} intensity={25} />
      <group position={[0, -1, 0]} dispose={null}>
        <primitive object={model.scene} />
      </group>
    </PresentationControls>
  );
}

export default OfficeModel;
