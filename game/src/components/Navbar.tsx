import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorMoodSwitch from './ColorMoodSwitch';

const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' />
      <ColorMoodSwitch />
    </HStack>
  );
};

export default Navbar;
