import React from 'react';
import { getUser } from '../api/users';

export default function useGetUserById(userId) {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function doGetUserById() {
      try {
        setLoading(true);
        setError(false);
        const user = await getUser(userId);
        setUser(user);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    doGetUserById();
  }, [userId]);

  return [{ user, error, loading }];
}
