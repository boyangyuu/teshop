'use strict';

angular.module('demoApp')
  controller("kindeditorCtrl",["$scope",function($scope){
        $scope.info = {
                content : "hello,world"
        };
        $scope.config = {width: '100px'};

        $scope.reg = /\d+/g;
    }]);

