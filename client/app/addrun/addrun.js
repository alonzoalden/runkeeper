angular.module('runkeeper.addrun', [])

.controller('AddRunController', function ($scope, $location, MyProfile) {
  // Your code here

  $scope.run = {};
  $scope.run.exertion = 5;
  $scope.tooltipTime = 'Enter the total amount of minutes you\'ve ran.';
  $scope.tooltipNotes = 'Enter any notes or messages you may want to record.';
  $scope.tooltipDistance = 'Enter your total distance ran in miles. Decimals are OK.';
  $scope.tooltipExertion = 'This is your perceived level of exertion. 1 Being low and 10 being maximum. 1 would be the equivilent to a casual walk and ten would be similar to a race.';

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
