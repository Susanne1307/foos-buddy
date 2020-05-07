const router = require('express').Router();
const Search = require('../model/Search');

router.post('/', (request, response) => {
  try {
    const tournament = request.body.tournament;
    const user = request.body.user;

    const newSearch = new Search({
      tournament,
      user,
    });

    newSearch.save();
    response.send(newSearch);
  } catch (error) {
    response.status(500).json(error);
  }
});

router.get('/', async (request, response) => {
  try {
    const searches = await Search.find();
    response.send(searches);
  } catch (error) {
    response.send(error);
  }
});

module.exports = router;
