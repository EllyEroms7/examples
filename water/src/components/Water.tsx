import { Center, Sky, Text3D } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, extend } from "@react-three/fiber";
import { Water as ThreeWater } from "three/examples/jsm/objects/Water.js";
import { useMemo, useRef } from "react";

extend({ ThreeWater });

const Water = () => {
  //water shader from threejs examples
  const water = useMemo(() => {
    const waterGeometry = new THREE.PlaneGeometry(200, 200);
    const water = new ThreeWater(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load(
        "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/waternormals.jpg",
        (texture) => {
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
        }
      ),
      sunDirection: new THREE.Vector3(1, 0.5, 0).normalize(),
      sunColor: 0xff6633,
      waterColor: 0x1a0a1a,
      distortionScale: 2.7,
      fog: true,
    });
    water.rotation.x = -Math.PI / 2;
    return water;
  }, []);

  //controlling animation
  useFrame((_, delta) => {
    if (water.material) {
      water.material.uniforms.time.value += delta;
    }
  });

  return (
    <>
      <Sky
        turbidity={4.9}
        rayleigh={6.73}
        mieCoefficient={0.003}
        mieDirectionalG={0.95}
        sunPosition={[17.4, 0.1, -0.2]}
        inclination={0.3}
        azimuth={17.4}
      />
      <primitive object={water} position={[0, -1, 0]} />
      <Center>
        <Text3D
          position={[0, -9, 0]}
          font="./font.json" // Path to the font file
          size={2} // Size of the text
          height={0.4} // Thickness of the text
          curveSegments={12} // Smoothness of the curves
          bevelEnabled // Enable bevel (rounded edges)
          bevelThickness={0.02} // Thickness of the bevel
          bevelSize={0.02} // Size of the bevel
          bevelOffset={0} // Offset of the bevel
          // Smoothness of the bevel
        >
          Water
          <meshPhysicalMaterial
            transmission={1}
            ior={1.5}
            color="white"
            roughness={0}
            thickness={1.1}
          />
          {/* Material for the text */}
        </Text3D>
      </Center>
    </>
  );
};

export default Water;
