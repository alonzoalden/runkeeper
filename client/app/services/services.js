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
      console.log('RESP: ' + JSON.stringify(resp))
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
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
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


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
