export async function getPlayers() {
  const response = await fetch('/api/dtfb/players');
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const players = await response.json();
  return players;
}
