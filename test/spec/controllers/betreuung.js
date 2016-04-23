'use strict';

describe('Controller: BetreuungCtrl', function () {

  // load the controller's module
  beforeEach(module('gsGaratherstrApp'));

  var BetreuungCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BetreuungCtrl = $controller('BetreuungCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BetreuungCtrl.awesomeThings.length).toBe(3);
  });
});
