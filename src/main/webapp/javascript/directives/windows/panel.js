/**
 * Bootstrap panel directive.
 *
 * @class panel
 * @module webapp.javascript.directives.windows
 */
(function (directives) {
    'use strict';

    directives.directive('panel', function () {
        return {
            restrict: 'EA',
            transclude: true,
            scope: { panelTitle: '@' },
            templateUrl: 'panel.html'
        };
    });

})(appModules.directives);