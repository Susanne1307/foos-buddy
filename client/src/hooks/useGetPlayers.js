import { useState, useEffect } from 'react';
import { getPlayers } from '../api/getPlayers';

export function useGetPlayers() {
  const [players, setPlayers] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function doGetPlayers() {
    try {
      setLoading(true);
      setError(false);
      const players = await getPlayers();
      setPlayers(players);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    doGetPlayers();
  }, []);
  return [{ players, error, loading }];
}
