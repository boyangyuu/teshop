'use strict';

angular.module('shopnxApp')
  .controller('FeatureCtrl', function ($scope) {
    $scope.message = 'Hello';
    // 分类联动开始
    $scope.categories=
	    [
	      {
	        id:"001",
	        "text":"油漆材料",
	        "children":
	        [
	          {
	            "id":"0011",
	            "text":"防火漆",
	            "children":[]
	          },
	          {
	            "id":"0012",
	            "text":"防水漆",
	            "children":[]
	          },
	          {
	            "id":"0013",
	            "text":"外墙乳胶漆",
	            "children":[]
	          }
	        ]
	      },
	      {
	        "id":"002",
	        "text":"石材石料",
	        "children":
	        [
	          {
	            "id":"0021",
	            "text":"大理石",
	            "children":[]
	          },
	          {
	            "id":"0022",
	            "text":"人造石",
	            "children":[]
	          },
	          {
	            "id":"0023",
	            "text":"花岗石",
	            "children":[]
	          }
	        ]
	      },
	      {
	        "id":"003",
	        "text":"地板地毯",
	        "children":
	        [
	          {
	            "id":"0031",
	            "text":"地板配件",
	            "children":[]
	          },
	          {
	            "id":"0032",
	            "text":"防静电地板",
	            "children":[]
	          },
	          {
	            "id":"0033",
	            "text":"实木地板",
	            "children":[]
	          }
	        ]
	      }     

	    ];
	$scope.categories2=[];
	$scope.$watch('category',function(newValue,oldValue)
	{
	    var len;
	    if(newValue!=oldValue)
	    {
	        var i=0;
	        len = $scope.categories.length;
	        if(!newValue)
	        { 
	          $scope.categories2 = [];
	          return;
	        }
	        for(i;i<len;i ++)
	        {

	          if($scope.categories[i].id == $scope.category)
	          {
	            $scope.categories2 = $scope.categories[i].children;
	          }
	        }

	    }
	});
    $scope.productObj = {};
	$scope.$watch('category2',function(newValue,oldValue)
	{
		var len;
	    if(newValue != oldValue)
	    {
	        var i = 0; len = $scope.categories2.length;
	        for(i;i < len ; i ++)
	        {
	          if($scope.categories2[i].id == $scope.category2)
	          {
	            $scope.productObj = $scope.categories2[i];
	          }
	        }
	    }
	});    

 	// $scope.query = {"categoryId: xx"};
	// 分类联动结束

  });
