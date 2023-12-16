import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/userGames';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} padding={5} spacing={10}>
      {error && <p>{error}</p>}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
