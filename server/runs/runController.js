var Q = require('q');
var util = require('../config/utils.js');
var Run = require('./runModel.js');


//using q to promisify mongoose methods
var findRun = Q.nbind(Run.findOne, Run);
var createRun = Q.nbind(Run.create, Run);
var findAllRuns = Q.nbind(Run.find, Run);

module.exports = {

  allRuns: function (req, res, next) {

    findAllRuns({})
      .then(function (runs) {
        res.json(runs)
      })
      .fail(function (error) {
        next(error);
      });
  },

  addRun: function (req, res, next) {

    var totalCals = util.calorieCalc;

    var newRun = {
      date: req.body.date,
      distance: req.body.distance,
      time: req.body.time,
      exertion: req.body.exertion,
      message: req.body.message,
      calories: totalCals,
    }

    createRun(newRun)
      .then(function (createdRun) {
        if (createdRun) {
          return res.json(createdRun);
        }
      })
      .fail(function (error) {
        next(error);
      });
  }

};