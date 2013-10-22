/**
 * Process all list object responses and create error and success objects as needed.
 *
 * @class listResponse
 * @module javascript.handlers
 */
exports.listResponse = (function () {
    'use strict';

    var successfulListResponse = require('../envelopes/successful-list-response.js').successFullListResponse,
        paginationCriteria = require('../envelopes/pagination-criteria').paginationCriteria,
        errorResponse = require('../envelopes/error-response').errorResponse, responseObject, paginationObject;

    return {

        processResponse: function (request, response, count, data) {

            response.set('Content-Type', 'application/json');

            if (data) {

                paginationObject = paginationCriteria.createCriteria(request.query.size, request.query.sort,
                    request.query.order, request.query.current, count);
                responseObject = successfulListResponse.createResponse(response.statusCode, data, paginationObject);
            }
            else {

                responseObject = errorResponse.create(404,
                    "The requested list of resources resource was not found",
                    "The requested list of resources does not match any of the resources that exist in the system data store.", null);

                response.status(404);
            }

            response.send(responseObject);
        }
    };
})();