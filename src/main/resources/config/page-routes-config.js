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
        windows = require('../../javascript/routes/windows'),
        grids = require('../../javascript/routes/grids'),
        charts = require('../../javascript/routes/charts');

    // Map URL routes to the appropriate controller display methods.
    app.get('/', controllers.index);
    app.get('/pages/windows', windows.show);
    app.get('/pages/grids', grids.show);
    app.get('/pages/charts', charts.show);
};