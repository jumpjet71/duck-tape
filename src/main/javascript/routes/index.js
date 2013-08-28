/**
 *
 * The main index, landing page for the UI component
 * service
 *
 * @class index
 * @module javascript.routes
 *
 * @param {Object} request Express JS request object.
 * @param {Object} response Express JS response object.
 */
exports.index = function (request, response) {
    'use strict';

    response.render('index', { title: 'Home' });
};