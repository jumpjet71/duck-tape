/**
 * The NAS location REST endpoint.
 *
 * @class nasLocationService
 * @module javascript.services
 */
(function () {
    'use strict';

    /**
     * Find a NAS location resource using it's unique identifier.
     *
     * @method findNasLocationById
     *
     * @param {Object} request Express JS request object.
     * @param {Object} response Express JS request response.
     */
    exports.findNasLocationById = function (request, response) {
        response.set('Content-Type', 'application/json');


        response.send({id: 12, computerName: "serverZero", serverIp: "192.11.03.2", shareName: "shared" });
    };
})();