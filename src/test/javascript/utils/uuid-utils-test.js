(function () {
    'use strict';

    var expect = require('chai').expect, uuidUtils = require('../../../main/javascript/utils/uuid-utils').uuidUtils, result;

    describe('for uuidUtils:', function () {

        describe('the v1 method', function () {

            var uuid = "d9428888-122b-11e1-b85c-61cd3cbb3210";

            it('should return a UUID of ' + uuid + ' for all four options explicitly set' , function () {

                result = uuidUtils.generate({
                    msecs: 1321651533573,
                    nsecs: 5432,
                    clockseq: 0x385c,
                    node: [ 0x61, 0xcd, 0x3c, 0xbb, 0x32, 0x10 ]
                });

                expect(result).to.equal(uuid);
            });

            it('should return a UUID not equal to ' + uuid + ' when using default options' , function () {

                result = uuidUtils.generate();

                expect(result).not.equal(uuid);
            });
        });

    });
})();