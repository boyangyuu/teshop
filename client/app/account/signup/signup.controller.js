'use strict';
var shopnxApp=angular.module("shopnxApp");

  shopnxApp.controller('SignupCtrl', function ($scope, Auth, $location, $window, $upload, $filter, $timeout) {
    // .factory('vertify', ['$resource', function($resource) {
    //     var obj = {};
    //     obj = $resource('/api/vertify/ccap');
    //     return obj;
    //   }])
    // $scope.vertifycole = 0;



// 文件上传开始
// $scope.setForm = function (form) {
//     $scope.files = form;
// }
// $scope.fileList = [];

// $scope.$watch('files', function (f) {

//      if(f&&f[0])
//      {
                  
//                     $scope.upload(f);
//                     angular.forEach(f, function(file){
//                        $scope.fileList.push(file);
//                     })
//      }
// });
// $scope.removeFile = function(fileName) {
//                 angular.forEach($scope.fileList, function(f, index){
//                     if(f.name == fileName){
//                         $scope.fileList.splice(index, 1);
//                         return;
//                     }
//                 });
// };
// $scope.upload = function (files) {
//                 if (files && files.length) {
//                     for (var i = 0; i < files.length; i++) {
//                         var file = files[i];
//                         file.dynamic = 0;
//                         $scope.uploadFile(file);
//                         $upload.upload({
//                             url: '/upload',
//                             file: file
//                         }).progress(function (evt) {
//                             var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
//                             file.dynamic = progressPercentage;
//                             console.log('progress: ' + progressPercentage + '% ' +
//                                         evt.config.file.name);
//                         }).success(function (data, status, headers, config) {
//                             console.log('file ' + config.file.name + 'uploaded. Response: ' +
//                                         JSON.stringify(data));
//                         });
//                     }
//                 }
// };
// var fileArray = [];
//  $scope.uploadFile = function(file)
//  {

//     file.upload = $upload.upload
//     ({
//           url: '/file/uploading',
//           file: file
//     });

//     file.upload.then(function(response) 
//     {
//           $timeout(function()
//           {
//               file.result = response.data;
//               fileArray.push(response.data)
//           });
//       }, function(response){
//            //if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
//        });
//       file.upload.progress(function(evt){
//                      // Math.min is to fix IE which reports 200% sometimes
//                      file.dynamic = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
//       });
//       file.upload.xhr(function(xhr){
//                      // xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
//       });
//     };          
// 文件上传结束











    var myCode=0;
    $scope.verBtn = function () {
      function MathRand() {
        var Num="";
        for(var i=0;i<4;i++)
          {
            Num+=Math.floor(Math.random()*10);
          }
        return Num;
      }
      var code = MathRand()
      $scope.vertifycole = code;

    }
    $scope.verBtn();

    console.log($scope.vertifycole);

    $scope.test = function () {
      if ($scope.user.proving === $scope.vertifycole) {
        console.log('yes')
      } else {
        console.log('nonono');
      }
    }


    // $scope.user = {};
    $scope.errors = {};
    $scope.btn="btn1";
    // 采购商 select
    $scope.selectUser = function(selectForm)
    {
      // $scope.selectForm={};
      $scope.submitSelect = true;
      
      /*if(selectForm.$valid){
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to the page with requested a signup
          Auth.redirectToAttemptedUrl();
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of selectForm fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            selectForm[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }*/
    };
    // 供应商 supply
    $scope.registerSeller = function(formshop)
    {
      // $scope.formSeller={};
      $scope.submittedshop = true;
      // if(formshop.$valid) {
      //   Auth.createUser({
      //     name: $scope.user.name,
      //     email: $scope.user.email,
      //     password: $scope.user.password,
      //     shopName: $scope.user.shopName,
      //     phone: $scope.user.phone,
      //     cellphone: $scope.user.cellphone,
      //     address: $scope.user.address,
      //     describe: $scope.user.describe
      //   })
      //   .then( function() {
      //     // Account created, redirect to the page with requested a signup
      //     Auth.redirectToAttemptedUrl();
      //   })
      //   .catch( function(err) {
      //     err = err.data;
      //     $scope.errors = {};
      //     // Update validity of formshop fields that match the mongoose errors
      //     angular.forEach(err.errors, function(error, field) {
      //       formshop[field].$setValidity('mongoose', false);
      //       $scope.errors[field] = error.message;
      //     });
      //   });

      // }
    };
    // 个人用户 unit
    $scope.register = function(form)
    {
      $scope.submitteduser = true;
    }

    $scope.loginOauth = function(provider){
      $window.location.href = '/auth/' + provider;
    };

  });
