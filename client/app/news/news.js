'use strict';

angular.module('shopnxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('news', {
        title: 'Shop Settings - news ',
        url: '/news',
        templateUrl: 'app/news/newsList/news.html',
        controller: 'NewsCtrl',
        authenticate: true
      })
      .state('newsMsg', {
        title: 'Shop Settings - newsMsg ',
        url: '/newsMsg',
        templateUrl: 'app/news/newsMsg/newsMsg.html',
        controller: 'NewsMsgCtrl',
        authenticate: true
      })
      .state('newsManage', {
        title: 'Add, Remove, Edit categories',
        url: '/newsManage',
        templateUrl: 'app/news/newsManage/newsManage.html',
        controller: 'NewsManageCtrl',
        authenticate: true
      });
  });
