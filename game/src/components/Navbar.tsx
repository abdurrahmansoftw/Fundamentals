import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorMoodSwitch from './ColorMoodSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (search: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' />
      <SearchInput onSearch={onSearch} />
      <ColorMoodSwitch />
    </HStack>
  );
};

export default Navbar;
