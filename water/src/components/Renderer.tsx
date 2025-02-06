import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Water from "./Water";
import { OrbitControls, Stats } from "@react-three/drei";

const Renderer = () => {
  return (
    <div className="webgl">
      <Canvas
        camera={{
          position: new THREE.Vector3(0, 0, 7),
        }}
      >
        <Stats />

        <OrbitControls />
        <Water />
      </Canvas>
    </div>
  );
};

export default Renderer;
