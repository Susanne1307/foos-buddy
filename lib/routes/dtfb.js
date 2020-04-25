const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/tournaments', async (request, response) => {
  try {
    const result = await fetch('https://dtfb.de/index.php/termine');
    const html = await result.text();
    const name = html.match(/(?!=wrap>\s)(.*)(?=\s<br)/g);
    const cleanedName = name
      .filter((name) => name)
      .map((name) => {
        return name.trim();
      });
    return response.json(cleanedName);
  } catch (error) {
    console.error(error);
    return response.status(404).end('Error');
  }
});

module.exports = router;

// date: html.match(/(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.\s/g)
// name: html.match(/(?!=wrap>\s)(.*)(?=\s<br)/g)
// location: html.match(/(?<=wrap>)(.*)(?=<\/td)/g)
