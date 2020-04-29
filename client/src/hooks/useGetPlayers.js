import React from 'react';
import { getPlayers } from '../api/getPlayers';

export function useGetPlayers() {
  const [players, setPlayers] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

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

  React.useEffect(() => {
    doGetPlayers();
  }, []);
  return [{ players, error, loading }];
}
