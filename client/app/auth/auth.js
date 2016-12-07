// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('runkeeper.auth', [])

.controller('AuthController', function ($scope, $window, $location, $rootScope, Auth) {
  $scope.user = {};
  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        console.log("toEkMen: " + token)
        $window.localStorage.setItem('com.runkeeper', token);
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
