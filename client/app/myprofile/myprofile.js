angular.module('runkeeper.myprofile', [])

.controller('MyProfileController', function ($scope, MyProfile) {
  // Your code here

  $scope.data = {};
  var initializeRuns = function () {
    MyProfile.getAll()
      .then(function (runs) {
        $scope.data.runs = runs;
  console.log($scope.data.runs.exertion[0])
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeRuns();
  });
