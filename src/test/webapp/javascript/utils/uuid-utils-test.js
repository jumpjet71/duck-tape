(function () {
    'use strict';

    describe('for uuidUtils:', function () {

        var injector, result;

        beforeEach(function () {

            injector = angular.injector(['webApp.utils']);
        });

        describe('the v1 method', function () {

            var epoch = 1321651533573, uuid = "d9428888-122b-11e1-b85c-61cd3cbb3210";

            it('should return a UUID of ' + uuid + ' for all four options explicitly set' , function () {

                var uuidUtils = injector.get('uuidUtils');

                result = uuidUtils.v1({
                    msecs: 1321651533573,
                    nsecs: 5432,
                    clockseq: 0x385c,
                    node: [ 0x61, 0xcd, 0x3c, 0xbb, 0x32, 0x10 ]
                });

                expect(result).to.equal(uuid);
            });

            it('should return a UUID not equal to ' + uuid + ' when using default options' , function () {

                var uuidUtils = injector.get('uuidUtils');

                result = uuidUtils.v1();

                expect(result).not.equal(uuid);
            });
        });

        afterEach(function () {

            injector = null;
        });
    });

})();