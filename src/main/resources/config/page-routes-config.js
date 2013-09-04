/**
 * This module is responsible for configuring and loading the page
 * level controllers (routes). Each page has a separate, jade template
 * along with a separate, server side JS controller class.
 *
 * @class pageRoutesConfig
 * @module resources.config
 * @param {Object} app The Express JS app object.
 */
exports.pageRoutesConfig = function (app) {
    'use strict';

    // Load all of the route controllers
    var controllers = require('../../javascript/routes/index'),
        home = require('../../javascript/routes/home');

    // Map URL routes to the appropriate controller display methods.
    app.get('/', controllers.index);
    app.get('/pages/home', home.show);
};