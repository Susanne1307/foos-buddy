const jwt = require('jsonwebtoken');

module.exports = function (request, response, next) {
  const token = request.header('auth-token');
  if (!token) return response.status(401).send('Access denied, sorry!');
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    request.user = verified;
    next();
  } catch (error) {
    response.status(400).send('Invalid token');
  }
};
