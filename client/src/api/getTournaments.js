export async function getTournaments() {
  const response = await fetch('/api/dtfb/tournaments');
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  const fetchedTournaments = await response.json();
  const tournaments = fetchedTournaments;
  return tournaments;
}
