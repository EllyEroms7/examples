import { Canvas } from "@react-three/fiber";
// import Text from "./Text";
import { Environment, OrbitControls } from "@react-three/drei";
import Fire from "./Fire";
const Renderer = () => {
  return (
    <div className="webgl">
      <Canvas camera={{ position: [0, 0, 35] }}>
        <Environment preset="city" />
        <OrbitControls />
        <Fire />
        {/* <Text /> */}
      </Canvas>
    </div>
  );
};

export default Renderer;
