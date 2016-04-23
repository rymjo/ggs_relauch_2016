'use strict';

describe('Controller: TerminCtrl', function () {

  // load the controller's module
  beforeEach(module('gsGaratherstrApp'));

  var TerminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TerminCtrl = $controller('TerminCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TerminCtrl.awesomeThings.length).toBe(3);
  });
});
