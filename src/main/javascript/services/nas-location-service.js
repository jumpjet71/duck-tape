/**
 * The NAS location REST endpoint.
 *
 * @class nasLocationService
 * @module javascript.services
 */
(function () {
    'use strict';

    var globals = require('../utils/globals-utils').globalsUtils,
        singleResponse = require('../handlers/single-response').singleResponse,
        listResponse = require('../handlers/list-response').listResponse;

    /**
     * Find a NAS location resource using it's unique identifier.
     *
     * @method findNasLocationById
     *
     * @param {Object} request Express JS request object.
     * @param {Object} response Express JS request response.
     */
    exports.findNasLocationById = function (request, response) {

        globals.getDataStore().nasLocations.findOne({ id: request.params.id }, function (error, nasLocation) {

            singleResponse.processResponse(request, response, nasLocation);
        });
    };

    /**
     * List all of the NAS location resources.
     *
     * @method findAllNasLocations
     *
     * @param {Object} request Express JS request object.
     * @param {Object} response Express JS request response.
     */
    exports.findAllNasLocations = function (request, response) {

        response.set('Content-Type', 'application/json');

        globals.getDataStore().nasLocations.count({}, function (error, count) {

            globals.getDataStore().nasLocations.find({}, function (err, nasLocations) {

                listResponse.processResponse(request, response, count, nasLocations);
            });
        });

    };
})();