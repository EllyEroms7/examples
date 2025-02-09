import { Suspense, useRef, useState } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { World } from "./World";
import { Galaxy } from "./Galaxy";
import { World1 } from "./World1";

const Experience = () => {
  const group = useRef<Group>(null);
  const group1 = useRef<Group>(null);
  const [isColliding, setIsColliding] = useState(false);
  const paused = useRef<boolean>(false);

  useFrame((_, delta) => {
    if (group.current && group1.current) {
      if (!paused.current) {
        // Move groups toward each other
        group1.current.position.y -= delta * 0.1;
        group.current.position.y += delta * 0.1;
      }
      if (
        group1.current &&
        group.current &&
        group1.current.position.y <= 4 &&
        group.current.position.y <= 4
      ) {
        paused.current = true;
        setIsColliding(paused.current);
      }
    }
  });

  return (
    <>
      <Suspense>
        <World
          position={[0, -5, 0]}
          ref={group}
          collision={isColliding}
          scale={[2, 2, 2]}
        />
      </Suspense>
      <World1
        position={[0, 5, 0]}
        ref={group1}
        collision={isColliding}
        scale={[2, 2, 2]}
      />
      <Galaxy scale={40} />
    </>
  );
};

export default Experience;
