(function (app) {
    'use strict';

    app.controller("pagingGridExample", function ($scope) {

        $scope.pagingGridExampleColumns = [
            {label: "First Name", sort: true, dataIndex: "firstName"},
            {label: "Hero Name",  sort: true, dataIndex: "heroName"},
            {label: "Last Name",  sort: true, dataIndex: "lastName"},
            {label: "City",  sort: true, dataIndex: "city"}
        ];

        $scope.pagingGridExampleRows = [
            {firstName: "Clark", lastName: "Kent", heroName: "Superman", city: "Metropolis"},
            {firstName: "Bruce", lastName: "Wayne", heroName: "Batman", city: "Gotham City"},
            {firstName: "Diana", lastName: "Prince", heroName: "Wonder Woman", city: "Boston"},
            {firstName: "Tony", lastName: "Stark", heroName: "Iron Man", city: "San Jose"},
            {firstName: "Steve", lastName: "Rogers", heroName: "Captain America", city: "New York City"},
            {firstName: "Oliver", lastName: "Queen", heroName: "Green Arrow", city: "Starling City"},
            {firstName: "Victor", lastName: "Stone", heroName: "Cyborg", city: "New York City"},
            {firstName: "Vsl", lastName: "Jordan", heroName: "Green Lantern", city: "Coast City"}
        ];
    });

})(appModules.app);