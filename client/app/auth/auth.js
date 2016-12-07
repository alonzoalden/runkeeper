// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('runkeeper.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.bgimg = "http://cdn.videos.thenorthface.com/84cncwMjrtfWLDl9_cIL9M0H2tcGyx3A/promo128033784";
  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
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
