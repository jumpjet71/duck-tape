(function () {
    'use strict';

    var expect = require('chai').expect,
        globals = require('../../../main/javascript/utils/globals-utils').globalsUtils;

    describe('the global variable placeholder:', function () {

        var result = "test-mode";

        describe('setting running mode global with the value "' + result + '"', function () {

            it('should return "' + result + '"', function () {

                globals.setMode(result);

                expect(globals.getMode()).to.equal(result);
            });
        });
    });

})();