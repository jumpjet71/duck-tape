(function () {
    'use strict';

    var expect = require('chai').expect,
        endpoint = require('../../../main/javascript/utils/endpoint').endpoint;

    describe('when using the REST endpoint connection:', function () {

        var port = 5050, host = "localhost", path = "/api/v1";

        describe('creating a connection object with port '+ port + ', host "' + host + '" , and path "'+ path + '"' , function () {

            var connection = endpoint.create(port, host, path);

            it('should return a connection with port '+ connection.port, function () {

                expect(connection.port).to.equal(port);
            });

            it('should return a connection with host "'+ connection.host + '"', function () {

                expect(connection.host).to.equal(host);
            });

            it('should return a connection with path "'+ connection.path + '"', function () {

                expect(connection.path).to.equal(path);
            });
        });
    });

})();