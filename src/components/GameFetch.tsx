import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../services/apiClient";

interface Game {
  id: number;
  name: string;
}

interface GameFetch {
  count: number;
  results: Game[];
}

const GameFetch = () => {
  const [games, setgames] = useState<Game[]>([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    apiClient
      .get<GameFetch>("/games")
      .then((res) => setgames(res.data.results))
      .catch((err) => setErr(err.message));
  });

  return (
    <>
      {err && <Text>{err}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameFetch;
