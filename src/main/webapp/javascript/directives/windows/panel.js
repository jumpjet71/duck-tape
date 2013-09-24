/**
 * Bootstrap panel directive.
 *
 * @class panel
 * @module webapp.javascript.directives.windows
 */
(function (windows) {

    windows.directive('panel', function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'panel.html'
        };
    });

})(appModules.windows);