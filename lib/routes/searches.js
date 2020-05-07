const router = require('express').Router();
const Search = require('../model/Search');

router.post('/', (request, response) => {
  const tournament = request.body.tournament;
  const user = request.body.user;

  const newSearch = new Search({
    tournament,
    user,
  });

  newSearch
    .save()
    .then((newSearch) => response.json(newSearch))
    .catch((err) => response.json('Error:' + err));
});

router.get('/', async (request, response) => {
  try {
    const searches = await Search.find();
    response.send(searches);
  } catch (error) {
    response.send(error);
  }
});

router.delete('/:id', (request, response) => {
  Search.findByIdAndRemove({ _id: request.params.id })
    .then((search) => response.json(search))
    .catch((err) => response.json('Error:' + err));
});

module.exports = router;
