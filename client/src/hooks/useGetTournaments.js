import { useState, useEffect } from 'react';
import { getTournaments } from '../api/getTournaments';

export default function useGetTournaments() {
  const [tournaments, setTournament] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function doGetTournaments() {
    try {
      setLoading(true);
      setError(false);
      const tournaments = await getTournaments();
      setTournament(tournaments);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    doGetTournaments();
  }, []);

  return [{ tournaments, error, loading }];
}
