const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/tournaments', async (request, response) => {
  try {
    const result = await fetch('https://dtfb.de/index.php/termine');
    const html = await result.text();
    const tournamentNames = html.match(/(?!=wrap>\s)(.+)(?=\s<br)/g);
    const cleanedTournamentNames = tournamentNames
      .filter((tournamentNames) => tournamentNames)
      .map((tournamentNames) => {
        return tournamentNames.trim();
      });
    return response.json(cleanedTournamentNames);
  } catch (error) {
    console.error(error);
    return response.status(404).end('Error');
  }
});

// date: html.match(/(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.\s/g)
// name: html.match(/(?!=wrap>\s)(.*)(?=\s<br)/g)
// location: html.match(/(?<=wrap>)(.*)(?=<\/td)/g)

router.get('/players/names', async (request, response) => {
  try {
    const result = await fetch(
      'https://dtfb.de/index.php/ranglisten?task=rangliste&id=146'
    );
    const html = await result.text();
    const playerNames = html.match(
      /(?!=>)(\s+)?[a-zA-Z\x7f-\xff&;]{2,}([-|\s][a-zA-Z\x7f-\xff&;]{2,})?,\s[a-zA-Z\x7f-\xff&;]{2,}([-|\s][a-zA-Z\x7f-\xff&;]{1,}.)?(\s+)?(?=<)/gi
    );
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
    return response.json(cleanedPlayerNames);
  } catch (error) {
    console.error(error);
    return response.status(404).end('Error');
  }
});

router.get('/players/images', async (request, response) => {
  try {
    const result = await fetch(
      'https://dtfb.de/index.php/ranglisten?task=rangliste&id=146'
    );
    const html = await result.text();
    const playerImg = html.match(/\bhttps?:[^)''"]+\.(?:jpg|jpeg|gif|png)/gi);
    const cleanedPlayerImages = playerImg.map((playerImg) => {
      // resize fetched images
      return playerImg.split('W57H76').join('W180H240');
    });
    return response.json(cleanedPlayerImages);
  } catch (error) {
    console.error(error);
    return response.status(404).end('Error');
  }
});

module.exports = router;
