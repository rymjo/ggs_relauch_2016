'use strict';

describe('Service: TerminService', function () {

  // load the service's module
  beforeEach(module('gsGaratherstrApp'));

  // instantiate service
  var TerminService;
  beforeEach(inject(function (_TerminService_) {
    TerminService = _TerminService_;
  }));

  it('should do something', function () {
    expect(!!TerminService).toBe(true);
  });

});
