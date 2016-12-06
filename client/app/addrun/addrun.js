angular.module('runkeeper.addrun', [])

.controller('AddRunController', function ($scope, $location, MyProfile) {
  // Your code here

  $scope.run = {};
  $scope.run.exertion = 5;
  $scope.tooltip = 'HELLLOOO';
  $scope.processRun = function () {
    $scope.loading = true;
    MyProfile.addOne($scope.run)
      .then(function () {
        $scope.loading = false;
        $location.path('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  });
