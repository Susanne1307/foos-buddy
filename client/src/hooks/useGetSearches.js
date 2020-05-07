import React from 'react';
import { getSearches } from '../api/getSearches';

export function useGetSearches() {
  const [searches, setSearches] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  async function doGetSearches() {
    try {
      setLoading(true);
      setError(false);
      const searches = await getSearches();
      setSearches(searches);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    doGetSearches();
  }, []);
  return [{ searches, error, loading }];
}
