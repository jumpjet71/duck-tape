/**
 * Configure an im memory document data base for testing.
 * Create document collections as needed.
 *
 * @class config
 * @module resources.configDataStore
 *
 */
exports.configDataStore = function () {
    'use strict';
    var dataStore = {};

    require('../data/nas-location-data').insertNasLocationData(dataStore);

    return dataStore;
};