/**
 * Process all single object responses and creates error and success objects as needed.
 *
 * @class singleResponse
 * @module javascript.handlers
 */
exports.singleDeleteResponse = (function () {
    'use strict';

    var successfulResponse = require('../envelopes/successful-object-response').successFullObjectResponse,
        deleteResponse = require('../envelopes/delete-response').deleteResponse,
        errorResponse = require('../envelopes/error-response').errorResponse, responseObject;

    return {

        processResponse: function (request, response) {

            response.set('Content-Type', 'application/json');

            if (request.params.id) {

                responseObject = successfulResponse.createResponse(response.statusCode, deleteResponse.createResponse(request.params.id, true));
            }
            else {

                responseObject = errorResponse.createResponse(404,
                    "The requested resource was not found",
                    "The resource with the id " + request.params.id + " does not match any of the resources that exist in the system data store.", null);

                response.status(404);
            }

            response.send(responseObject);
        }
    };
})();