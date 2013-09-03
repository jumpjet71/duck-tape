(function () {
    'use strict';

    var expect = require('chai').expect,
        routesConfig = require('../../../main/resources/config/page-routes-config'),
        express = require('express'), app = express();

    describe('page router configuration:', function () {

        routesConfig.pageRoutesConfig(app);

        describe('the index page controller', function () {

            it('should have the route "/"', function () {

                expect(app.routes.get[0].path).to.equal('/');
            });
        });

        describe('the windows page controller', function () {

            it('should have the route "/pages/windows"', function () {

                expect(app.routes.get[1].path).to.equal('/pages/windows');
            });
        });

        describe('the grids page controller', function () {

            it('should have the route "/pages/grids"', function () {

                expect(app.routes.get[2].path).to.equal('/pages/grids');
            });
        });

    });

})();