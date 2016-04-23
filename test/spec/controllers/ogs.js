'use strict';

describe('Controller: OgsCtrl', function () {

  // load the controller's module
  beforeEach(module('gsGaratherstrApp'));

  var OgsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OgsCtrl = $controller('OgsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OgsCtrl.awesomeThings.length).toBe(3);
  });
});
