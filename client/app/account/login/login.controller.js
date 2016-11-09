'use strict';

angular.module('shopnxApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window) {
    // $scope.user = {email:'admin@codenx.com', password: 'codenx'};
    $scope.user = {email:'13165508732@163.com', password: '123'};
    // $scope.user = {email:'user@codenx.com', password: 'codenx'};

    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to the page with requested a login
          Auth.redirectToAttemptedUrl();
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
