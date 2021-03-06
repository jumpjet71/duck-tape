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
        paramFieldUtils = require('../utils/param-field-utils.js').paramFieldUtils,
        uuidUtils = require('../../javascript/utils/uuid-utils').uuidUtils,
        modelDefinition = ["computerName", "serverIp", "shareName"];

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

        var pagination = paramFieldUtils.processParameters(["size", "sort", "order", "current"], request);

        globals.getDataStore().nasLocations.count({}, function (error, count) {

            globals.getDataStore().nasLocations.find({}, function (err, nasLocations) {

                listResponse.processResponse(request, response, count, pagination, nasLocations);
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

        var model = paramFieldUtils.processParameters(modelDefinition, request);
        model.id =  uuidUtils.generate();

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

        var model = paramFieldUtils.processParameters(modelDefinition, request);
        model.id = request.params.id;

        globals.getDataStore().nasLocations.update({ id: request.params.id },
            { $set: model }, { multi: true }, function () {

                globals.getDataStore().nasLocations.findOne({ id: request.params.id }, function (error, nasLocation) {

                    singleResponse.processResponse(request, response, nasLocation);
                });
            });
    };
})();