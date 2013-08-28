/**
 * Allows the creation of a new endpoint object from a configuration instance.
 *
 * @class endpointUtils
 * @module javascript.utils
 */
exports.endpointUtils = (function () {
    'use strict';

    var Connection = function (port, host, path) {

        this.port = port;
        this.host = host;
        this.path = path;
    };

    return {

        create: function (port, host, path) {

            return new Connection(port, host, path);
        }
    };
})();