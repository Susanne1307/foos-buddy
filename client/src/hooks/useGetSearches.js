import { useState, useEffect } from 'react';
import { getSearches } from '../api/getSearches';

export function useGetSearches() {
  const [searches, setSearches] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    doGetSearches();
  }, []);
  return [{ searches, error, loading }];
}
