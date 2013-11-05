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

        processResponse: function (request, response, count, pagination, data) {

            response.set('Content-Type', 'application/json');

            if (data) {

                paginationObject = paginationCriteria.createCriteria(pagination.size, pagination.sort,
                    pagination.order, pagination.current, count);

                responseObject = successfulListResponse.createResponse(response.statusCode, data, paginationObject);
            }
            else {

                responseObject = errorResponse.createResponse(404,
                    "The requested list of resources resource was not found",
                    "The requested list of resources does not match any of the resources that exist in the system data store.", null);

                response.status(404);
            }

            response.send(responseObject);
        }
    };
})();