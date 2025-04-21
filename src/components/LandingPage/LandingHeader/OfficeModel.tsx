import { useGLTF, PresentationControls } from "@react-three/drei";
import { useEffect } from "react";
import { Mesh } from "three";

const OfficeModel: React.FC = () => {
  const model = useGLTF("./newroom.glb");

  useEffect(() => {
    model.scene.traverse((child) => {
      // Type guard: Check if this is a Mesh with material
      if (child instanceof Mesh && child.material) {
        child.material.metalness = 0.0; // Fix: Now TypeScript knows 'material' exists
        child.material.roughness = 1.7;
      }
    });
  }, [model]);

  return (
    <PresentationControls
      snap
      global
      zoom={0.8}
      rotation={[0, -Math.PI / 4, 0]}
      polar={[0, Math.PI / 4]}
      azimuth={[-Math.PI / 4, Math.PI / 4]}
      material-metalness={1.0}
    >
      <pointLight position={[0, 0, 0]} color={0xffffff} intensity={5} />
      <spotLight position={[-2, 0, 1]} color={0xffffff} intensity={10} />
      <group position={[0, -1, 0]} dispose={null}>
        <primitive object={model.scene} />
      </group>
    </PresentationControls>
  );
};

export default OfficeModel;
