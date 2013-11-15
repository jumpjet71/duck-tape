/**
 * Bootstrap panel directive.
 *
 * @class panel
 * @module webapp.javascript.directives.grids
 */
(function (directives) {
    'use strict';

    directives.directive('sysDataGrid', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {gridTitle: '@', gridPagination: '@', gridColumns: '=', gridRows: '='},
            templateUrl: 'sys-data-grid.html'
        };
    });

})(appModules.directives);