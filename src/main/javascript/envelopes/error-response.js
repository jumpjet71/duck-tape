/**
 * The JSON single object response for 400, and 500 series HTTP status error codes.
 *
 * @class errorResponse
 * @module javascript.envelopes
 */
exports.errorResponse = (function () {
    'use strict';

    var Envelope = function (httpStatus, message, developerMessage, validationErrors) {

        /**
         * The status property is merely the same HTTP status
         * code in the response header.
         */
        this.httpStatus = httpStatus;
        /**
         * The message property is a nice human readable error message that can potentially be shown directly
         * to an application end user (not a developer). It should be friendly and easy to understand and convey
         * a concise reason as to why the error occurred. It should not contain technical information.
         */
        this.message = message;
        /**
         * All technical information that a developer calling the REST API might find useful.
         * Anything from line error numbers to limited stack traces.
         */
        this.developerMessage = developerMessage;
        /**
         * Validation errors for PUT, and POST requests.
         */
        this.validationErrors = validationErrors;
    };

    return {

        createResponse: function (httpStatus, message, developerMessage, validationErrors) {

            return new Envelope(httpStatus, message, developerMessage, validationErrors);
        }
    };
})();