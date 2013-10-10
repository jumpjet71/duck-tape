(function (restModels) {
    'use strict';

    restModels.factory('nasLocationModel', function ($http) {

        var url = "/v1/api/csv/nas-locations", model, httpStatus;

        return {

            getModel: function () {

                return model;
            },
            getResource: function (id) {

                return $http.get(url + "/" + id).success(function (response) {

                    httpStatus = response.httpStatus;
                    model = response.data;
                });
            }
        }
    });

})(appModules.restModels);