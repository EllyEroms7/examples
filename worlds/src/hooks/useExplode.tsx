import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

export function useExplode(
  groupRef: React.RefObject<THREE.Group<THREE.Object3DEventMap>>,
  collision: boolean,
  easeOut: (t: number) => number
) {
  // SETS MESHES TARGET POSITION AND ROTATION BASED ON THEIR NORMALS
  useEffect(() => {
    if (groupRef.current) {
      //get the group world position
      const groupWorldPosition = new THREE.Vector3();
      groupRef.current.getWorldPosition(groupWorldPosition); //sends the world position to the arg

      groupRef.current.children.forEach((mesh) => {
        //code for each mesh
        if (mesh.name === "Origin") {
          mesh.visible = false;
        }

        mesh.userData.originalPosition = mesh.position.clone(); //clones the mesh original position
        const meshWorldPosition = new THREE.Vector3();
        mesh.getWorldPosition(meshWorldPosition); //sends the world position to the arg

        mesh.userData.direction = meshWorldPosition
          .clone()
          .sub(groupWorldPosition)
          .normalize(); // setting up normals (direction)

        // getting the rotation
        mesh.userData.originalRotation = mesh.rotation.clone(); //clones the original rotation

        mesh.userData.targetRotation = new THREE.Euler(
          mesh.userData.direction.x * Math.random() * 18 + 10,
          mesh.userData.direction.y * Math.random() * 18 + 4,
          mesh.userData.direction.z * Math.random() * 18 + 6
        ); // sets up the random rotation based on the normals

        //sets the target position (original position + normal * displacement (multiplyScaler))
        mesh.userData.targetPosition = mesh.userData.originalPosition
          .clone()
          .add(
            mesh.userData.direction
              .clone()
              .multiplyScalar(Math.random() * 14 + 6)
          );
      });
    }
  }, [groupRef]);

  //ANIMATION
  let offset = 0;
  useFrame((_, delta) => {
    if (groupRef.current && collision) {
      groupRef.current.children.forEach((mesh) => {
        if (!mesh.userData.originalPosition || !mesh.userData.targetPosition)
          return;

        //OFFSET
        offset += offset < 1 ? delta * 0.0002 : 0;

        //POSITION LERP
        mesh.position.x = THREE.MathUtils.lerp(
          mesh.userData.originalPosition.x,
          mesh.userData.targetPosition.x,
          easeOut(offset)
        );

        mesh.position.y = THREE.MathUtils.lerp(
          mesh.userData.originalPosition.y,
          mesh.userData.targetPosition.y,
          easeOut(offset)
        );

        mesh.position.z = THREE.MathUtils.lerp(
          mesh.userData.originalPosition.z,
          mesh.userData.targetPosition.z,
          easeOut(offset)
        );

        //ROTATION LERP
        mesh.rotation.x = THREE.MathUtils.lerp(
          mesh.userData.originalRotation.x,
          mesh.userData.targetRotation.x,
          easeOut(offset)
        );

        mesh.rotation.y = THREE.MathUtils.lerp(
          mesh.userData.originalRotation.y,
          mesh.userData.targetRotation.y,
          easeOut(offset)
        );

        mesh.rotation.z = THREE.MathUtils.lerp(
          mesh.userData.originalRotation.z,
          mesh.userData.targetRotation.z,
          easeOut(offset)
        );
      });
    }
  });
}
