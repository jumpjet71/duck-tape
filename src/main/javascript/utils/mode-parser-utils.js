/**
 * Configures the application's running mode:
 * test, dev, or prod mode.
 *
 * NOTE: Also corresponds to the resources.config.running-modes.js module.
 *
 * Can be set using a system environment variable called "NODE_JS_MODE".
 * This may be overridden as follows:
 *
 * node app [test, dev, prod]
 *
 * @class modeParserUtils
 * @module javascript.utils
 * @param {Object} process The node js process instance
 */
exports.modeParserUtils = function (process) {
    'use strict';

    var mode = process.env.NODE_JS_MODE || 'test',
        testExp = /test/,
        devExp = /dev/,
        prodExp = /prod/;

    /**
     * Simple application profile parser.
     * The first argument after "node app" and will have the format:
     * node app [test, dev, prod].
     *
     * @method processForEach
     *
     * @return {String} Returns the profile value parsed from command line.
     */
    process.argv.forEach(function (val, index) {

        /**
         * Crude, argument parser for running modes.
         * This will override settings made by environment variables.
         */
        if ((index === 2) && val && (testExp.test(val)) || devExp.test(val) || prodExp.test(val)) {

            mode = val;
        }
    });

    return mode;
};