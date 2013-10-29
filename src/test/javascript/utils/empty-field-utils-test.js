(function () {
    'use strict';

    var expect = require('chai').expect,
        emptyFieldUtils = require('../../../main/javascript/utils/empty-field-utils').emptyFieldUtils;

    describe('when using the empty file utility:', function () {

        describe('the field removal function', function () {

            it('should remove selected field ', function () {

                var model = {id: 123, name: "Moe", sex: null}, result;

                result = emptyFieldUtils.removeEmpty(model);

                expect(result.id).to.equal(model.id);
            });
        });
    });

})();