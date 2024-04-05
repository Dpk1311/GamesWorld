import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const GameCriticScore = ({ score }: Props) => {
    let color = score > 95 ? 'green' : score > 90 ? 'yellow' : '' 
  return <Badge colorScheme={color} fontSize={"14px"} borderRadius="4px" paddingX={2}>{score}</Badge>;
};

export default GameCriticScore;
