'use strict';

angular.module('shopnxApp')
  .controller('FeatureCtrl', function ($scope, Category) {
		$scope.query = {};
		$scope.categories = Category.all.query();
		$scope.categories2=[];
		$scope.$watch('selected_category1',function(newValue,oldValue)
		{
			if (typeof $scope.selected_category1 != 'undefined')
				$scope.categories2 = $scope.selected_category1.sub_categories;
		});

		$scope.$watch('selected_category2',function(newValue,oldValue)
		{
			if (typeof $scope.selected_category2 != 'undefined')
				$scope.query = {categoryId:$scope.selected_category2._id};
		});
  });
