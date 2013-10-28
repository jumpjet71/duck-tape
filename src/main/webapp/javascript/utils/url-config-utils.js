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
             * Web protocol (http or https), endpoint host name, endpoint port number, and REST API version
             */
            urlPrefix: "http://localhost:9090/v1",
            /**
             * The base URL path for the resource
             */
            path: null,
            /**
             * Get a REST endpoint URL based on api version, protocol, host, port, and base path url values.
             * @method createUrl
             */
            getUrl: function () {

                return this.urlPrefix  + this.path;
            }
        };
    });

})(appModules.utils);