const router = require('express').Router();
const Search = require('../model/Search');

router.post('/', (request, response) => {
  try {
    const { user, tournament, discipline, position, message } = request.body;
    const newSearch = new Search({
      user,
      tournament,
      discipline,
      position,
      message,
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
