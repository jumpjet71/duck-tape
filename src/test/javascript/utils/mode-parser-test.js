(function () {
    'use strict';

    var expect = require('chai').expect,
        mode = require('../../../main/javascript/utils/mode-parser');

    describe('running mode configuration:', function () {

        describe('the default running mode configuration', function () {

            it('should be "test"', function () {

                expect(mode.modeParser(process)).to.equal('test');
            });
        });

        describe('the development running mode configuration', function () {

            it('should be "dev"', function () {

                process.env.NODE_JS_MODE = 'dev';

                expect(mode.modeParser(process)).to.equal('dev');
            });
        });

        describe('the production running mode configuration', function () {

            it('should be "prod"', function () {

                process.env.NODE_JS_MODE = 'prod';

                expect(mode.modeParser(process)).to.equal('prod');
            });
        });
    });

})();