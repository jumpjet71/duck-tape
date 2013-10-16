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

    restModels.factory('nasLocationModel', function ($http, restResource) {

        var url = "/v1/api/csv/nas-locations";

        return {

            getResource: function (id) {

                return restResource.getResource(this, url, id);
            },
            postResource: function (data) {

                return restResource.postResource(this, url, data);
            }
        }
    });

})(appModules.restModels);