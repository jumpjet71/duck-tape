(function () {
    'use strict';

    var expect = require('chai').expect,
        routesConfig = require('../../../main/resources/config/routes-config'),
        express = require('express'), app = express();

    describe('page router configuration:', function () {

        routesConfig.routes(app);

        describe('the home page controller', function () {

            it('should have the route "/"', function () {

                expect(app.routes.get[0].path).to.equal('/');
            });
        });

    });

})();