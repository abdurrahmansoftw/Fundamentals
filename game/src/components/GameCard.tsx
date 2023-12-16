import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/userGames';
import PlatformIconsList from './PlatformIconsList';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize='1xl'>{game.name}</Heading>
        <PlatformIconsList platforms={game.parent_platforms.map((p) => p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
