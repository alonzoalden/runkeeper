angular.module('runkeeper.myprofile', [])

.controller('MyProfileController', function ($scope, MyProfile) {
  // Your code here

  $scope.data = {};
  $scope.data.totalPoints = 0;

  $scope.data.runs.forEach(function(run) {
    $scope.data.totalPoints += run.exertion
  })

  console.log($scope.data.totalPoints)
  var initializeRuns = function () {
    MyProfile.getAll()
      .then(function (runs) {
        $scope.data.runs = runs;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeRuns();
  });
