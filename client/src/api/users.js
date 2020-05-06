export const createUser = async (user) => {
  const response = await fetch('/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
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
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const loggedInUserToken = await response.text();
  localStorage.setItem('loggedInUserToken', loggedInUserToken);
  return loggedInUserToken;
};

export async function getAllUsers() {
  const response = await fetch(`/api/users`, {
    method: 'GET',
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const users = await response.json();
  return users;
}

export async function getUser(userId) {
  const response = await fetch(`/api/users/${userId}`, {
    method: 'GET',
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const user = await response.json();
  return user;
}

export async function patchUser(userId, player) {
  const response = await fetch(`/api/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ player }),
  });
  const updatedUser = await response.text();
  return updatedUser;
}
