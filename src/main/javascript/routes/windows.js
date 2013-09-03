/**
 *
 * The window container landing page for the UI component
 * service
 *
 * @class windows
 * @module javascript.routes
 *
 * @param {Object} request Express JS request object.
 * @param {Object} response Express JS response object.
 */
exports.show = function (request, response) {
    'use strict';

    response.render('pages/windows', { title: 'Windows' });
};