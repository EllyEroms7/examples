import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "./Shaders";
import { Stats } from "@react-three/drei";
import { useControls } from "leva";
import CustomShaderMaterial from "three-custom-shader-material";

const Blob = () => {
  const materialRef =
    useRef<CustomShaderMaterial<typeof THREE.MeshPhysicalMaterial>>();
  const meshRef = useRef<THREE.Mesh>(null!);

  // Update the `u_time` uniform on every frame
  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta * 0.8;
      meshRef.current.rotation.y += 0.2 * delta;
    }
  });

  const hex = (hexes: string) => {
    const color = new THREE.Color(hexes);
    return new THREE.Vector3(color.r, color.g, color.b);
  };
  useControls({
    noise: {
      value: 4.0,
      min: 2.0,
      max: 11.0,
      onChange: (value) => {
        materialRef.current.uniforms.uNoise.value = value;
      },
    },
    displacement: {
      value: 1.0,
      min: 1.0,
      max: 3.0,
      onChange: (value) => {
        materialRef.current.uniforms.uDisplacement.value = value;
      },
    },

    colourStart: {
      value: "#0080E6",
      onChange: (value) => {
        const colourVector = hex(value);
        materialRef.current.uniforms.uColourStart.value = colourVector;
      },
    },

    colourEnd: {
      value: "#00FF99",
      onChange: (value) => {
        const colourVector = hex(value);
        materialRef.current.uniforms.uColourEnd.value = colourVector;
      },
    },
  });

  return (
    <>
      <Stats />
      <mesh ref={meshRef}>
        {/* A simple plane geometry */}

        <icosahedronGeometry args={[2, 25]} />
        <CustomShaderMaterial
          ref={materialRef}
          baseMaterial={THREE.MeshPhysicalMaterial}
          vertexShader={vertexShader} // Your vertex Shader
          fragmentShader={fragmentShader} // Your fragment Shader
          // Your Uniforms
          uniforms={{
            uTime: { value: 1.0 },
            uResolution: {
              value: new THREE.Vector2(window.innerWidth, window.innerHeight),
            },
            uNoise: { value: 4.0 },
            uDisplacement: { value: 1.0 },
            uColourStart: { value: new THREE.Vector3(0.0, 0.5, 0.9) },
            uColourEnd: { value: new THREE.Vector3(0.0, 1.0, 0.6) },
          }}
          // Base material properties
          roughness={0.05} // Low roughness for smooth reflections
          metalness={0.1} // Non-metallic (for liquid)
          thickness={0.5} // Controls refraction thickness
          clearcoatRoughness={0.1} // Slightly smooth clearcoat reflections
          reflectivity={1} // Maximum reflections
        />
      </mesh>
    </>
  );
};

export default Blob;
