import React from 'react';
import postSearch from '../api/postSearch';

export default function usePostSearch() {
  const [search, setSearch] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

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
