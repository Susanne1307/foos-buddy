export async function getPlayers() {
  const responseNames = await fetch('/api/dtfb/players/names');
  if (responseNames.status !== 200) {
    throw new Error(responseNames.statusText);
  }
  const fetchedPlayerNames = await responseNames.json();
  const playerNames = fetchedPlayerNames;

  const responseImages = await fetch('/api/dtfb/players/images');
  if (responseImages.status !== 200) {
    throw new Error(responseImages.statusText);
  }
  const fetchedPlayerImages = await responseImages.json();
  const playerImages = fetchedPlayerImages;

  const players = playerImages.map((playerImage, i) => ({
    name: playerNames[i],
    img: playerImages[i],
  }));

  const getMapFromArray = (data) =>
    data.reduce((acc, item) => {
      acc[item.name] = { img: item.img };
      return acc;
    }, {});
  const modifiedPlayers = getMapFromArray(players);
  return modifiedPlayers;
  // let names = players.map((player) => ({ name: player.name }));
  // let images = players.map((player) => ({ img: player.img }));
}
