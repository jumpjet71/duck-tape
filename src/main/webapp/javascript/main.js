/**
 * The main client side java script global. Acts as a place holder for all
 * of the angular js modules that are used by the client side.
 * @type {{utils: *}}
 */
var appModules = {
    utils: angular.module('webApp.utils', []),
    app: angular.module('webApp', ['webApp.utils'])
};

/**
 *
 * The main entry point for the client side application.
 *
 * @class main
 * @module webapp.javascript
 *
 * @param {Object} app The Angular JS module definition for the application.
 */
(function (app) {
    'use strict';

    app.config(['$locationProvider', function ($locationProvider) {

        $locationProvider.html5Mode(true);
    }]);

})(appModules.app);