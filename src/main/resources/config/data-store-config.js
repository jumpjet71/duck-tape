

exports.configDataStore = function () {
    'use strict';

    var DataStore  = require('nedb'),
        dataStore = new DataStore();

    require('../data/nas-locations').insertNasLocations(dataStore);

};