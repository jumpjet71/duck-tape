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

    utils.factory('baseResourceUtils', function ($http, urlConfigUtils) {

        return {

            /**
             * Underlying resource object.
             */
            model: {},
            /**
             * The collection resource object.
             */
            collection: {},
            /**
             * The collection pagination criteria
             */
            paginationCriteria: {},
            /**
             * The HTTP response status.
             */
            httpStatus: null,
            /**
             * REST resource URL settings and configuration.
             */
            url: urlConfigUtils,
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
             * @method createResource
             *
             * @returns {Object} The promise/deferred object $q along with two other $http specific methods: 'success' and 'error'.
             * These closures are used to handle asynchronous requests operations.
             */
            createResource: function () {

                var that = this;

                return $http.post(this.url.getUrl(), that.model).success(function (response) {

                    that.httpStatus = response.httpStatus;
                    that.model = response.data;
                });
            },
            /**
             * Used to update and existing resource. On successful update, return HTTP status 200,
             * returning a the updated resource with the 201 HTTP status.
             * In an error case, it returns 4xx and 5xx http request error codes.
             *
             * @method updateResource
             *
             * @param {id} id The resource id.
             *
             * @returns {Object} The promise/deferred object $q along with two other $http specific methods: 'success' and 'error'.
             * These closures are used to handle asynchronous requests operations.
             */
            updateResource: function (id) {

                var that = this;

                return $http.put(this.url.getUrl() + "/" + id, that.model).success(function (response) {

                    that.httpStatus = response.httpStatus;
                    that.model = response.data;
                });
            },
            /**
             * Used when you want to delete the resource identified by the URL of the request.
             * On successful delete, return HTTP status 200.
             *
             * @method deleteResource
             *
             * @param {id} id The resource id.
             *
             * @returns {Object} The promise/deferred object $q along with two other $http specific methods: 'success' and 'error'.
             * These closures are used to handle asynchronous requests operations.
             */
            deleteResource: function (id) {

                var that = this;

                return $http.delete(this.url.getUrl() + "/" + id).success(function (response) {

                    that.httpStatus = response.httpStatus;
                    that.model = response.data;
                });
            },
            /**
             *
             * Get a list of all resources using pagination criteria.
             *
             * @method getAllResources
             *
             * @returns {Object} The promise/deferred object $q along with two other $http specific methods: 'success' and 'error'.
             * These closures are used to handle asynchronous requests operations.
             */
            getAllResources: function () {

                var that = this;

                return $http.get(this.url.getUrl(), that.paginationCriteria).success(function (response) {

                    that.httpStatus = response.httpStatus;
                    that.collection = response.data;
                    that.paginationCriteria = response.paginationCriteria;
                });
            }
        };
    });

})(appModules.utils);