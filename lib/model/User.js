const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 5,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  player: {
    type: Object,
    required: false,
    default: {
      name: null,
      img:
        'https://res.cloudinary.com/foosbuddy/image/upload/v1589232979/profile_example_npumpx.jpg',
    },
  },
});

module.exports = mongoose.model('User', userSchema);
