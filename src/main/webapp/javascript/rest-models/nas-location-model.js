(function (restModels) {
    'use strict';

    restModels.factory('NasLocationModel', function ($resource) {

        return $resource('/v1/api/csv/nas-locations/:id', {id:'@id'});
    });

})(appModules.restModels);