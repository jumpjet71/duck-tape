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
            template: '<div id="{{ basic-panel-example }}" class="panel panel-default"><div class="panel-body" ng-transclude></div></div>'
        };
    });

})(appModules.directives);