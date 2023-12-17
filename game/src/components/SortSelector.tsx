import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button}>Order By: Relevent</MenuButton>
      <MenuList>
        <MenuItem>Relevent</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release Date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
