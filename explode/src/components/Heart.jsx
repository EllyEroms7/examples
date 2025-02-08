import React, { useEffect, useRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useExplode } from '../hooks/useExplode';

export function Heart(props) {
  const { nodes, materials } = useGLTF('/heart.glb')
  const groupRef = useRef();
  const easeOutCubic = (t) => (--t) * t * t + 1;

  useExplode(groupRef, 2, 'origin', easeOutCubic);

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <mesh geometry={nodes.Heart_Full_cell.geometry} material={materials.Red} position={[0.207, -0.008, -0.209]} />
      <mesh geometry={nodes.Heart_Full_cell001.geometry} material={materials.Red} position={[0.329, -0.006, 0.158]} />
      <mesh geometry={nodes.Heart_Full_cell002.geometry} material={materials.Red} position={[-0.229, -0.123, 0.163]} />
      <mesh geometry={nodes.Heart_Full_cell003.geometry} material={materials.Red} position={[0.155, -0.287, 0.002]} />
      <mesh geometry={nodes.Heart_Full_cell004.geometry} material={materials.Red} position={[-0.011, -0.033, 0.164]} />
      <mesh geometry={nodes.Heart_Full_cell005.geometry} material={materials.Red} position={[-0.001, 0.144, 0.124]} />
      <mesh geometry={nodes.Heart_Full_cell006.geometry} material={materials.Red} position={[0.336, -0.004, -0.165]} />
      <mesh geometry={nodes.Heart_Full_cell007.geometry} material={materials.Red} position={[0.237, 0.212, 0.019]} />
      <mesh geometry={nodes.Heart_Full_cell008.geometry} material={materials.Red} position={[0.149, -0.139, -0.14]} />
      <mesh geometry={nodes.Heart_Full_cell009.geometry} material={materials.Red} position={[0.048, -0.374, 0.084]} />
      <mesh geometry={nodes.Heart_Full_cell010.geometry} material={materials.Red} position={[-0.392, 0.005, -0.06]} />
      <mesh geometry={nodes.Heart_Full_cell011.geometry} material={materials.Red} position={[0.027, -0.19, 0.186]} />
      <mesh geometry={nodes.Heart_Full_cell012.geometry} material={materials.Red} position={[-0.4, -0.002, 0.063]} />
      <mesh geometry={nodes.Heart_Full_cell013.geometry} material={materials.Red} position={[-0.139, 0.099, -0.188]} />
      <mesh geometry={nodes.Heart_Full_cell014.geometry} material={materials.Red} position={[-0.124, -0.238, -0.137]} />
      <mesh geometry={nodes.Heart_Full_cell015.geometry} material={materials.Red} position={[-0.081, -0.396, -0.066]} />
      <mesh geometry={nodes.Heart_Full_cell016.geometry} material={materials.Red} position={[0.308, 0.176, -0.064]} />
      <mesh geometry={nodes.Heart_Full_cell017.geometry} material={materials.Red} position={[0.272, -0.114, -0.17]} />
      <mesh geometry={nodes.Heart_Full_cell018.geometry} material={materials.Red} position={[0.14, 0.102, -0.184]} />
      <mesh geometry={nodes.Heart_Full_cell019.geometry} material={materials.Red} position={[0.001, 0.027, 0.002]} />
      <mesh geometry={nodes.Heart_Full_cell020.geometry} material={materials.Red} position={[0.177, 0.185, 0.112]} />
      <mesh geometry={nodes.Heart_Full_cell021.geometry} material={materials.Red} position={[-0.014, -0.455, 0.01]} />
      <mesh geometry={nodes.Heart_Full_cell022.geometry} material={materials.Red} position={[-0.144, 0.098, 0.184]} />
      <mesh geometry={nodes.Heart_Full_cell023.geometry} material={materials.Red} position={[0.264, -0.125, 0.164]} />
      <mesh geometry={nodes.Heart_Full_cell024.geometry} material={materials.Red} position={[0.358, -0.102, -0.079]} />
      <mesh geometry={nodes.Heart_Full_cell025.geometry} material={materials.Red} position={[0.156, -0.137, 0.178]} />
      <mesh geometry={nodes.Heart_Full_cell026.geometry} material={materials.Red} position={[-0.235, -0.204, -0.113]} />
      <mesh geometry={nodes.Heart_Full_cell027.geometry} material={materials.Red} position={[0.09, 0.201, -0.002]} />
      <mesh geometry={nodes.Heart_Full_cell028.geometry} material={materials.Red} position={[-0.189, -0.255, 0.132]} />
      <mesh geometry={nodes.Heart_Full_cell029.geometry} material={materials.Red} position={[-0.332, -0.115, 0.094]} />
      <mesh geometry={nodes.Heart_Full_cell030.geometry} material={materials.Red} position={[0.382, 0.112, -0.008]} />
      <mesh geometry={nodes.Heart_Full_cell031.geometry} material={materials.Red} position={[-0.373, 0.112, 0.088]} />
      <mesh geometry={nodes.Heart_Full_cell032.geometry} material={materials.Red} position={[0.265, 0.11, -0.161]} />
      <mesh geometry={nodes.Heart_Full_cell033.geometry} material={materials.Red} position={[-0.31, 0.173, 0.063]} />
      <mesh geometry={nodes.Heart_Full_cell034.geometry} material={materials.Red} position={[-0.334, -0.015, -0.161]} />
      <mesh geometry={nodes.Heart_Full_cell035.geometry} material={materials.Red} position={[-0.198, -0.049, -0.19]} />
      <mesh geometry={nodes.Heart_Full_cell036.geometry} material={materials.Red} position={[-0.328, -0.01, 0.158]} />
      <mesh geometry={nodes.Heart_Full_cell037.geometry} material={materials.Red} position={[-0.376, 0.104, -0.091]} />
      <mesh geometry={nodes.Heart_Full_cell038.geometry} material={materials.Red} position={[0.393, -0.009, 0.042]} />
      <mesh geometry={nodes.Heart_Full_cell039.geometry} material={materials.Red} position={[-0.089, -0.198, 0.184]} />
      <mesh geometry={nodes.Heart_Full_cell040.geometry} material={materials.Red} position={[0.34, -0.112, 0.095]} />
      <mesh geometry={nodes.Heart_Full_cell041.geometry} material={materials.Red} position={[-0.165, 0.181, 0.118]} />
      <mesh geometry={nodes.Heart_Full_cell042.geometry} material={materials.Red} position={[-0.182, 0.18, -0.119]} />
      <mesh geometry={nodes.Heart_Full_cell043.geometry} material={materials.Red} position={[-0.306, 0.174, -0.066]} />
      <mesh geometry={nodes.Heart_Full_cell044.geometry} material={materials.Red} position={[-0.29, -0.182, 0.002]} />
      <mesh geometry={nodes.Heart_Full_cell045.geometry} material={materials.Red} position={[-0.091, 0.203, -0.002]} />
      <mesh geometry={nodes.Heart_Full_cell046.geometry} material={materials.Red} position={[-0.326, -0.118, -0.119]} />
      <mesh geometry={nodes.Heart_Full_cell047.geometry} material={materials.Red} position={[0.176, 0.181, -0.113]} />
      <mesh geometry={nodes.Heart_Full_cell048.geometry} material={materials.Red} position={[-0.271, 0.11, 0.162]} />
      <mesh geometry={nodes.Heart_Full_cell049.geometry} material={materials.Red} position={[-0.262, 0.112, -0.161]} />
      <mesh geometry={nodes.Heart_Full_cell050.geometry} material={materials.Red} position={[-0.196, -0.015, 0.196]} />
      <mesh geometry={nodes.Heart_Full_cell051.geometry} material={materials.Red} position={[0.14, 0.097, 0.186]} />
      <mesh geometry={nodes.Heart_Full_cell052.geometry} material={materials.Red} position={[-0.001, 0.141, -0.127]} />
      <mesh geometry={nodes.Heart_Full_cell053.geometry} material={materials.Red} position={[0.198, -0.017, 0.2]} />
      <mesh geometry={nodes.Heart_Full_cell054.geometry} material={materials.Red} position={[0.286, -0.172, 0.003]} />
      <mesh geometry={nodes.Heart_Full_cell055.geometry} material={materials.Red} position={[0.041, -0.398, -0.082]} />
      <mesh geometry={nodes.Heart_Full_cell056.geometry} material={materials.Red} position={[0.025, -0.277, -0.101]} />
      <mesh geometry={nodes.Heart_Full_cell057.geometry} material={materials.Red} position={[-0.135, -0.292, 0.024]} />
      <mesh geometry={nodes.Heart_Full_cell058.geometry} material={materials.Red} position={[0.386, 0.066, -0.103]} />
      <mesh geometry={nodes.Heart_Full_cell059.geometry} material={materials.Red} position={[0.344, 0.127, 0.093]} />
      <mesh geometry={nodes.Heart_Full_cell060.geometry} material={materials.Red} position={[-0.043, -0.152, -0.142]} />
      <mesh geometry={nodes.Heart_Full_cell061.geometry} material={materials.Red} position={[0.222, -0.253, -0.125]} />
      <mesh geometry={nodes.Heart_Full_cell062.geometry} material={materials.Red} position={[0.222, -0.259, 0.119]} />
      <mesh geometry={nodes.Heart_Full_cell063.geometry} material={materials.Red} position={[-0.003, 0, -0.2]} />
      <mesh geometry={nodes.Heart_Full_cell064.geometry} material={materials.Red} position={[0.269, 0.113, 0.158]} />
      <mesh geometry={nodes.Heart_Full_cell065.geometry} material={materials.Red} position={[0.08, -0.312, 0.197]} />
      <mesh geometry={nodes.Heart_Full_cell066.geometry} material={materials.Red} position={[-0.047, -0.406, 0.144]} />

      <mesh name="origin" geometry={nodes.origin.geometry} material={materials.Red} rotation={[-Math.PI / 2, 0, 0]} scale={100} />

    </group>
  )
}

useGLTF.preload('./heart.glb')
