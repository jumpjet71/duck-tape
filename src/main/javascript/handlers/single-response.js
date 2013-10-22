/**
 * Process all single object responses and creates error and success objects as needed.
 *
 * @class singleResponse
 * @module javascript.handlers
 */
exports.singleResponse = (function () {
    'use strict';

    var successfulResponse = require('../envelopes/successful-object-response').successFullObjectResponse,
        errorResponse = require('../envelopes/error-response').errorResponse, responseObject;

    return {

        processResponse: function (request, response, data) {

            response.set('Content-Type', 'application/json');

            if (data) {

                responseObject = successfulResponse.create(response.statusCode, data);
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