/**
 *
 * This is model resource base class.
 * When used as functional inheritance template , all child classes will
 * inherit it's methods
 *
 * @class baseResource
 * @module webapp.javascript.utils
 *
 */
(function (utils) {
    'use strict';

    utils.factory('baseResource', function (restResource) {

        return {

            /**
             * The base URL for the resource
             * Should be set by it's child.
             */
            url : null,

            /**
             *
             *
             * @param {id} id The resource id.
             * @returns {Object} The
             */
            getResource: function (id) {

                return restResource.getResource(this, this.url, id);
            },
            postResource: function (data) {

                return restResource.postResource(this, this.url, data);
            },
            putResource: function (id, data) {

                return restResource.putResource(this, this.url, id, data);
            }
        };
    });

})(appModules.utils);