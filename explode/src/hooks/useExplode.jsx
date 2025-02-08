import { useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll } from "@react-three/drei"
import * as THREE from 'three';


export const useExplode = (groupRef, distance = 2, meshOriginName, easeFn) => {

    //useEffect use effect should be used when the component is wrapped by a suspense
    useEffect(() => {

        if (groupRef.current != null) {

            const groupWorldPosition = new THREE.Vector3()
            groupRef.current.getWorldPosition(groupWorldPosition)

            groupRef.current.children.forEach((mesh) => {
                mesh.originalPosition = mesh.position.clone()
                const meshWorldPosition = new THREE.Vector3()
                mesh.getWorldPosition(meshWorldPosition)

                mesh.direction = meshWorldPosition.clone().sub(groupWorldPosition).normalize()
                mesh.targetPosition = mesh.originalPosition.clone().add(mesh.direction.clone().multiplyScalar(distance))
            });
        }
    }, [])

    //animating on scroll
    const scrollData = useScroll()
    useFrame(() => {
        if (groupRef.current != null) {
            groupRef.current.children.forEach((mesh) => {
                // Only update if the properties exist.
                if (!mesh.originalPosition || !mesh.targetPosition) return;

                //changes visibility of the mesh
                if (scrollData.offset < 0.001) {
                    if (mesh.name === meshOriginName) {
                        mesh.visible = true
                    } else {
                        mesh.visible = false
                    }
                } else {
                    if (mesh.name === meshOriginName) {
                        mesh.visible = false
                    } else {
                        mesh.visible = true
                    }
                }

                //lerps as user scrolls
                mesh.position.x = THREE.MathUtils.lerp(
                    mesh.originalPosition.x,
                    mesh.targetPosition.x,
                    easeFn(scrollData.offset)
                );
                mesh.position.y = THREE.MathUtils.lerp(
                    mesh.originalPosition.y,
                    mesh.targetPosition.y,
                    easeFn(scrollData.offset)
                );

                mesh.position.z = THREE.MathUtils.lerp(
                    mesh.originalPosition.z,
                    mesh.targetPosition.z,
                    easeFn(scrollData.offset)
                );
            });
        }
    })
}