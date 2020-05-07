export async function getSearches() {
  const response = await fetch('/api/search');
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const searches = await response.json();
  return searches;
}
