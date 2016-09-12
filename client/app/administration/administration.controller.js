'use strict';

angular.module('shopnxApp')
  .factory('ShopUsers', ['$resource', function($resource) {
      var obj = {};
      obj = $resource('/api/users/get/shops/all',{},{isArray:true});
      return obj;
    }])
  .factory('deleteUser', ['$resource', function($resource) {
      var obj = {};
      obj = $resource('/api/users/:id');
      return obj;
    }])
	.controller('administrationCtrl',function($scope, Modal, ShopUsers){

    ShopUsers.query(function(ins){
      $scope.shopUserList = ins
    });


		var cols = [
      {heading:'用户名',dataType:'text', sortType:'lowercase'},
      {heading:'产品类型',dataType:'text', sortType:'lowercase'}
    ];
	$scope.btn="btn1";
	/*添加*/
	/*product改为卖家用户管理*/
	$scope.edit = function(product){
      var title; if(product.name){ title = 'Editing ' + product.name;} else{ title = 'Add New';}
      Modal.show(product,{title:title, api:'Product', columns: cols});
    };
    // $scope.supplier=seller;
    /*删除卖家用户信息*/
    $scope.del=function(compellation){
    	angular.forEach($scope.supplier,function(o,i){

    		if(o.compellation==compellation)
    		{
    			$scope.supplier.splice(i,1);

    		}
    	})
    }
    /*卖家信息修改*/
    $scope.revise=function(){
    	alert(1);

    }
    /*卖家信息详情页*/
    $scope.detail=function(p){
    	  $state.go('',{obj:{pid:"3423423"}});
    }

	});
