/**
 * The NAS resource class factory.
 *
 * @class nasLocationResource
 * @module webapp.javascript.restResources
 *
 */
(function (restResources) {
    'use strict';

    restResources.factory('nasLocationResource', function (baseResourceUtils) {

        var Resource = function () {

            baseResourceUtils.url.path = "/api/csv/nas-locations";

            return baseResourceUtils;
        };

        return {

            createResourceObject: function () {

                return new Resource();
            }
        };
    });

})(appModules.restResources);