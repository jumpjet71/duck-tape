/**
 * Bootstrap panel directive.
 *
 * @class panel
 * @module webapp.javascript.directives.windows
 */
(function (directives) {
    'use strict';

    directives.directive('sysPanelWindow', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {panelTitle: '@'},
            templateUrl: 'sys-panel-window.html'
        };
    });

})(appModules.directives);