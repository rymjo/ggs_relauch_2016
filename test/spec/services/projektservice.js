'use strict';

describe('Service: ProjektService', function () {

  // load the service's module
  beforeEach(module('gsGaratherstrApp'));

  // instantiate service
  var ProjektService;
  beforeEach(inject(function (_ProjektService_) {
    ProjektService = _ProjektService_;
  }));

  it('should do something', function () {
    expect(!!ProjektService).toBe(true);
  });

});
