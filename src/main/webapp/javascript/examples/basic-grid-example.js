(function (controllers) {
    'use strict';

    controllers.controller("basicGridExample", function ($scope) {

        $scope.dataGridColumns = [
            {name: "First Name"},
            {name: "Last Name"},
            {name: "Username"}
        ];
    });

})(appModules.controllers);