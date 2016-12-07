angular.module('runkeeper.services', [])

.factory('MyProfile', function ($http) {

  //CREATE GET USERNAME HERE
  //CREARE GET LAST RUN

  var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api/myprofile'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var addOne = function (run) {
    return $http({
      method: 'POST',
      url: '/api/myprofile',
      data: run
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
  })
.factory('Auth', function ($http, $location, $window) {
  var userName;
  var signin = function (user) {
    userName = user.username
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.runkeeper');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.runkeeper');
    $location.path('/signin');
  };


  var setUser = function() {
    return userName;
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout,
    setUser: setUser
  };
});
