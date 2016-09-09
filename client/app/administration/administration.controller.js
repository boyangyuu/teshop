'use strict';
var seller=[
    	{name:'aa',product:'建材',active:false,compellation:'琪琳',phone:4513456431,number:18435140633,email:'59894@136.com',address:'北京市**',describe:'装饰材料:各种涂料、油漆、镀层、贴面、各色瓷砖、具有特殊效果的玻璃等'},
    	{name:'bb',product:'图纸',active:true,compellation:'麒麟',phone:45613186456,number:18636160693,email:'sede456@sine.cn',address:'天津市**',describe:'建筑立面图,建筑剖面图,建筑平面图,建筑总平面图'},
    	{name:'cc',product:'混泥土',active:true,compellation:'琪琪',phone:78978946789,number:18756476836,email:'325aser@think.com',address:'上海市**',describe:'水泥混凝土、沥青混凝土、石膏混凝土及聚合物混凝土'}
    ]
    
angular.module('shopnxApp')
	.controller('administrationCtrl',function($scope,Modal){
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
    $scope.supplier=seller;
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