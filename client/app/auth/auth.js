angular.module('runkeeper.auth', [])

.controller('AuthController', function ($scope, $window, $location, $rootScope, Auth) {
  $scope.user = {};
  $window.username = $scope.user.username
  $scope.signin = function () {
    console.log("toEkMen: " + $window.username, $scope.user.username)
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.runkeeper', token);
        $window.localStorage.setItem('username', $scope.user.username);
        $location.path('/myprofile');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.runkeeper', token);
        $location.path('/myprofile');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
