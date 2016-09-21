'use strict';

angular.module('shopnxApp')
  .controller('FeatureCtrl', function ($scope, Category) {
    $scope.message = 'Hello';
		$scope.query = {categoryId:"560773d2d4124c770bfc4b59"};
		$scope.categories = Category.all.query(function () {
			$scope.categories;
			console.log("111");
		});
    // 分类联动开始
    // $scope.categories=
	   //  [
	   //    {
	   //      id:"001",
	   //      "text":"油漆材料",
	   //      "children":
	   //      [
	   //        {
	   //          "id":"0011",
	   //          "text":"防火漆",
	   //          "children":[]
	   //        },
	   //        {
	   //          "id":"0012",
	   //          "text":"防水漆",
	   //          "children":[]
	   //        },
	   //        {
	   //          "id":"0013",
	   //          "text":"外墙乳胶漆",
	   //          "children":[]
	   //        }
	   //      ]
	   //    },
	   //    {
	   //      "id":"002",
	   //      "text":"石材石料",
	   //      "children":
	   //      [
	   //        {
	   //          "id":"0021",
	   //          "text":"大理石",
	   //          "children":[]
	   //        },
	   //        {
	   //          "id":"0022",
	   //          "text":"人造石",
	   //          "children":[]
	   //        },
	   //        {
	   //          "id":"0023",
	   //          "text":"花岗石",
	   //          "children":[]
	   //        }
	   //      ]
	   //    },
	   //    {
	   //      "id":"003",
	   //      "text":"地板地毯",
	   //      "children":
	   //      [
	   //        {
	   //          "id":"0031",
	   //          "text":"地板配件",
	   //          "children":[]
	   //        },
	   //        {
	   //          "id":"0032",
	   //          "text":"防静电地板",
	   //          "children":[]
	   //        },
	   //        {
	   //          "id":"0033",
	   //          "text":"实木地板",
	   //          "children":[]
	   //        }
	   //      ]
	   //    }
    //
	   //  ];
		$scope.categories2=[];
		$scope.$watch('selected_category1',function(newValue,oldValue)
		{
			$scope.categories2 = $scope.sub_categories;
		});

		$scope.$watch('selected_category2',function(newValue,oldValue)
		{
		});

		// 分类联动结束

  });
