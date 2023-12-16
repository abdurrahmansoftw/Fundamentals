import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImgUrl from '../services/image-url';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <List>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              alt={genre.name}
              borderRadius='full'
              boxSize='50px'
              objectFit='cover'
              src={getCroppedImgUrl(genre.image_background)}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
