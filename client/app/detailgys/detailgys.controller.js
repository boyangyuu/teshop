'use strict';
angular.module('shopnxApp')
	.controller('detailgysCtrl',function($scope, $state, $stateParams){
		console.log($stateParams.obj);
		$scope.seller=$stateParams.obj;
		/*保存提交*/
		$scope.save=function(obj){
			console.log(obj);
			/*访问数据库*/
		}
	})
