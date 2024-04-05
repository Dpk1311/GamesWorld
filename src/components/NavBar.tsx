import { HStack , Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px    '>
      <Image
        src="https://img.freepik.com/premium-vector/game-world-vector-logo-design_825834-5394.jpg"
        boxSize={"50px"}
      ></Image>
      <ColorModeSwitch/> 
    </HStack>
  );
};

export default NavBar;
