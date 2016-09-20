'use strict';

angular.module('shopnxApp')

  .controller('NewsCtrl', function ($scope, $upload, $filter, $timeout, vertify) { //, socket, Category, Modal, toastr
  		$scope.news=[
  			{name:"钢铁价格走势",msg:"钢铁的价格要下降"},
  			{name:"钢铁价格走势",msg:"钢铁的价格要下降"},
  			{name:"钢铁价格走势",msg:"钢铁的价格要下降"},
  			{name:"钢铁价格走势",msg:"钢铁的价格要下降"},
  			{name:"钢铁价格走势",msg:"钢铁的价格要下降"}
  		]

      vertify.get(function (result) {
        console.log(result);
        $scope.imgModel = result.buf;

      })


                  $scope.fileList = [];

                  $scope.$watch('files', function (f) {
                      if(f&&f[0]) {
                          $scope.upload(f);
                          angular.forEach(f, function(file){
                             $scope.fileList.push(file);
                          })
                      }
                  });

                  $scope.removeFile = function(fileName) {
                      angular.forEach($scope.fileList, function(f, index){
                          if(f.name == fileName){
                              $scope.fileList.splice(index, 1);
                              return;
                          }
                      });
                  };

                  $scope.upload = function (files) {
                      if (files && files.length) {
                          for (var i = 0; i < files.length; i++) {
                              var file = files[i];
                              file.dynamic = 0;
                              $scope.uploadFile(file);
                              /*$upload.upload({
                                  url: '/upload',
                                  file: file
                              }).progress(function (evt) {
                                  var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                  file.dynamic = progressPercentage;
                                  console.log('progress: ' + progressPercentage + '% ' +
                                              evt.config.file.name);
                              }).success(function (data, status, headers, config) {
                                  console.log('file ' + config.file.name + 'uploaded. Response: ' +
                                              JSON.stringify(data));
                              });*/
                          }
                      }
                  };

                  $scope.uploadFile = function(file){

                      file.upload = $upload.upload({
                          url: '/api/file/image/uploading',
                          file: file
                      });

                      file.upload.then(
                          function(response) {
                      		   $timeout(function() {
                                 console.log(response);
                      		       file.result = response.data;
                          	 });
                      		},
                          function(response) {
                          	       //if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
                      	  }
                      );

                  		file.upload.progress(function(evt) {
                  		   // Math.min is to fix IE which reports 200% sometimes
                  		   file.dynamic = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                  		});

                  		file.upload.xhr(function(xhr) {
                  		   // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
                  		});
                  };


  });
