(function () {
    'use strict';

    describe('for urlConfigUtils:', function () {

        var injector;

        beforeEach(function () {

            injector = angular.injector(['webApp.utils']);
        });

        describe('the getUrl method', function () {

            it('should return "http://localhost:9090/v1/test" using default settings and path set to "test" ', function () {

                var urlConfigUtils = injector.get('urlConfigUtils');

                urlConfigUtils.path = "/test";

                expect(urlConfigUtils.getUrl()).to.equal("http://localhost:9090/v1/test");
            });

            it('should return "http://localhost:9090/v42/test" using default settings and path set to "test" and version changed "v42" ', function () {

                var urlConfigUtils = injector.get('urlConfigUtils');

                urlConfigUtils.urlPrefix = "http://localhost:9090/v42";
                urlConfigUtils.path = "/test";

                expect(urlConfigUtils.getUrl()).to.equal("http://localhost:9090/v42/test");
            });
        });

        afterEach(function () {

            injector = null;
        });
    });
})();