'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('store', {
        title: 'Add, Remove, Edit stores',
        url: '/store',
        templateUrl: 'app/store/store.html',
        controller: 'StoreCtrl',
        authenticate: true
      });
  });
