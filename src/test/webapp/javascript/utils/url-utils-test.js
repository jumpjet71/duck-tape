(function () {
    'use strict';

    describe('for urlUtils:', function () {

        var injector;

        beforeEach(function () {

            injector = angular.injector(['webApp.utils']);
        });

        describe('the getUrl method', function () {

            it('should return "http://localhost:9090/v1/test" using default settings and path set to "test" ', function () {

                var urlUtils = injector.get('urlUtils');

                urlUtils.path = "/test";

                expect(urlUtils.getUrl()).to.equal("http://localhost:9090/v1/test");
            });

            it('should return "http://localhost:9090/v42/test" using default settings and path set to "test" and version changed ', function () {

                var urlUtils = injector.get('urlUtils');

                urlUtils.path = "/test";
                urlUtils.version = "v42";

                expect(urlUtils.getUrl()).to.equal("http://localhost:9090/v42/test");
            });
        });

        afterEach(function () {

            injector = null;
        });
    });
})();