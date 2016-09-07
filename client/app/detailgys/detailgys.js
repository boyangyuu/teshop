'use strict';
angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('detailgys', {
        title: '供应商',
        url: '/detailgys',
        templateUrl: 'app/detailgys/detailgys.html',
        controller: 'detailgysCtrl',
        authenticate: true,
        params:{
                obj:null
         }
      });
  });
