/**
 * This is the JSON list response that is returned only for 200, and 201 HTTP status codes.
 *
 * @class successFullListResponse
 * @module javascript.envelopes
 */
exports.successFullListResponse = (function () {
    'use strict';

    var Envelope = function (httpStatus, data, paginationCriteria) {

        /**
         * The status property is merely the same HTTP status
         * code in the response header.
         */
        this.httpStatus = httpStatus;
        /**
         * The JSON array representing a list of endpoint resources.
         */
        this.data = httpStatus;
        /**
         * The pagination criteria used to construct this response.
         */
        this.paginationCriteria = paginationCriteria;
    };

    return {

        create: function (httpStatus, data, paginationCriteria) {

            return new Envelope(httpStatus, data, paginationCriteria);
        }
    };
})();