import React, { useRef, useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CameraController: React.FC = () => {
  const { camera, set, size } = useThree();
  const orthoCameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const targetZoom = 2; // Lower value = more zoomed out
  const initialZoom = 0.1; // Start very zoomed out
  const speed = 0.03; // Animation speed
  const [originalCamera] = useState(camera); // Store original camera for cleanup
  const [driftPhase, setDriftPhase] = useState(0); // For the drifting motion
  const initialYPosition = 2; // Store the initial Y position for drifting

  useEffect(() => {
    const aspect = size.width / size.height;
    const frustrumSize = 10; // Controls the base size of what's visible

    // Initialize orthographic camera with a fixed frustrum size
    const orthoCamera = new THREE.OrthographicCamera(
      (frustrumSize * aspect) / -2,
      (frustrumSize * aspect) / 2,
      frustrumSize / 2,
      frustrumSize / -2,
      0.1,
      1000
    );

    // Start position and zoom
    orthoCamera.position.set(0, 2, 5);
    orthoCamera.zoom = initialZoom;
    orthoCamera.lookAt(0, 0, 0);
    orthoCamera.updateProjectionMatrix();
    orthoCameraRef.current = orthoCamera;

    // Replace the default camera
    set({ camera: orthoCamera });

    // Debug log to confirm camera setup
    console.log("Orthographic camera initialized:", orthoCamera);

    // Cleanup on unmount
    return () => set({ camera: originalCamera });
  }, [size, set, originalCamera]);

  // Animation frame for zoom effect and drifting motion
  useFrame((_state, delta) => {
    if (orthoCameraRef.current) {
      // Handle zoom animation
      if (Math.abs(orthoCameraRef.current.zoom - targetZoom) > 0.001) {
        // Smoothly interpolate the zoom value
        orthoCameraRef.current.zoom = THREE.MathUtils.lerp(
          orthoCameraRef.current.zoom,
          targetZoom,
          speed
        );
        orthoCameraRef.current.updateProjectionMatrix();
      }
      // Once zooming is nearly complete, start the drifting motion
      else {
        // Update drift phase
        setDriftPhase((prev) => prev + delta); // Controls drift speed

        // Apply gentle horizontal drifting motion
        const driftAmount = Math.sin(driftPhase) * 0.1; // Controls drift amplitude

        // Maintain the initial y-position while applying subtle vertical drift
        const verticalDrift = Math.cos(driftPhase * 0.7) * 0.05;

        // Update camera position with drifting while preserving the initial Y height
        orthoCameraRef.current.position.x = driftAmount;
        orthoCameraRef.current.position.y = initialYPosition + verticalDrift;

        orthoCameraRef.current.lookAt(new THREE.Vector3(0, 0, 0));
        orthoCameraRef.current.updateProjectionMatrix();
      }
    }
  });

  // Handle window resize
  useEffect(() => {
    const onResize = () => {
      if (orthoCameraRef.current) {
        const aspect = size.width / size.height;
        const frustrumSize = 10;

        orthoCameraRef.current.left = (frustrumSize * aspect) / -2;
        orthoCameraRef.current.right = (frustrumSize * aspect) / 2;
        orthoCameraRef.current.top = frustrumSize / 2;
        orthoCameraRef.current.bottom = frustrumSize / -2;

        orthoCameraRef.current.updateProjectionMatrix();
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [size]);

  return null;
};

export default CameraController;
