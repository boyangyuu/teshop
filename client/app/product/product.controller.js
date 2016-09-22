'use strict';

angular.module('shopnxApp')
  .controller('ProductCtrl', function ($scope, socket, Product, Category, Brand, Feature, Modal, toastr, $loading, Settings, $upload, $filter, $timeout) {
    var cols = [
      {heading:'sku',dataType:'text', sortType:'lowercase'},
      {heading:'name',dataType:'text', sortType:'lowercase'},
      {heading:'info',dataType:'text', sortType:'lowercase'}
    ];
    // var cols = ['sku','name','nameLower','slug','status','info','uid', 'active','img'];
    $scope.products = [];
    $scope.product = {};
    $scope.variant = {};
    $scope.newFeature = {};
    $scope.newKF = {};
    $scope.product.variants = [];
    $scope.product.features = [];
    $scope.product.keyFeatures = [];
    // $scope.selected = {};
    // $scope.selected.feature = [];
    $scope.features = Feature.query();
    // $scope.items=$scope.features.map(function(name){ return { key:key,val:val}; })
    // $scope.selected.feature[0] = {"key":"Fit","val":"Tight"};
    $loading.start('products');
    $scope.products = Product.userProduct.query({}, function() {
      $loading.finish('products');
      socket.syncUpdates('product', $scope.products);
    });

    $scope.categories = Category.query(function() {
      socket.syncUpdates('category', $scope.categories);
    });
    $scope.brands = Brand.query(function() {
      socket.syncUpdates('brand', $scope.brands);
    });
    $scope.edit = function(product){
      var title; if(product.name){ title = 'Editing ' + product.name;} else{ title = 'Add New';}
      Modal.show(product,{title:title, api:'Product', columns: cols});
    };
    $scope.delete = function(product) {
      if(Settings.demo){
        toastr.error('Delete not allowed in demo mode');
        return;
      }
      if(confirm('Are you sure to delete the product?')){
        Product.delete({id:product._id});
      }
    };
    $scope.save = function(product){
      if(Settings.demo){
        toastr.error('Save not allowed in demo mode');
        return;
      }
      if('variants' in $scope.product){
      }else{
          $scope.product.variants = [];
      }
      if('keyFeatures' in $scope.product){
      }else{
          $scope.product.keyFeatures = [];
      }
      if('features' in $scope.product){
      }else{
          $scope.product.features = [];
      }

      if('size' in $scope.variant){
        $scope.product.variants.push($scope.variant);
        // console.log($scope.product.variants);
      }
      // console.log($scope.newKF);
      if('val' in $scope.newKF){
        $scope.product.keyFeatures.push($scope.newKF.val);
        console.log($scope.product.keyFeatures);
      }
      if('key' in $scope.newFeature){
        $scope.product.features.push($scope.newFeature);
        // console.log($scope.product.features);
      }
      $scope.variant = {};
      $scope.newKF = {};
      $scope.newFeature = {};

      // $scope.feature.key = feature.key.name;
      // $scope.product.feature = $scope.selected.feature;

      // console.log($scope.selected.feature);
      if('_id' in product){
          Product.update({ id:$scope.product._id }, $scope.product).$promise.then(function() {
            toastr.success("Product info saved successfully","Success");
          }, function(error) { // error handler
            var err = error.data.errors;
            toastr.error(err[Object.keys(err)].message,err[Object.keys(err)].name);
          });
        }
        else{
          Product.save($scope.product).$promise.then(function() {
            toastr.success("Product info saved successfully","Success");
          }, function(error) { // error handler
              var err = error.data.errors;
              toastr.error(err[Object.keys(err)].message,err[Object.keys(err)].name);
          });
        }
    };
    $scope.changeActive = function(b){ // success handler
      b.active = !b.active;
      Product.update({ id:b._id }, b).$promise.then(function() {

      }, function(error) { // error handler
          // console.log(error);
          toastr.error(error.statusText + ' (' +  error.status + ')');
          b.active = !b.active;
      });
    };

    $scope.deleteFeature = function(index,product) {
      $scope.product.features.splice(index, 1);
      $scope.save(product)
    };

    $scope.deleteKF = function(index,product) {
      $scope.product.keyFeatures.splice(index, 1);
      $scope.save(product)
    };

    $scope.deleteVariants = function(index,product) {
      $scope.product.variants.splice(index, 1);
      $scope.save(product)
    };

    $scope.productDetail = function(product){
        if(product){ $scope.product = product; }
        else{ $scope.product = {}; }
    };

    //category
    $scope.categories = Category.all.query();
    $scope.categories2=[];
    $scope.onSelectChanged = function($item, $model){
      console.log("onSelectChanged");
      $scope.categories2=$item.sub_categories;
    }

    $scope.onSubSelectChanged = function($item, $model){
      console.log("onSelectChanged");
      $scope.product.category = $item;
    }




  });

// //files
// $scope.fileList = [];
//
// $scope.$watch('files', function (f) {
//   console.log(f);
//     if(f&&f[0]) {
//         $scope.upload(f);
//         angular.forEach(f, function(file){
//            $scope.fileList.push(file);
//         })
//     }
// });
//
// $scope.removeFile = function(fileName) {
//     angular.forEach($scope.fileList, function(f, index){
//         if(f.name == fileName){
//             $scope.fileList.splice(index, 1);
//             return;
//         }
//     });
// };
//
// $scope.upload = function (files) {
//     if (files && files.length) {
//         for (var i = 0; i < files.length; i++) {
//             var file = files[i];
//             file.dynamic = 0;
//             $scope.uploadFile(file);
//             /*$upload.upload({
//                 url: '/upload',
//                 file: file
//             }).progress(function (evt) {
//                 var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
//                 file.dynamic = progressPercentage;
//                 console.log('progress: ' + progressPercentage + '% ' +
//                             evt.config.file.name);
//             }).success(function (data, status, headers, config) {
//                 console.log('file ' + config.file.name + 'uploaded. Response: ' +
//                             JSON.stringify(data));
//             });*/
//         }
//     }
// };
//
// $scope.uploadFile = function(file){
//
//     file.upload = $upload.upload({
//         url: 'http://127.0.0.1:9000/api/file/image/uploading',
//         file: file
//     });
//
//     file.upload.then(function(response) {
//    $timeout(function() {
//        file.result = response.data;
//    });
// }, function(response) {
//      //if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
// });
//
// file.upload.progress(function(evt) {
//    // Math.min is to fix IE which reports 200% sometimes
//    file.dynamic = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
// });
//
// file.upload.xhr(function(xhr) {
//    // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
// });
// };
