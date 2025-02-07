import { useRef } from "react";
import * as THREE from "three";
import { vertex } from "./vertex";
import { fragment } from "./fragment";
import { useFrame } from "@react-three/fiber";

const Fire = () => {
  const matRef = useRef<THREE.ShaderMaterial>(null!);

  // Uncomment when ready to control uniforms over time
  useFrame((_, delta) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value += delta;
    }
  });
  return (
    <>
      <mesh>
        <planeGeometry args={[75, 75, 75, 75]} />
        <shaderMaterial
          ref={matRef}
          vertexShader={vertex}
          fragmentShader={fragment}
          uniforms={{
            uTime: { value: 0.0 },
            uScale: { value: 4.0 },
            uMix1: { value: 0.5 },
            uMix2: { value: 0.5 },
            uIntensity: { value: 2.0 },
            resolution: {
              value: new THREE.Vector2(window.innerWidth, window.innerHeight),
            },
          }}
          // Optionally add properties like transparent if your fragment shader uses alpha blending
          transparent={true}
        />
      </mesh>
    </>
  );
};

export default Fire;
