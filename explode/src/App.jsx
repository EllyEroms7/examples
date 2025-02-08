import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";

function App() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={4} style={{
        opacity: 0
      }}>
        <Experience />
      </ScrollControls>
    </Canvas>
  );
}

export default App;
