'use strict';
var shopnxApp=angular.module("shopnxApp");

  shopnxApp.controller('SignupCtrl', function ($scope, Auth, $location, $window, $upload, $filter, $timeout) {
    // .factory('vertify', ['$resource', function($resource) {
    //     var obj = {};
    //     obj = $resource('/api/vertify/ccap');
    //     return obj;
    //   }])
    // $scope.vertifycole = 0;

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


    $scope.user = {};
    $scope.errors = {};
    $scope.btn="btn1";
    // 采购商 select
    $scope.selectUser = function(selectForm)
    {
      // $scope.selectForm={};
      $scope.submitSelect = true;
      
      if(selectForm.$valid){
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          companyName: $scope.user.companyName,
          businessLicense: $scope.user.businessLicense,
          taxFileNumber: $scope.user.taxFileNumber,
          Organization: $scope.user.Organization,
          username: $scope.user.username,
          cellphone: $scope.user.cellphone,
          phone: $scope.user.phone,
          address: $scope.user.address,
          postalcode: $scope.user.postalcode
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
      }
    };
    // 供应商 supply
    $scope.supplyUser = function(supplyform)
    {
      // $scope.formSeller={};
      $scope.submitSupply = true;
      if(supplyform.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          companyName: $scope.user.companyName,
          businessLicense: $scope.user.businessLicense,
          taxFileNumber: $scope.user.taxFileNumber,
          enterpriseProperty: $scope.user.enterpriseProperty,
          legalPerson: $scope.user.legalPerson,
          address: $scope.user.address,
          cardId: $scope.user.cardId,
          cellphone: $scope.user.cellphone,
          add: $scope.user.add,
          describe: $scope.user.describe,
          
          
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
    // 个人用户 unit
    $scope.unitUser = function(unitform)
    {
      $scope.submitUnit = true;
    }

    $scope.loginOauth = function(provider){
      $window.location.href = '/auth/' + provider;
    };

  });
