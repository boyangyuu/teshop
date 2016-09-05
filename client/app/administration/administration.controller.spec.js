'use strict';

describe('Controller: administrationCtrl', function () {

  // load the controller's module
  beforeEach(module('shopnxApp'));

  var administrationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    administrationCtrl = $controller('administrationCtrl', {
      $scope: scope
    });
  }));

});