import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useRef } from "react";

function Box() {
  const boxRef = useRef<Mesh>(null!);

  useFrame(() => {
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh position={[0, 0, -1]} ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

export default Box;
