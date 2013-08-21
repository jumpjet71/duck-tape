/**
 * Storage for a small number of application scoped name value pairs.
 *
 * @class globals
 * @module javascript.utils
 *
 */
exports.appGlobalsUtil = (function () {
    'use strict';

    var mode;

    return {

        /**
         * Get the application's running mode.
         *
         * @method getMode
         *
         * @returns {*}
         */
        getMode: function () {

            return mode;
        },
        /**
         * Set the application's running mode.
         *
         * @method setMode
         *
         * @param modeObject
         */
        setMode: function (modeObject) {

            mode = modeObject;
        }
    };
})();