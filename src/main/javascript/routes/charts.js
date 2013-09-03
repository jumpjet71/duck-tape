/**
 *
 * The chartslanding page for the UI component
 * service
 *
 * @class grids
 * @module javascript.routes
 *
 * @param {Object} request Express JS request object.
 * @param {Object} response Express JS response object.
 */
exports.show = function (request, response) {
    'use strict';

    response.render('pages/charts', { title: 'Charts' });
};