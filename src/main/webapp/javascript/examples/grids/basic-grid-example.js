(function (app) {
    'use strict';

    app.controller("basicGridExample", function ($scope) {

        $scope.basicGridExampleColumns = [
            {label: "First Name", sort: false, dataIndex: "firstName"},
            {label: "Last Name", sort: false, dataIndex: "lastName"},
            {label: "Username", sort: false, dataIndex: "userName"}
        ];

        $scope.basicGridExampleRows = [
            {firstName: "Austin", lastName: "Powers", userName: "apowers@mi6.gov"},
            {firstName: "James", lastName: "Bond", userName: "jbond@mi6.gov"},
            {firstName: "Sterling", lastName: "Archer", userName: "sarcher@isis.com"},
            {firstName: "Napoleon", lastName: "Solo", userName: "nsolo@uncle.gov"},
            {firstName: "James", lastName: "West", userName: "highRoller"}
        ];
    });

})(appModules.app);