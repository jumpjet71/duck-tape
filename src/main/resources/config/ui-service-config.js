
exports.uiServiceConfig = (function() {
    'use strict';

    var endpointUtil = require('../../javascript/utils/endpoint-util').endpointUtil;

    return {

        test : function () {

            return endpointUtil.create(9090, "localhost", "/v1/api");
        }
    } ;

})();