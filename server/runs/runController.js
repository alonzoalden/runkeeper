var Q = require('q');
var util = require('../config/utils.js');
var Link = require('./linkModel.js');


//using q to promisify mongoose methods
var findRun = Q.nbind(Link.findOne, Run);
var createRun = Q.nbind(Link.create, Run);
var findAllRuns = Q.nbind(Link.find, Run);

module.exports = {

  allRuns: functon(req, res, next) {
    findAllRuns({})
      .then(function (runs) {
        res.json(runs)
      })
      .fail(function (error) {
        next(error);
      });
  },

  addRun: function (req, res, next) {

    var calorieCalc = util.calorieCalc;

    var newRun = {
      date: req.body.date,
      distance: req.body.distance,
      time: req.body.time,
      exertion: req.body.exertion,
      message: req.body.message,
      calories: Number,
    }


    createRun(req)
  }

};