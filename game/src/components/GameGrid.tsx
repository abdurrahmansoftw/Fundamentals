import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/userGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 5 }} padding={5} spacing={10}>
      {error && <p>{error}</p>}
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>
        ))}

      {data.map((game) => (
        <GameCardContainer>
          <GameCard key={game.id} game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
