const jwt = require('jsonwebtoken');
const User = require('../model/User');

module.exports = async function (request, response, next) {
  const token = request.header('auth-token');
  if (!token) return response.status(401).send('Access denied, sorry!');
  try {
    const { userId } = jwt.verify(token, process.env.TOKEN_SECRET);
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
