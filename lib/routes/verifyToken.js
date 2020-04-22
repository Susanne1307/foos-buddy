const jwt = require('jsonwebtoken');
const User = require('../model/User');

module.exports = async function (request, response, next) {
  const accessToken = request.header('auth-token');
  if (!accessToken) return response.status(401).send('Access denied, sorry!');
  try {
    const { userId } = jwt.verify(accessToken, process.env.TOKEN_SECRET);
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    request.user = user;
    next();
  } catch (error) {
    response.status(400).send('Invalid token');
  }
};
