/**
 *
 * This is the base class for all REST resources. It acts as a Facade for
 * all REST data access.
 *
 * @class restResource
 * @module webapp.javascript.utils
 *
 */
(function (utils) {
    'use strict';

    utils.factory('restResource', function ($http) {

        return {

            /**
             * Retrieve a representation of the resource.
             *
             * @method getResource
             *
             * @param {Object} that The calling object reference.
             * @param {String} url The base URI for the resource.
             * @param {id} id The resource id.
             */
            getResource: function (that, url, id) {

                return $http.get(url + "/" + id).success(function (response) {

                    that.httpStatus = response.httpStatus;
                    that.model = response.data;
                });
            },
            /**
             * Create a new resource.
             *
             * @method postResource
             *
             * @param {Object} that The calling object reference.
             * @param {String} url The base URI for the resource.
             * @param {Object } data The object that is being created.
             */
            postResource: function (that, url, data) {

                return $http.post(url, data).success(function (response) {

                    that.httpStatus = response.httpStatus;
                    that.model = response.data;
                });
            },
            /**
             * Update a new resource.
             *
             * @method putResource
             *
             * @param {Object} that The calling object reference.
             * @param {String} url The base URI for the resource.
             * @param {Object } data The object that is being updated.
             */
            putResource: function (that, url, data) {

                return $http.put(url, data).success(function (response) {

                    that.httpStatus = response.httpStatus;
                    that.model = response.data;
                });
            }
        };
    });

})(appModules.utils);