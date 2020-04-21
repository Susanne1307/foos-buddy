const router = require('express').Router();
const verifyToken = require('./verifyToken');

router.get('/', verifyToken, (request, response) => {
  response.send(request.user);
});
module.exports = router;
