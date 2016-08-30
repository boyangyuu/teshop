'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('country', {
        title: 'All Shipping Countries ',
        url: '/country',
        templateUrl: 'app/country/country.html',
        controller: 'CountryCtrl'
      });
  });
