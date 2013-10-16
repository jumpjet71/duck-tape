/**
 * The main client side java script global. Dependency injection hierarchy for the entire
 * client side application is defined here.
 */
var appModules = {
    utils: angular.module('webApp.utils', ['ng']),
    restResources: angular.module('webApp.restResources', ['webApp.utils']),
    windows: angular.module('webApp.directives.windows', []),
    controllers: angular.module('webApp.controllers', []),
    app: angular.module('webApp', ['webApp.utils', 'webApp.restResources', 'webApp.directives.windows', 'webApp.controllers'])
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