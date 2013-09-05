/**
 *
 * The main home landing page for the UI component service.
 *
 * @class home
 * @module javascript.routes
 *
 * @param {Object} request Express JS request object.
 * @param {Object} response Express JS response object.
 */
exports.index = function (request, response) {
    'use strict';

    response.render('pages/index', { title: 'Home' });
};