(function () {
    'use strict';

    var expect = require('chai').expect, uuidUtils = require('../../../main/javascript/utils/uuid-utils').uuidUtils, result;

    describe('for uuidUtils:', function () {

        describe('the v1 method', function () {

            var uuid = "109156be-c4fb-41ea-b1b4-efe1671c5836";

            it('should return a UUID of ' + uuid + ' for all four options explicitly set' , function () {

                result = uuidUtils.generate({random: [0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36]});

                expect(result).to.equal(uuid);
            });

            it('should return a UUID not equal to ' + uuid + ' when using default options' , function () {

                result = uuidUtils.generate();

                expect(result).not.equal(uuid);
            });
        });

    });
})();