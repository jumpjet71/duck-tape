/**
 * Storage for a small number of application scoped name value pairs.
 *
 * @class globalUtils
 * @module javascript.utils
 *
 */
exports.globalsUtils = (function () {
    'use strict';

    var mode, dataStore;

    return {

        /**
         * Get the application's running mode.
         *
         * @method getMode
         *
         * @return {Object} mode.
         */
        getMode: function () {

            return mode;
        },
        /**
         * Set the application's running mode.
         *
         * @method setMode
         *
         * @param {Object} modeObject
         */
        setMode: function (modeObject) {

            mode = modeObject;
        },
        /**
         * Get the application's data store instance.
         *
         * @method getDataStore.
         *
         * @return {Object} mode.
         */
        getDataStore: function () {

            return dataStore;
        },
        /**
         * Set the application's running mode.
         *
         * @method setMode
         *
         * @param {Object} dataStoreObject
         */
        setDataStore: function (dataStoreObject) {

            dataStore = dataStoreObject;
        }
    };
})();