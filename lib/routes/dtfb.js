const router = require('express').Router();
const fetch = require('node-fetch');

async function getTournamentDates() {
  const result = await fetch('https://dtfb.de/index.php/termine');
  const html = await result.text();
  var reg = new RegExp(/(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.\s/g);
  const tournamentDates = html.match(reg);
  return tournamentDates;
}
getTournamentDates();

async function getTournamentNames() {
  const result = await fetch('https://dtfb.de/index.php/termine');
  const html = await result.text();
  var reg = new RegExp(/(?<=wrap>\s)([^<]+)(?=\s<[br|/td])/g);
  const tournamentNames = html.match(reg);
  const cleanedTournamentNames = tournamentNames
    .filter((tournamentNames) => tournamentNames)
    .map((tournamentNames) => {
      return tournamentNames.trim();
    });
  // eslint-disable-next-line no-unused-vars
  const removeEntries = cleanedTournamentNames.splice(0, 4);
  return cleanedTournamentNames;
}
getTournamentNames();

async function getTournamentLocations() {
  const result = await fetch('https://dtfb.de/index.php/termine');
  const html = await result.text();
  var reg = new RegExp(/(?<=\s<td nowrap>)(.*)(?=<\/td>[\s]{2,}<td nowrap>)/g);
  const tournamentLocations = html.match(reg);
  const cleanedTournamentLocations = tournamentLocations.map(
    (tournamentLocations) => {
      return (
        tournamentLocations
          // enable äöüß
          .split('&uuml;')
          .join('ü')
          .split('&szlig;')
          .join('ß')
          .split('&auml;')
          .join('ä')
          .split('&ouml;')
          .join('ö')
      );
    }
  );
  return cleanedTournamentLocations;
}
getTournamentLocations();

router.get('/tournaments', async (request, response) => {
  try {
    const tournamentDates = await getTournamentDates();
    const tournamentNames = await getTournamentNames();
    const tournamentLocations = await getTournamentLocations();
    const newTournaments = tournamentDates.map(function (value, index) {
      return (
        value + tournamentNames[index] + (', ' + tournamentLocations[index])
      );
    });
    return response.json(newTournaments);
  } catch (error) {
    console.error(error);
    return response.status(404).end('Error');
  }
});

async function getPlayerNames() {
  const result = await fetch(
    'https://dtfb.de/index.php/ranglisten?task=rangliste&id=146'
  );
  const html = await result.text();
  var reg = new RegExp(
    /(?!=>)(\s+)?[a-zA-Z\x7f-\xff&;]{2,}([-|\s][a-zA-Z\x7f-\xff&;]{2,})?,\s[a-zA-Z\x7f-\xff&;]{2,}([-|\s][a-zA-Z\x7f-\xff&;]{1,}.)?(\s+)?(?=<)/gi
  );
  const playerNames = html.match(reg);
  const cleanedPlayerNames = playerNames.map((playerNames) => {
    return (
      playerNames
        // enable äöüß within names
        .split('&uuml;')
        .join('ü')
        .split('&szlig;')
        .join('ß')
        .split('&auml;')
        .join('ä')
        .split('&ouml;')
        .join('ö')
    );
  });
  return cleanedPlayerNames;
}

async function getPlayerImages() {
  const result = await fetch(
    'https://dtfb.de/index.php/ranglisten?task=rangliste&id=146'
  );
  const html = await result.text();
  var reg = new RegExp(/\bhttps?:[^)''"]+\.(?:jpg|jpeg|gif|png)/gi);
  const playerImg = html.match(reg);
  const cleanedPlayerImages = playerImg.map((playerImg) => {
    // resize fetched images
    return playerImg.split('W57H76').join('W180H240');
  });
  return cleanedPlayerImages;
}

router.get('/players', async (request, response) => {
  try {
    const playerNames = await getPlayerNames();
    const playerImages = await getPlayerImages();

    const players = playerImages.map((playerImage, i) => ({
      name: playerNames[i],
      img: playerImages[i],
    }));
    console.log(players);
    return response.json(players);
  } catch (error) {
    console.error(error);
    return response.status(404).end('Error');
  }
});

module.exports = router;
