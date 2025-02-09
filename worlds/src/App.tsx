import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Stats } from "@react-three/drei";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="webgl">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <Perf />
        <Stats />
        <OrbitControls />
        <ambientLight intensity={1} />
        <directionalLight
          intensity={5}
          position={[0, 0, -6]}
          color="rebeccapurple"
        />
        <directionalLight intensity={1.3} position={[6, -2, 4]} color="blue" />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
