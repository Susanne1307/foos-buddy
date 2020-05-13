import { useState } from 'react';
import postSearch from '../api/postSearch';

export default function usePostSearch() {
  const [search, setSearch] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function doPostSearch(user, tournament, discipline, position, message) {
    try {
      const search = await postSearch(
        user,
        tournament,
        discipline,
        position,
        message
      );
      setSearch(search);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return [{ search, error, loading }, doPostSearch];
}
