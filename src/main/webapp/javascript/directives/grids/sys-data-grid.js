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
            templateUrl: 'sys-data-grid.html',
            replace: true
        };
    });

})(appModules.directives);