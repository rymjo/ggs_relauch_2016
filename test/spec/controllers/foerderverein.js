'use strict';

describe('Controller: FoerdervereinCtrl', function () {

  // load the controller's module
  beforeEach(module('gsGaratherstrApp'));

  var FoerdervereinCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FoerdervereinCtrl = $controller('FoerdervereinCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FoerdervereinCtrl.awesomeThings.length).toBe(3);
  });
});
