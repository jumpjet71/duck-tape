
exports.uiServiceEndpointConfig = (function() {
    'use strict';

    var connection = require('../../javascript/utils/endpoint');

    return {

        test : function () {

            return connection.create(9090, "localhost", "/v1/api");
        }
    } ;

})();