import React from 'react';
import postSearch from '../api/postSearch';

export default function usePost() {
  const [search, setSearch] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  async function doPostSearch(tournament, user) {
    try {
      const search = await postSearch(tournament, user);
      setSearch(search);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    doPostSearch();
  }, []);

  return [{ search, error, loading }, doPostSearch];
}
