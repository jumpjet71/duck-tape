(function() {
    'use strict';

    describe('the main client side entry point:', function () {

        beforeEach(function() {

            this.injector = angular.injector(['ng', 'webApp']);
        });

        describe('loading the main client entry point', function () {

            it('should create a valid injector set with the proper defaults', function() {

                expect(this.injector).to.be.ok;
            });
        });

        afterEach(function() {

            delete this.injector;
        });
    });

})();
