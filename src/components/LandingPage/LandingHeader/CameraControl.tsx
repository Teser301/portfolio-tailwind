import React from "react";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
// Component to control the camera's fov animation
const CameraController: React.FC = () => {
  const { camera } = useThree();
  const cameraRef = useRef(camera as THREE.PerspectiveCamera);
  const targetFov = 45; // Target fov
  const speed = 0.15; // Speed of zoom

  useFrame(() => {
    if (cameraRef.current.fov > targetFov) {
      // Use lerp for smoother transition
      cameraRef.current.fov = THREE.MathUtils.lerp(
        cameraRef.current.fov,
        targetFov,
        speed
      );
      cameraRef.current.updateProjectionMatrix();
    }
  });

  return null; // This component doesn't render anything visually
};

export default CameraController;
