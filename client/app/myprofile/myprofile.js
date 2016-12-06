angular.module('runkeeper.myprofile', [])

.controller('MyProfileController', function ($scope, MyProfile) {
  // Your code here

  $scope.data = {};
  $scope.data.totalPoints = 0;
  $scope.data.totalDistance = 0;
  $scope.data.totalTime = 0;
  $scope.data.totalRuns = 0;
  $scope.data.motivation = "";

  var initializeRuns = function () {
    MyProfile.getAll()
      .then(function (runs) {
        $scope.data.runs = runs;
        return $scope.data.runs;
      })
      .then(function (runs) {
        runs.forEach(function(run) {
          $scope.data.totalPoints += run.exertion;
          $scope.data.totalRuns += 1;
          $scope.data.totalTime += run.time;
          $scope.data.totalDistance += run.distance;
        })
        if ($scope.data.totalPoints === 0) {
          $scope.data.motivation = "What are you waiting for? Let's start running!";
        } else {
          $scope.data.motivation = "Keep up the good work!";
        }

      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeRuns();
  });
