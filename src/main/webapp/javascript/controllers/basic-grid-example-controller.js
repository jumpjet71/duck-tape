(function (controllers) {
    'use strict';

    alert('test');

    controllers.controller("basicGridExampleController", function ($scope) {

        $scope.basicGridExampleColumns = [
            {label: "First Name"},
            {label: "Last Name"},
            {label: "Username"}
        ];

    });

})(appModules.controllers);