(function () {
    'use strict';

    describe('for uuidUtils:', function () {

        var injector, result;

        beforeEach(function () {

            injector = angular.injector(['webApp.utils']);
        });

        describe('the v1 method', function () {

            var uuid = "109156be-c4fb-41ea-b1b4-efe1671c5836";

            it('should return a UUID of ' + uuid + ' for all four options explicitly set', function () {

                var uuidUtils = injector.get('uuidUtils');

                result = uuidUtils.generate({random: [0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36]});

                expect(result).to.equal(uuid);
            });

            it('should return a UUID not equal to ' + uuid + ' when using default options', function () {

                var uuidUtils = injector.get('uuidUtils');

                result = uuidUtils.generate();

                expect(result).not.equal(uuid);
            });
        });

        afterEach(function () {

            injector = null;
        });
    });

})();