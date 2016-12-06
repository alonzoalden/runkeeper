angular.module('runkeeper.myprofile', [])

.controller('MyProfileController', function ($scope, MyProfile) {
  // Your code here

  $scope.data = {};
  $scope.data.totalPoints = 0;


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
        })
        $scope.data.totalPoints
        console.log(runs);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeRuns();
  });
