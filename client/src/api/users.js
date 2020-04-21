async function createUser(user) {
  const response = await fetch('/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const createdUser = await response.json();
  return createdUser;
}

export default createUser;
