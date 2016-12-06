angular.module('runkeeper.addrun', [])

.controller('AddRunController', function ($scope, $location, MyProfile) {
  // Your code here

  $scope.run = {};

  $scope.processRun = function () {
    console.log('HELLO')
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

  $scope.exertionButton = {
    "radio": 5
  }

  $scope.distance = {
    'message': 'message'
  }

  });
