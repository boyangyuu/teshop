'use strict';
var shopnxApp=angular.module("shopnxApp");

  shopnxApp.controller('SignupCtrl', function ($scope, Auth, $location, $window) {
    // .factory('vertify', ['$resource', function($resource) {
    //     var obj = {};
    //     obj = $resource('/api/vertify/ccap');
    //     return obj;
    //   }])
    // $scope.vertifycole = 0;
    var myCode = 0;
    $scope.verBtn = function () {
      function MathRand() {
        var Num="";
        for(var i=0;i<6;i++)
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


    $scope.user = {};
    $scope.errors = {};
    $scope.btn="btn1";
    // 采购商
    $scope.registerUser = function(formuser)
    {
      $scope.submitted = true;

      /*if(formuser.$valid){
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

          // Update validity of formuser fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            formuser[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }*/
    };
    // 供应商
    $scope.registerSeller = function(formshop)
    {
      $scope.submittedshop = true;

      if(formshop.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
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

          // Update validity of formshop fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            formshop[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });

      }
    };
    // 个人用户
    $scope.register = function(form)
    {
      $scope.submitteduser = true;

      // if(form.$valid) {
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

      //     // Update validity of form fields that match the mongoose errors
      //     angular.forEach(err.errors, function(error, field) {
      //       form[field].$setValidity('mongoose', false);
      //       $scope.errors[field] = error.message;
      //     });
      //   });
      // }
    }

    $scope.loginOauth = function(provider){
      $window.location.href = '/auth/' + provider;
    };

  });
