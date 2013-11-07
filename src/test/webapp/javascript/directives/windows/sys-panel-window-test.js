(function () {
    'use strict';

    describe('the sys panel window directive:', function () {

        var element, scope, compile, injector;

        beforeEach(function () {

            injector = angular.injector(['ng']);

            scope = injector.get('$rootScope').$new();
            compile = injector.get('$compile');
            element = angular.element('<div class="panel panel-default"><div class="panel-body"></div></div>');
            compile(element)(scope);
            scope.$digest();
        });

        it('has a "panel" css class', function () {

            expect(element.hasClass('panel')).to.equal(true);
        });
    });
})();