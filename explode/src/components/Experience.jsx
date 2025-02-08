import { OrbitControls } from "@react-three/drei";
import { Heart } from './Heart';
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import { useControls } from 'leva';
import { Banana } from "./Banana";
export const Experience = () => {
  const { items } = useControls({
    items: {
      value: 'heart',
      options: ['heart', 'banana']
    }
  })
  return (
    <>
      <Environment preset='city' background blur={0.4} />
      <OrbitControls enableZoom={false} />
      <Suspense>
        <Heart visible={items === 'heart'} />
        <Banana visible={items === 'banana'} scale={.02} />
      </Suspense>




    </>
  );
};
