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
            rootUrl: "http://localhost:9090/v1",
            /**
             * The base URL path for the resource. This is
             */
            path: null,
            /**
             * Get a REST endpoint URL based on api version, protocol, host, port, and base path url values.
             * @method getUrl
             */
            getUrl: function () {

                return this.rootUrl  + this.path;
            }
        };
    });

})(appModules.utils);