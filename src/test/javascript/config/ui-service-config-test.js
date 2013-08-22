(function () {
    'use strict';

    var expect = require('chai').expect,
        uiServiceConfig = require('../../../main/resources/config/ui-service-config').uiServiceConfig;

    describe('when using the UI service configuration:', function () {

        var port = 9090, host = "localhost", path = "/v1/api";

        describe('creating a "test" ui configuration' , function () {

            var configuration = uiServiceConfig.test();

            it('should return a "test" configuration with port '+ configuration.port, function () {

                expect(configuration.port).to.equal(port);
            });

            it('should return a "test" configuration with host "'+ configuration.host + '"', function () {

                expect(configuration.host).to.equal(host);
            });

            it('should return a "test" configuration with path "'+ configuration.path + '"', function () {

                expect(configuration.path).to.equal(path);
            });
        });
    });

})();