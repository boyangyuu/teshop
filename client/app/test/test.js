'use strict';

angular.module('demoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('test', {
        title: 'Products administration (Add, Remove, Edit)',
        url: '/test',
        templateUrl: 'app/test/test.html',
        controller: 'kindeditorCtrl',
        authenticate: true
      });
  });
