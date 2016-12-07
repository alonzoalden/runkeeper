angular.module('runkeeper.myprofile', [])

.controller('MyProfileController', function ($scope, $window, MyProfile, Auth) {

  $scope.data = {};
  $scope.data.totalPoints = 0;
  $scope.data.totalDistance = 0;
  $scope.data.totalTime = 0;
  $scope.data.totalRuns = 0;
  $scope.data.motivation = "";

  $scope.data.username = $window.localStorage.getItem('username')


  var initializeRuns = function () {
    MyProfile.getAll()
      .then(function (runs) {
        console.log($scope.data.username)
        $scope.data.runs = runs;
        return $scope.data.runs;
      })
      .then(function (runs) {
        runs.forEach(function(run) {
          run.date = run.date.toString().slice(0, 10);
          run.points = Math.ceil((run.exertion * run.distance * run.time) * .005);
          $scope.data.totalPoints += Math.ceil((run.exertion * run.distance * run.time) * .005);
          $scope.data.totalRuns += 1;
          $scope.data.totalTime += run.time;
          $scope.data.totalDistance += run.distance;
        })
        if ($scope.data.totalRuns === 0) {
          $scope.data.motivation = "What are you waiting for? Let's start running!";
        } else if ($scope.data.totalRuns === 1) {
          $scope.data.motivation = "You're almost there!";
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
