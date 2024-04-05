import { Game } from "../hooks/useGameFetch";
import { Card, CardBody, HStack, Heading, Image,Text } from "@chakra-ui/react";
import PlatformItemList from "./PlatformItemList";
import GameCriticScore from "./GameCriticScore";
import getImageCroppedUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={getImageCroppedUrl(game.background_image)} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
           <HStack justify='space-between'>
           <PlatformItemList  platforms={game.parent_platforms.map(p=> p.platform)} />
           <GameCriticScore score={game.metacritic} />
           </HStack>
        </CardBody>
    </Card>
  )
};
 
export default GameCard;
