(function (directives) {

    directives.directive('panel', function () {
        return {
            restrict: 'E',
            transclude: true,
            template: '<div class="panel panel-default"><div class="panel-body" ng-transclude></div></div>'
        }
    });

})(appModules.directives);