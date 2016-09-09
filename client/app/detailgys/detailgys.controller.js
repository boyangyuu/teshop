'use strict';
angular.module('shopnxApp')
	.controller('detailgysCtrl',function($scope, Auth, $location, $window, $state, $stateParams){
		$scope.seller=$stateParams.obj;
		
		//保存提交
		$scope.submitSave=function(form){
			$scope.submitted=true;
			console.log("验证通过");
			
		}
	})
