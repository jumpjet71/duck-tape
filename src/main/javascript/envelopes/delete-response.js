/**
 * The JSON single object deletion.
 *
 * @class deleteResponse
 * @module javascript.envelopes
 */
exports.deleteResponse = (function () {
    'use strict';

    var Envelope = function (id, deleted) {

        /**
         * The resource id the deleted resource
         */
        this.id = id;
        /**
         * The object was successfully deleted
         */
        this.deleted = deleted;
    };

    return {

        createResponse: function (id, deleted) {

            return new Envelope(id, deleted);
        }
    };
})();