'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('administration', {
        title: '用户管理',
        url: '/administration',
        templateUrl: 'app/administration/administration.html',
        controller: 'administrationCtrl',
        authenticate: true
      });
  });