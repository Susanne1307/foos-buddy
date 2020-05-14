import { useState } from 'react';
import { patchUser } from '../api/users';

export default function usePatchUser() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function doPatchUser(userId, player) {
    try {
      setLoading(true);
      const selectedPlayer = await patchUser(userId, player);
      setSelectedPlayer(selectedPlayer);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return [{ selectedPlayer, error, loading }, doPatchUser];
}
