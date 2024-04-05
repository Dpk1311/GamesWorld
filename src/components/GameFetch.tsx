import { SimpleGrid, Text } from "@chakra-ui/react";
import useGameFetch from "../hooks/useGameFetch";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameFetch = () => {
  const { err, games, isLoading } = useGameFetch();
  const Skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          Skeletons.map((Skeleton) => <GameCardSkeleton key={Skeleton} />
          )}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameFetch;
