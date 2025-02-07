import { useMemo, useRef } from "react";
import * as THREE from "three";
import { vertex } from "./vertex";
import { fragment } from "./fragment";
import { useFrame } from "@react-three/fiber";
import { Points, useTexture } from "@react-three/drei";

const Fire = () => {
  const matRef = useRef<THREE.ShaderMaterial>(null!);
  const pointsRef = useRef<THREE.Points>(null!);

  const texture = useTexture("./tex.png");

  useFrame((_, delta) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value += delta;
    }
  });

  const positions = useMemo(() => {
    const amount = 10000;
    const pos = new Float32Array(amount * 3);

    for (let i = 0; i < pos.length; i++) {
      pos[i * 3] = (Math.sin(Math.random()) - 0.5) * 4;
      pos[i * 3 + 1] = Math.random() * 5; // more particles near the base
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, []);

  return (
    <>
      <Points ref={pointsRef} positions={positions}>
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
            uTexture: { value: texture },
            noiseScale: { value: 0.5 },
            turbulenceStrength: { value: 0.2 },
          }}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </>
  );
};

export default Fire;
