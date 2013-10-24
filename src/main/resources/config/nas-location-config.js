/**
 * Set the location and authentication checks for the
 * nfs exports service.
 *
 * @class configNfsExport
 * @module resources.config.node.services
 * @param {Object} app The Express JS application context.
 * @param {String} mode The application running mode.
 */
exports.configNasLocation = function (app, mode) {
    'use strict';

    var service = require('../../javascript/services/nas-location-service'),
        config = require('../config/config').config;

    var path = config[mode].s2RestEndpoint.path;

    app.get(path + '/csv/nas-locations/:id', service.findNasLocationById);
    app.get(path + '/csv/nas-locations', service.findAllNasLocations);
    app.delete(path + '/csv/nas-locations/:id', service.deleteNasLocationById);
};