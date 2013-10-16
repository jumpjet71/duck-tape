(function () {
    'use strict';

    describe('the main client side entry point', function () {

        beforeEach(function () {

            this.injector = angular.injector(['ng', 'webApp']);
        });

        it('should create a valid injector set with the proper defaults', function () {

            expect(this.injector).to.be.ok;
        });

        afterEach(function () {

            delete this.injector;
        });
    });

    describe('when loading the client side global namespace', function () {

        describe('the "appModules.utils" namespace', function () {

            it('should exist', function () {

                expect(appModules.utils).to.be.ok;
            });
        });

        describe('the "appModules.restResources" namespace', function () {

            it('should exist', function () {

                expect(appModules.restResources).to.be.ok;
            });
        });
    });

})();
