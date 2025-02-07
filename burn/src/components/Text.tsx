import { Center, Text3D } from "@react-three/drei";

const Text = () => {
  return (
    <>
      <Center>
        <Text3D
          font="./font.json"
          size={1}
          height={0.2}
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.02}
          castShadow
        >
          BURN
          <meshStandardMaterial color="red" />
        </Text3D>
      </Center>
    </>
  );
};

export default Text;
