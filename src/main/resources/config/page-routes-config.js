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
    var controllers = require('../../javascript/routes/index');

    // Map URL routes to the appropriate controller display methods.
    app.get('/', controllers.index);

    app.get('/pages/home', function (request, response) {

        response.render('pages/home', { title: 'Home' });
    });

    app.get('/pages/windows', function (request, response) {

        response.render('pages/windows', { title: 'Windows' });
    });

    app.get('/pages/grids', function (request, response) {

        response.render('pages/grids', { title: 'Data Grids' });
    });

    app.get('/pages/forms', function (request, response) {

        response.render('pages/forms', { title: 'Forms' });
    });

    app.get('/pages/charts', function (request, response) {

        response.render('pages/charts', { title: 'Charts' });
    });

    app.get('/pages/services', function (request, response) {

        response.render('pages/services', { title: 'Windows' });
    });
};