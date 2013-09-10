/**
 * This module is responsible for configuring and loading the stage page
 * level controllers (routes). Each page has a separate, jade template
 * along with a separate, server side JS controller class.
 *
 * @class stageRoutesConfig
 * @module resources.config
 * @param {Object} app The Express JS app object.
 */
exports.stageRoutesConfig = function (app) {
    'use strict';

    // Map URL routes to the appropriate controller display methods.
    app.get('/', function (request, response) {

        response.render('stages/home', { title: 'Home', pageMainMenuModel: {home: 'active'}});
    });

    app.get('/stages/home', function (request, response) {

        response.render('stages/home', { title: 'Home', pageMainMenuModel: {home: 'active'}});
    });

    app.get('/stages/windows', function (request, response) {

        response.render('stages/windows', { title: 'Windows', pageMainMenuModel: {windows: 'active'}});
    });

    app.get('/stages/grids', function (request, response) {

        response.render('stages/grids', { title: 'Data Grids', pageMainMenuModel: {grids: 'active'} });
    });

    app.get('/stages/forms', function (request, response) {

        response.render('stages/forms', { title: 'Forms', pageMainMenuModel: {forms: 'active'} });
    });

    app.get('/stages/charts', function (request, response) {

        response.render('stages/charts', { title: 'Charts', pageMainMenuModel: {charts: 'active'} });
    });

    app.get('/stages/services', function (request, response) {

        response.render('stages/services', { title: 'Windows', pageMainMenuModel: {home: 'active'} });
    });
};