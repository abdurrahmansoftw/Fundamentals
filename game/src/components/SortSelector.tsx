import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

interface Props {
  onSelectedSort: (sort: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectedSort, sortOrder }: Props) => {
  const sortOrders = [
    { value: '', label: 'Relevent' },
    { value: '-added', label: 'Date Added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
  ];

  const currentSortOrder = sortOrders.find((sort) => sort.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button}>Order By: {currentSortOrder?.label || 'Relevent'}</MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem onClick={() => onSelectedSort(sortOrder.value)} key={sortOrder.value}>
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
