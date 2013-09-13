(function (app) {
    'use strict';

    app.controller('simplePanelController', function ($scope) {

        this.initialize = function() {

            var editor = ace.edit("simple-panel-html");
            editor.setTheme("ace/theme/tomorrow");
            editor.getSession().setMode("ace/mode/html");
        };

        this.initialize();

        return $scope.simplePanelController;
    });

})(appModules.app);