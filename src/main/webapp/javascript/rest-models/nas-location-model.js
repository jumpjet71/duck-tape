/**
 *
 * NAS Resource model object.
 *
 * @class uuidUtils
 * @module webapp.javascript.utils
 *
 */
(function (restModels) {
    'use strict';

    restModels.factory('nasLocationModel', function ($http, baseResource) {

        baseResource.url = "/v1/api/csv/nas-locations";

        return baseResource;
    });

})(appModules.restModels);