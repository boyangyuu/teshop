'use strict';

angular.module('shopnxApp')
  .controller('SettingsCtrl', function ($scope, User, Auth, Settings, toastr) {
    $scope.errors = {};

    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        if(Settings.demo){
          toastr.error('We should not change password of an demo item');
          return;
        }
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		};
  });
