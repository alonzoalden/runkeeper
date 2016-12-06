angular.module('runkeeper.myprofile', [])

.controller('MyProfileController', function ($scope, MyProfile) {
  // Your code here

  $scope.data = {};
  $scope.data.totalPoints = 0;
  $scope.data.totalDistance = 0;
  $scope.data.totalTime = 0;
  $scope.data.totalRuns = 0;

  console.log($scope.data.totalPoints)
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
        console.log($scope.data.totalPoints);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeRuns();
  });
