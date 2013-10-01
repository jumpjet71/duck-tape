/**
 * The JSON single object response that is returned only for 200, and 201 HTTP status codes.
 *
 * @class successFullObjectResponse
 * @module javascript.envelopes
 */
exports.successFullObjectResponse = (function () {
    'use strict';

    var Envelope = function (httpStatus, data) {

        /**
         * The status property is merely the same HTTP status
         * code in the response header.
         */
        this.httpStatus = httpStatus;
        /**
         * The JSON object representing the endpoint resource.
         */
        this.data = data;
    };

    return {

        create: function (httpStatus, data) {

            return new Envelope(httpStatus, data);
        }
    };
})();