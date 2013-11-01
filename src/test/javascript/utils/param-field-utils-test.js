(function () {
    'use strict';

    var expect = require('chai').expect,
        emptyFieldUtils = require('../../../main/javascript/utils/param-field-utils').paramFieldUtils;

    describe('when using the request parameter utility:', function () {

        describe('the field removal function', function () {

            it('should remove selected field ', function () {

                var modelDefinition = ["name"], result, request = {body: {name: "Testy"}};

                result = emptyFieldUtils.processParameters(modelDefinition, request);

                expect(result.name).to.equal("Testy");
            });
        });
    });

})();