/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ./public/banana.glb -k 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useExplode } from '../hooks/useExplode';


export function Banana(props) {
  const { nodes, materials } = useGLTF('/banana.glb')

  const group = useRef();
  const easeOutCubic = (t) => (--t) * t * t + 1;
  useExplode(group, 4, 'origini_1', easeOutCubic);

  return (
    <group {...props} dispose={null} ref={group}>
      <group name="pasted__pCube11_group_cell" position={[-3.315, -20.252, 6.301]}>
        <mesh name="pasted__pCube11_group_cell039" geometry={nodes.pasted__pCube11_group_cell039.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell039_1" geometry={nodes.pasted__pCube11_group_cell039_1.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell001" position={[2.551, -20.001, 11.126]}>
        <mesh name="pasted__pCube11_group_cell040" geometry={nodes.pasted__pCube11_group_cell040.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell040_1" geometry={nodes.pasted__pCube11_group_cell040_1.geometry} material={materials.blinn2SG} />
      </group>
      <mesh name="pasted__pCube11_group_cell002" geometry={nodes.pasted__pCube11_group_cell002.geometry} material={materials.blinn10SG} position={[0, 36.167, 22.978]} />
      <group name="pasted__pCube11_group_cell003" position={[-3.796, 2.508, 4.567]}>
        <mesh name="pasted__pCube11_group_cell002_1" geometry={nodes.pasted__pCube11_group_cell002_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell002_2" geometry={nodes.pasted__pCube11_group_cell002_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell004" position={[-0.743, 34.354, 19.654]}>
        <mesh name="pasted__pCube11_group_cell003_1" geometry={nodes.pasted__pCube11_group_cell003_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell003_2" geometry={nodes.pasted__pCube11_group_cell003_2.geometry} material={materials.blinn2SG} />
      </group>
      <mesh name="pasted__pCube11_group_cell005" geometry={nodes.pasted__pCube11_group_cell005.geometry} material={materials.blinn10SG} position={[0.685, 36.249, 21.915]} />
      <group name="pasted__pCube11_group_cell006" position={[0.698, 34.328, 19.531]}>
        <mesh name="pasted__pCube11_group_cell005_1" geometry={nodes.pasted__pCube11_group_cell005_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell005_2" geometry={nodes.pasted__pCube11_group_cell005_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell007" position={[-3.651, 2.739, -1.165]}>
        <mesh name="pasted__pCube11_group_cell006_1" geometry={nodes.pasted__pCube11_group_cell006_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell006_2" geometry={nodes.pasted__pCube11_group_cell006_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell008" position={[1.386, -24.443, 13.988]}>
        <mesh name="pasted__pCube11_group_cell007_1" geometry={nodes.pasted__pCube11_group_cell007_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell007_2" geometry={nodes.pasted__pCube11_group_cell007_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell009" position={[-2.581, 28.105, 8.54]}>
        <mesh name="pasted__pCube11_group_cell008_1" geometry={nodes.pasted__pCube11_group_cell008_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell008_2" geometry={nodes.pasted__pCube11_group_cell008_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell010" position={[-3.304, 14.54, 6.042]}>
        <mesh name="pasted__pCube11_group_cell009_1" geometry={nodes.pasted__pCube11_group_cell009_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell009_2" geometry={nodes.pasted__pCube11_group_cell009_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell011" position={[2.55, 25.323, 11.623]}>
        <mesh name="pasted__pCube11_group_cell010_1" geometry={nodes.pasted__pCube11_group_cell010_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell010_2" geometry={nodes.pasted__pCube11_group_cell010_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell012" position={[1.274, 29.845, 16.333]}>
        <mesh name="pasted__pCube11_group_cell011_1" geometry={nodes.pasted__pCube11_group_cell011_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell011_2" geometry={nodes.pasted__pCube11_group_cell011_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell013" position={[0.698, 32.829, 19.664]}>
        <mesh name="pasted__pCube11_group_cell012_1" geometry={nodes.pasted__pCube11_group_cell012_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell012_2" geometry={nodes.pasted__pCube11_group_cell012_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell014" position={[3.167, -20.463, 6.327]}>
        <mesh name="pasted__pCube11_group_cell013_1" geometry={nodes.pasted__pCube11_group_cell013_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell013_2" geometry={nodes.pasted__pCube11_group_cell013_2.geometry} material={materials.blinn2SG} />
      </group>
      <mesh name="pasted__pCube11_group_cell015" geometry={nodes.pasted__pCube11_group_cell015.geometry} material={materials.blinn10SG} position={[-0.772, 34.986, 22.331]} />
      <group name="pasted__pCube11_group_cell016" position={[1.201, 31.456, 15.185]}>
        <mesh name="pasted__pCube11_group_cell015_1" geometry={nodes.pasted__pCube11_group_cell015_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell015_2" geometry={nodes.pasted__pCube11_group_cell015_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell017" position={[3.605, 2.104, 4.958]}>
        <mesh name="pasted__pCube11_group_cell016_1" geometry={nodes.pasted__pCube11_group_cell016_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell016_2" geometry={nodes.pasted__pCube11_group_cell016_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell018" position={[-0.698, 32.829, 19.664]}>
        <mesh name="pasted__pCube11_group_cell017_1" geometry={nodes.pasted__pCube11_group_cell017_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell017_2" geometry={nodes.pasted__pCube11_group_cell017_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell019" position={[-2.498, 25.19, 11.555]}>
        <mesh name="pasted__pCube11_group_cell018_1" geometry={nodes.pasted__pCube11_group_cell018_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell018_2" geometry={nodes.pasted__pCube11_group_cell018_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell020" position={[-1.386, -24.443, 13.988]}>
        <mesh name="pasted__pCube11_group_cell019_1" geometry={nodes.pasted__pCube11_group_cell019_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell019_2" geometry={nodes.pasted__pCube11_group_cell019_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell021" position={[2.581, 28.105, 8.54]}>
        <mesh name="pasted__pCube11_group_cell020_1" geometry={nodes.pasted__pCube11_group_cell020_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell020_2" geometry={nodes.pasted__pCube11_group_cell020_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell022" position={[-3.442, -10.161, 5.546]}>
        <mesh name="pasted__pCube11_group_cell021_1" geometry={nodes.pasted__pCube11_group_cell021_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell021_2" geometry={nodes.pasted__pCube11_group_cell021_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell023" position={[1.931, -24.507, 10.945]}>
        <mesh name="pasted__pCube11_group_cell022_1" geometry={nodes.pasted__pCube11_group_cell022_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell022_2" geometry={nodes.pasted__pCube11_group_cell022_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell024" position={[1.175, -26.841, 13.34]}>
        <mesh name="pasted__pCube11_group_cell023_1" geometry={nodes.pasted__pCube11_group_cell023_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell023_2" geometry={nodes.pasted__pCube11_group_cell023_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell025" position={[3.442, -10.161, 5.546]}>
        <mesh name="pasted__pCube11_group_cell024_1" geometry={nodes.pasted__pCube11_group_cell024_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell024_2" geometry={nodes.pasted__pCube11_group_cell024_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell026" position={[3.488, 2.42, -1.329]}>
        <mesh name="pasted__pCube11_group_cell025_1" geometry={nodes.pasted__pCube11_group_cell025_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell025_2" geometry={nodes.pasted__pCube11_group_cell025_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell027" position={[-1.931, -24.507, 10.945]}>
        <mesh name="pasted__pCube11_group_cell026_1" geometry={nodes.pasted__pCube11_group_cell026_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell026_2" geometry={nodes.pasted__pCube11_group_cell026_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell028" position={[3.478, 14.544, 5.902]}>
        <mesh name="pasted__pCube11_group_cell027_1" geometry={nodes.pasted__pCube11_group_cell027_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell027_2" geometry={nodes.pasted__pCube11_group_cell027_2.geometry} material={materials.blinn2SG} />
      </group>
      <mesh name="pasted__pCube11_group_cell029" geometry={nodes.pasted__pCube11_group_cell029.geometry} material={materials.blinn10SG} position={[0.683, 35.014, 22.487]} />
      <mesh name="pasted__pCube11_group_cell030" geometry={nodes.pasted__pCube11_group_cell030.geometry} material={materials.blinn10SG} position={[-0.635, 36.265, 21.833]} />
      <group name="pasted__pCube11_group_cell031" position={[-3.875, -12.849, 1.134]}>
        <mesh name="pasted__pCube11_group_cell030_1" geometry={nodes.pasted__pCube11_group_cell030_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell030_2" geometry={nodes.pasted__pCube11_group_cell030_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell032" position={[-2.961, 19.802, 2.148]}>
        <mesh name="pasted__pCube11_group_cell031_1" geometry={nodes.pasted__pCube11_group_cell031_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell031_2" geometry={nodes.pasted__pCube11_group_cell031_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell033" position={[3.875, -12.849, 1.135]}>
        <mesh name="pasted__pCube11_group_cell032_1" geometry={nodes.pasted__pCube11_group_cell032_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell032_2" geometry={nodes.pasted__pCube11_group_cell032_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell034" position={[-1.274, 29.845, 16.333]}>
        <mesh name="pasted__pCube11_group_cell033_1" geometry={nodes.pasted__pCube11_group_cell033_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell033_2" geometry={nodes.pasted__pCube11_group_cell033_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell035" position={[-2.552, -20.001, 11.125]}>
        <mesh name="pasted__pCube11_group_cell034_1" geometry={nodes.pasted__pCube11_group_cell034_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell034_2" geometry={nodes.pasted__pCube11_group_cell034_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell036" position={[3.403, 19.011, 2.092]}>
        <mesh name="pasted__pCube11_group_cell035_1" geometry={nodes.pasted__pCube11_group_cell035_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell035_2" geometry={nodes.pasted__pCube11_group_cell035_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell037" position={[-1.202, 31.441, 15.185]}>
        <mesh name="pasted__pCube11_group_cell036_1" geometry={nodes.pasted__pCube11_group_cell036_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell036_2" geometry={nodes.pasted__pCube11_group_cell036_2.geometry} material={materials.blinn2SG} />
      </group>
      <group name="pasted__pCube11_group_cell038" position={[-1.175, -26.841, 13.34]}>
        <mesh name="pasted__pCube11_group_cell037_1" geometry={nodes.pasted__pCube11_group_cell037_1.geometry} material={materials.blinn10SG} />
        <mesh name="pasted__pCube11_group_cell037_2" geometry={nodes.pasted__pCube11_group_cell037_2.geometry} material={materials.blinn2SG} />
      </group>
      <mesh name="origini" geometry={nodes.origini.geometry} material={materials.blinn10SG} />
      <mesh name="origini_1" geometry={nodes.origini_1.geometry} material={materials.blinn2SG} />
    </group>
  )
}

useGLTF.preload('./banana.glb')
