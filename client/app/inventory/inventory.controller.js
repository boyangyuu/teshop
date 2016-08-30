'use strict';

angular.module('shopnxApp')
  .controller('InventoryCtrl', function ($scope, socket, Product, Modal, Settings) {
    $scope.products = [];

    $scope.products =
    Product.query(function() {
      socket.syncUpdates('product', $scope.products);
    });

    $scope.addProduct = function() {
      if(Settings.demo){
        toastr.error('Adding product won\'t happen in demo mode');
        return;
      }
      if($scope.product === ''){
        return;
      }
      Product.save($scope.product);
      $scope.product = {};
    };

    $scope.editProduct = function(product) {
      Modal.show(product,{title:product.name});
    };

    $scope.deleteProduct = Modal.delete(function(product) {
      if(Settings.demo){
        toastr.error('Delete product will not work in demo mode');
        return;
      }
      Product.delete({id:product._id});
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('product');
    });

  });
