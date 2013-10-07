(function () {
    'use strict';

    var expect = require('chai').expect,
        config = require('../../../main/resources/config/config').config;

    describe('when using the REST service configuration:', function () {

        var port = 9090, host = "localhost", path = "/v1/api";

        describe('creating a "test" ui configuration' , function () {

            var configuration = config.test.s2RestEndpoint;

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