/**
 * Storage for a small number of application global variables
 * to be used with application running modes of 'test', 'dev', and 'prod'.
 * The number of global variables should never be very large.
 *
 * @class globals
 * @module javascript.utils
 *
 */
exports.appGlobals = (function () {

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