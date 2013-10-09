/**
 * Bootstrap panel directive.
 *
 * @class panel
 * @module webapp.javascript.directives.windows
 */
(function (windows) {
    'use strict';

    windows.directive('panel', function () {
        return {
            restrict: 'EA',
            transclude: true,
            scope: { panelTitle: '@' },
            templateUrl: 'panel.html'
        };
    });

})(appModules.windows);