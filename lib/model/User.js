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
      name: 'player',
      img:
        'https://dtfb.de/images/sportsmanager/spieler/IwT1469644049W180H240.png',
    },
  },
});

module.exports = mongoose.model('User', userSchema);
