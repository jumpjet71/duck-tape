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

    utils.factory('baseResourceUtils', function ($http, urlUtils) {

        return {

            /**
             * REST resource URL settings and configuration.
             */
            url : urlUtils,
            /**
             * Used to retrieve (or read) a representation of a resource. In the “happy” (or non-error) path, returns
             * a representation in JSON and a response code of 200(OK). In an error case, it returns 4xx and 5xx http request error codes.
             *
             * @method getResource
             *
             * @param {id} id The resource id.
             * @returns {Object} The promise/deferred object $q along with two other $http specific methods: 'success' and 'error'.
             * These closures are used to handle asynchronous requests operations.
             */
            getResource: function (id) {

                var that = this;

                return $http.get(this.url.getUrl() + "/" + id).success(function (response) {

                    that.httpStatus = response.httpStatus;
                    that.model = response.data;
                });
            },
            /**
             * Used for creation of new resources. On successful creation, return HTTP status 201,
             * returning a the newly-created resource with the 201 HTTP status.
             * In an error case, it returns 4xx and 5xx http request error codes.
             *
             * @method postResource
             *
             * @param {Object} data The object that is being created.
             * @returns {Object} The promise/deferred object $q along with two other $http specific methods: 'success' and 'error'.
             * These closures are used to handle asynchronous requests operations.
             */
            postResource: function (data) {

                var that = this;

                return $http.post(this.url.getUrl(), data).success(function (response) {

                    that.httpStatus = response.httpStatus;
                    that.model = response.data;
                });
            },
            /**
             * Used to update and existing resource. On successful update, return HTTP status 200,
             * returning a the updated resource with the 201 HTTP status.
             * In an error case, it returns 4xx and 5xx http request error codes.
             *
             * @method putResource
             *
             * @param {id} id The resource id.
             * @param {Object} data The object that is being created.
             *
             * @returns {Object} The promise/deferred object $q along with two other $http specific methods: 'success' and 'error'.
             * These closures are used to handle asynchronous requests operations.
             */
            putResource: function (id, data) {

                var that = this;

                return $http.put(this.url.getUrl() + "/" + id, data).success(function (response) {

                    that.httpStatus = response.httpStatus;
                    that.model = response.data;
                });
            },
            deleteResource: function (id) {

                var that = this;

                return $http.delete(this.url.getUrl() + "/" + id).success(function (response) {

                    that.httpStatus = response.httpStatus;
                    that.model = response.data;
                });
            }
        };
    });

})(appModules.utils);