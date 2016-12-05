var mongoose = require('mongoose');
var crypto = require('crypto');

var RunSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  distance: Number,
  time: Number,
  exertion: { type: Number, min: 1, max: 10 },
  message: String,
  calories: Number,
});


var createSha = function (url) {
  var shasum = crypto.createHash('sha1');
  shasum.update(url);
  return shasum.digest('hex').slice(0, 5);
};

RunSchema.pre('save', function (next) {
  var code = createSha(this.url);
  this.code = code;
  next();
});

module.exports = mongoose.model('Run', RunSchema);
