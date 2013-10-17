/**
 * NAS Resource model object.
 *
 * @class uuidUtils
 * @module webapp.javascript.restResources
 *
 */
(function (restResources) {
    'use strict';

    restResources.factory('nasLocationResource', function (baseResourceUtils) {

        baseResourceUtils.path = "/api/csv/nas-locations";

        return baseResourceUtils;
    });

})(appModules.restResources);