import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface GameFetch {
  count: number;
  results: Game[];
}

const useGameFetch = () => {
  const [games, setgames] = useState<Game[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<GameFetch>("/games", { signal: controller.signal })
      .then((res) => {
        setgames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { err, games, isLoading };
};

export default useGameFetch;
