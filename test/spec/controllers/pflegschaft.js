'use strict';

describe('Controller: PflegschaftCtrl', function () {

  // load the controller's module
  beforeEach(module('gsGaratherstrApp'));

  var PflegschaftCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PflegschaftCtrl = $controller('PflegschaftCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PflegschaftCtrl.awesomeThings.length).toBe(3);
  });
});
