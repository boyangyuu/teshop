'use strict';
angular.module('shopnxApp')
	.controller('detailgysCtrl',function($scope, Auth, $location, $window, $state, $stateParams){
		$scope.user=$stateParams.obj;
		$scope.errors={};
		//保存提交
		$scope.submitSave=function(form){
			$scope.submitted=true;
			if(form.$valid)
			{
		        Auth.createUser({
		          name: $scope.user.name,
		          email: $scope.user.email,
		          // password: $scope.user.password,
		          shopName: $scope.user.shopName,
		          phone: $scope.user.phone,
		          cellphone: $scope.user.cellphone,
		          address: $scope.user.address,
		          describe: $scope.user.describe
		        })
		        .then( function() {
		          // Account created, redirect to the page with requested a signup
		          Auth.redirectToAttemptedUrl();
		        })
		        .catch( function(err) {
		          err = err.data;
		          $scope.errors = {};

		          // Update validity of form fields that match the mongoose errors
		          angular.forEach(err.errors, function(error, field) {
		            form[field].$setValidity('mongoose', false);
		            $scope.errors[field] = error.message;
		          });
		        });
	      	}
			
		}
	})
