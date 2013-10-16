/**
 *
 * NAS Resource model object.
 *
 * @class uuidUtils
 * @module webapp.javascript.restResources
 *
 */
(function (restResources) {
    'use strict';

    restResources.factory('nasLocationResource', function (baseResource) {

        baseResource.url = "/v1/api/csv/nas-locations";

        return baseResource;
    });

})(appModules.restResources);