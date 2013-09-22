/**
 * Angular JS directive for a bootstrap panel.
 *
 * @class panel
 * @module webapp.javascript.directives.windows
 */
(function (directives) {

    directives.directive('panel', function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'panel.html'
        };
    });

})(appModules.directives);