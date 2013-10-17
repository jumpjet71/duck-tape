/**
 *
 * This is model resource base class.
 * When used as functional inheritance template , all child classes will
 * inherit it's methods. It acts as a Facade for all REST data access.
 *
 * @class baseResourceUtil
 * @module webapp.javascript.utils
 *
 */
(function (utils) {
    'use strict';

    utils.factory('baseResourceUtils', function ($http) {

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
            },
            /**
             * Used to retrieve (or read) a representation of a resource. In the “happy” (or non-error) path, returns a representation in JSON
             * and a response code of 200(OK). In an error case, it returns 4xx and 5xx http request error codes.
             *
             * @method getResource
             *
             * @param {id} id The resource id.
             * @returns {Object} The promise/deferred object $q along with two other $http specific methods: 'success' and 'error'.
             * These closures are used to handle asynchronous requests operations.
             */
            getResource: function (id) {

                var that = this;

                return $http.get(this.getUrl() + "/" + id).success(function (response) {

                    that.httpStatus = response.httpStatus;
                    that.model = response.data;
                });
            },
            /**
             * Used for creation of new resources. On successful creation, return HTTP status 201,
             * returning a the newly-created resource with the 201 HTTP status.In an error case, it returns 4xx and 5xx http request error codes.
             *
             * @method postResource
             *
             * @param {Object} data The object that is being created.
             * @returns {Object} The promise/deferred object $q along with two other $http specific methods: 'success' and 'error'.
             * These closures are used to handle asynchronous requests operations.
             */
            postResource: function (data) {

                var that = this;

                return $http.post(this.getUrl(), data).success(function (response) {

                    that.httpStatus = response.httpStatus;
                    that.model = response.data;
                });
            },
            putResource: function (id, data) {

                var that = this;

                return $http.put(this.getUrl() + "/" + id, data).success(function (response) {

                    that.httpStatus = response.httpStatus;
                    that.model = response.data;
                });
            }
        };
    });

})(appModules.utils);