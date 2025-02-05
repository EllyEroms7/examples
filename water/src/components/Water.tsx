import { Environment, EnvironmentLoaderProps, EnvironmentProps } from "@react-three/drei";
import { fragmentShader, vertexShader } from "./Shaders";
import * as THREE from "three";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Water = () => {
  const matRef = useRef<THREE.ShaderMaterial>(null!);
  const envRef = useRef(null!);

  useControls("Waves", {
    speed: {
      value: 1,
      min: 0,
      max: 2,
      onChange: (value) => {
        matRef.current.uniforms.uSpeed.value = value;
      },
    },
    iterations: {
      value: 6,
      min: 1,
      max: 10,
      onChange: (value) => {
        matRef.current.uniforms.uIterations.value = Math.round(value);
      },
    },
    Lacunarity: {
      value: 2.0,
      min: 1.0,
      max: 5.0,
      onChange: (value) => {
        matRef.current.uniforms.uLacunarity.value = value;
      },
    },

    Persistence: {
      value: 0.3,
      min: 0.2,
      max: 1,
      onChange: (value) => {
        matRef.current.uniforms.uPersistence.value = value;
      },
    },

    Frequency: {
      value: 1.5,
      min: 1,
      max: 15,
      onChange: (value) => {
        matRef.current.uniforms.uFrequency.value = value;
      },
    },

    Amplitude: {
      value: 0.05,
      min: 0.0,
      max: 5,
      onChange: (value) => {
        matRef.current.uniforms.uAmplitude.value = value;
      },
    },

    TroughThreshold: {
      value: -0.05,
      min: -0.01,
      max: 2,
      onChange: (value) => {
        matRef.current.uniforms.uTroughThreshold.value = value;
      },
    },
    TroughTransition: {
      value: 0.1,
      min: 0.05,
      max: 3,
      onChange: (value) => {
        matRef.current.uniforms.uTroughTransition.value = value;
      },
    },

    PeakThreshold: {
      value: 0.05,
      min: 0,
      max: 5,
      onChange: (value) => {
        matRef.current.uniforms.uPeakThreshold.value = value;
      },
    },

    PeakTransition: {
      value: 0.1,
      min: 0,
      max: 5,
      onChange: (value) => {
        matRef.current.uniforms.uPeakTransition.value = value;
      },
    },
    FresnelStrength: {
      value: 0.5,
      min: 0,
      max: 5,
      onChange: (value) => {
        matRef.current.uniforms.uFresnelStrength.value = value;
      },
    },

    FresnelPower: {
      value: 1,
      min: 0,
      max: 5,
      onChange: (value) => {
        matRef.current.uniforms.uFresnelPower.value = value;
      },
    },
  });

  useFrame((_, delta) => {
    matRef.current.uniforms.uTime.value += delta;
  });
  return (
    <>
      <Environment files="/room.hdr" ref={envRef} />

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 2, 256, 256]} />
        <shaderMaterial
          ref={matRef}
          side={2}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uSurfaceColour: { value: new THREE.Color("#ff0000") },

            uOpacity: { value: 1 },

            uTime: { value: 0.0 },
            uSpeed: { value: 1.0 },
            uIterations: { value: 6 },
            uLacunarity: { value: 2.0 },
            uPersistence: { value: 0.3 },
            uFrequency: { value: 1.5 },
            uAmplitude: { value: 0.05 },

            uTroughThreshold: { value: -0.05 },
            uTroughTransition: { value: 0.1 },

            uPeakThreshold: { value: 0.05 },
            uPeakTransition: { value: 0.1 },

            uFresnelStrength: { value: 0.5 },
            uFresnelPower: { value: 1 },

            uEnvMap: { value: envRef },
          }}
          transparent
        />
      </mesh>
    </>
  );
};

export default Water;
