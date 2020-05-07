const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema({
  user: {
    type: Object,
  },
  tournament: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Search = mongoose.model('Search', searchSchema);

module.exports = Search;
