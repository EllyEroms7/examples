import { OrbitControls } from "@react-three/drei";
import { Heart } from './Heart';
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
export const Experience = () => {
  return (
    <>
      <Environment preset='city' background blur={0.4} />
      <OrbitControls enableZoom={false} />

      <Heart />

    </>
  );
};
