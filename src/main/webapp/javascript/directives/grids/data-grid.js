/**
 * Bootstrap panel directive.
 *
 * @class panel
 * @module webapp.javascript.directives.grids
 */
(function (directives) {
    'use strict';

    directives.directive('grid', function () {
        return {
            restrict: 'E',
            templateUrl: 'data-grid.html',
            replace: true
        };
    });

})(appModules.directives);