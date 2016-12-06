angular.module('runkeeper.myprofile', [])

.controller('MyProfileController', function ($scope, MyProfile) {
  // Your code here

  $scope.data = {};
  console.log($scope.data)
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
