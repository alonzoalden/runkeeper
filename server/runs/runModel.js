var mongoose = require('mongoose');

var RunSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  distance: Number,
  time: Number,
  exertion: { type: Number, min: 1, max: 10 },
  message: String,
  calories: Number,
});

module.exports = mongoose.model('Run', RunSchema);
