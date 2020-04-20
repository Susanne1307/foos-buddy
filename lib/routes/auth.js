const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const { registerValidation } = require('../routes/validation');

router.post('/register', async (request, response) => {
  const { error } = registerValidation(request.body);
  if (error) return response.status(400).send(error.details[0].message);

  const emailExists = await User.findOne({ email: request.body.email });
  if (emailExists)
    return response.status(400).send('Sorry, email already exists 😕');

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(request.body.password, salt);

  const user = new User({
    name: request.body.name,
    email: request.body.email,
    password: hashedPassword,
  });
  try {
    response.send({ user: user._id });
  } catch (error) {
    response.status(400).send(error);
  }
});

module.exports = router;
