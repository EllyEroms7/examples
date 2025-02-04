import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import Blob from "./blob";

const Renderer = () => {
  return (
    <>
      <div className="webgl">
        <Canvas camera={{ position: [0, 0, -4] }}>
          <Environment files="/room.hdr" backgroundIntensity={0.1} />
          <OrbitControls />
          <Blob />
        </Canvas>
      </div>
    </>
  );
};

export default Renderer;
