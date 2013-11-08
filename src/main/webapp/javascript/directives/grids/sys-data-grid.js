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
            scope: { gridTitle: '@', gridPagination: '@' },
            templateUrl: 'sys-data-grid.html'
        };
    });

})(appModules.directives);