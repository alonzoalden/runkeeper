angular.module('runkeeper', [
  'runkeeper.services',
  'runkeeper.myprofile',
  'runkeeper.addrun',
  'runkeeper.auth',
  'ngRoute',
  'mgcrea.ngStrap',
  'mgcrea.ngStrap.navbar'

])
.config(function ($routeProvider, $httpProvider) {

  $routeProvider
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })

    .when('/myprofile', {
      templateUrl: 'app/myprofile/myprofile.html',
      controller: 'MyProfileController',
      authenticate: true
    })
    .when('/addrun', {
      templateUrl: 'app/addrun/addrun.html',
      controller: 'AddRunController',
      authenticate: true
    })
    .otherwise({
      redirectTo: '/myprofile'
    });

  $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.shortly');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
});
