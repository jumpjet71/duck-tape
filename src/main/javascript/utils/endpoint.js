/**
 * An instantiated object that represents the connection information of a REST endpoint.
 *
 * @class endpoint
 * @module javascript.utils
 */
exports.endpoint = (function () {
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