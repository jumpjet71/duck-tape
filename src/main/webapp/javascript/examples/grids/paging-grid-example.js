(function (app) {
    'use strict';

    app.controller("pagingGridExample", function ($scope) {

        $scope.pagingGridExampleColumns = [
            {label: "First Name", sort: true, dataIndex: "firstName"}
            ,{label: "Last Name",  sort: true, dataIndex: "lastName"}
            ,{label: "Hero Name",  sort: true, dataIndex: "heroName"}
            ,{label: "City",  sort: true, dataIndex: "city"}
        ];

        $scope.pagingGridExampleRows = [
            {firstName: "Clark", lastName: "Kent", heroName: "Superman", city: "Metropolis"}
            ,{firstName: "Bruce", lastName: "Wayne", heroName: "Batman", city: "Gotham City"}
            ,{firstName: "Diana", lastName: "Prince", heroName: "Wonder Woman", city: "Boston"}
            ,{firstName: "Tony", lastName: "Stark", heroName: "Iron Man", city: "San Jose"}
        ];
    });

})(appModules.app);