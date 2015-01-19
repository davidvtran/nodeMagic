'use strict';

describe('Controller: InvocationCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeTestProgramApp'));

  var InvocationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InvocationCtrl = $controller('InvocationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
