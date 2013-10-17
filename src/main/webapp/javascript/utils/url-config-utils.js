/**
 *
 * The URL configuration utility. Used to determine the URL
 * prefixes for all of the REST resources.
 *
 * @class urlConfigUtils
 * @module webapp.javascript.utils
 *
 */
(function (utils) {
    'use strict';

    utils.factory('urlConfigUtils', function () {

        return {

            /**
             * REST API version.
             */
            version: "v1",
            /**
             * Web protocol (http or https).
             */
            protocol: "http",
            /**
             * The REST endpoint host name
             */
            host: "localhost",
            /**
             * The REST endpoint port number.
             */
            port: 9090,
            /**
             * The base URL path for the resource
             */
            path: null,
            /**
             * Get a REST endpoint URL based on api version, protocol, host, port, and base path url values.
             * @method createUrl
             */
            getUrl: function () {

                return this.protocol + "://" + this.host + ":" + this.port + "/" + this.version  + this.path;
            }
        };
    });

})(appModules.utils);