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
        singleDeleteResponse = require('../handlers/single-delete-response.js').singleDeleteResponse,
        listResponse = require('../handlers/list-response').listResponse,
        emptyFieldUtils = require('../utils/empty-field-utils').emptyFieldUtils,
        uuidUtils = require('../../javascript/utils/uuid-utils').uuidUtils;

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
     *
     * @method deleteNasLocationById
     *
     * @param {Object} request Express JS request object.
     * @param {Object} response Express JS request response.
     */
    exports.deleteNasLocationById = function (request, response) {

        globals.getDataStore().nasLocations.remove({ id: request.params.id }, function (error, numRemoved) {

            singleDeleteResponse.processResponse(request, response, numRemoved);
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

        globals.getDataStore().nasLocations.count({}, function (error, count) {

            globals.getDataStore().nasLocations.find({}, function (err, nasLocations) {

                listResponse.processResponse(request, response, count, nasLocations);
            });
        });
    };

    /**
     *
     * Create a NAS location object.
     *
     * @method findAllNasLocations
     *
     * @param {Object} request Express JS request object.
     * @param {Object} response Express JS request response.
     */
    exports.createNasLocation = function (request, response) {

        var model = emptyFieldUtils.removeEmpty({id: uuidUtils.generate(), computerName: request.query.computerName,
            serverIp: request.query.computerName, shareName: request.query.shareName});

        globals.getDataStore().nasLocations.insert(model, function () {

            response.status(201);
            singleResponse.processResponse(request, response, model);
        });
    };

    /**
     *
     * Update a NAS location object.
     *
     * @method findAllNasLocations
     *
     * @param {Object} request Express JS request object.
     * @param {Object} response Express JS request response.
     */
    exports.updateNasLocation = function (request, response) {

        var model = emptyFieldUtils.removeEmpty({id: request.params.id, computerName: request.query.computerName,
            serverIp: request.query.computerName, shareName: request.query.shareName});

        globals.getDataStore().nasLocations.update({ id: request.params.id },
            { $set: model }, { multi: true }, function () {

                globals.getDataStore().nasLocations.findOne({ id: request.params.id }, function (error, nasLocation) {

                    singleResponse.processResponse(request, response, nasLocation);
                });
            });
    };
})();