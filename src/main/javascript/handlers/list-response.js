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

                paginationObject = paginationCriteria.create(request.params.size, request.params.sort,
                    request.params.order, request.params.current, count);
                responseObject = successfulListResponse.create(response.statusCode, data, paginationCriteria);
            }
            else {

                responseObject = errorResponse.create(404,
                    "The requested resource was not found",
                    "The resource with the id " + request.params.id + " does not match any of the resources that exist in the system data store.", null);

                response.status(404);
            }

            response.send(responseObject);
        }
    };
})();