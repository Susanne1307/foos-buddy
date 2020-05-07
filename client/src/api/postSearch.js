export const postSearch = async (
  user,
  tournament,
  discipline,
  position,
  message
) => {
  const response = await fetch('/api/searches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, tournament, discipline, position, message }),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const createdSearch = await response.json();
  return createdSearch;
};

export default postSearch;
