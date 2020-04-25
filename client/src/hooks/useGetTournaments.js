import React from 'react';
import { getTournaments } from '../api/getTournaments';

export default function useGetTournaments() {
  const [tournaments, setTournament] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

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

  React.useEffect(() => {
    doGetTournaments();
  }, []);

  return [{ tournaments, error, loading }];
}
