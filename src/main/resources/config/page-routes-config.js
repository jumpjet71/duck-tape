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

    // Map URL routes to the appropriate controller display methods.
    app.get('/', function (request, response) {

        response.render('pages/home', { title: 'Home', pageMainMenuModel: {home: 'active'}});
    });

    app.get('/pages/home', function (request, response) {

        response.render('pages/home', { title: 'Home', pageMainMenuModel: {home: 'active'}});
    });

    app.get('/pages/windows', function (request, response) {

        response.render('pages/windows', { title: 'Windows', pageMainMenuModel: {windows: 'active'}});
    });

    app.get('/pages/grids', function (request, response) {

        response.render('pages/grids', { title: 'Data Grids', pageMainMenuModel: {grids: 'active'} });
    });

    app.get('/pages/forms', function (request, response) {

        response.render('pages/forms', { title: 'Forms', pageMainMenuModel: {forms: 'active'} });
    });

    app.get('/pages/charts', function (request, response) {

        response.render('pages/charts', { title: 'Charts', pageMainMenuModel: {charts: 'active'} });
    });

    app.get('/pages/services', function (request, response) {

        response.render('pages/services', { title: 'Windows', pageMainMenuModel: {home: 'active'} });
    });
};