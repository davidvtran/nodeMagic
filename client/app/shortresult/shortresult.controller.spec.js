'use strict';

describe('Controller: ShortresultCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeTestProgramApp'));

  var ShortresultCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShortresultCtrl = $controller('ShortresultCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
