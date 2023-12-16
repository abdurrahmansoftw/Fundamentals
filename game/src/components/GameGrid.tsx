import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/userGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} padding={5} spacing={10}>
      {error && <p>{error}</p>}
      {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
