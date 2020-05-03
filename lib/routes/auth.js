const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../routes/validation');

router.post('/register', async (request, response) => {
  const { email, password } = request.body;
  const { error } = registerValidation(request.body);

  if (error) return response.status(403).send(error.message);

  const emailExists = await User.findOne({ email: email });
  if (emailExists)
    return response.status(400).send('Sorry, email already exists 😕');

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    email: email,
    password: hashedPassword,
  });
  user.save();
  try {
    response.send({ userId: user._id });
  } catch (error) {
    response.status(400).send(error);
  }
});

router.post('/login', async (request, response) => {
  const { email, password } = request.body;
  const { error } = loginValidation(request.body);

  if (error) return response.status(403).send(error.message);

  const user = await User.findOne({ email: email });
  if (!user) return response.status(400).send('Email does not exist 😮');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return response.status(400).send('Invalid password!');

  const accessToken = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET);
  response.send(accessToken);
});

module.exports = router;
