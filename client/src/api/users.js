export const createUser = async (user) => {
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
};

export const loginUser = async (user) => {
  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const loggedInUserToken = await response.text();
  localStorage.setItem('loggedInUserToken', loggedInUserToken);
  return loggedInUserToken;
};
