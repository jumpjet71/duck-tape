(function () {
    'use strict';

    var expect = require('chai').expect,
        routesConfig = require('../../../main/resources/config/stage-routes-config'),
        express = require('express'), app = express();

    describe('page router configuration:', function () {

        routesConfig.stageRoutesConfig(app);

        describe('the index page controller', function () {

            it('should have the route "/"', function () {

                expect(app.routes.get[0].path).to.equal('/');
            });
        });

        describe('the home page controller', function () {

            it('should have the route "/stages/home"', function () {

                expect(app.routes.get[1].path).to.equal('/stages/home');
            });
        });

        describe('the windows page controller', function () {

            it('should have the route "/stages/windows"', function () {

                expect(app.routes.get[2].path).to.equal('/stages/windows');
            });
        });

    });

})();