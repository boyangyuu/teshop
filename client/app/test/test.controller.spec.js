'use strict';

describe('Controller: kindeditorCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var kindeditorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    kindeditorCtrl = $controller('kindeditorCtrl', {
      $scope: scope
    });
  }));

});
