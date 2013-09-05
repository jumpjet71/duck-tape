/**
 * Storage for a small number of application scoped name value pairs.
 *
 * @class globalUtils
 * @module javascript.utils
 *
 */
exports.globalsUtils = (function () {
    'use strict';

    var mode;

    return {

        /**
         * Get the application's running mode.
         *
         * @method getMode
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
        }
    };
})();