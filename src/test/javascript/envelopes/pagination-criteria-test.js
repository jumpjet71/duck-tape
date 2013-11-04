(function () {
    'use strict';

    var expect = require('chai').expect,
        paginationCriteria = require('../../../main/javascript/envelopes/pagination-criteria').paginationCriteria;

    describe('when using the pagination criteria envelope:', function () {

        describe('creating a pagination criteria with correct values', function () {

            var total = 2, hasPreviousPage = false, hasNextPage = true, envelope = paginationCriteria.createCriteria(10, "name", true, 1, 12);

            it('should return a total with value ' + total, function () {

                expect(envelope.total).to.equal(total);
            });

            it('should return a hasPreviousPage with value ' + hasPreviousPage, function () {

                expect(envelope.hasPreviousPage).to.equal(hasPreviousPage);
            });

            it('should return a hasNextPage with value ' + hasNextPage, function () {

                expect(envelope.hasNextPage).to.equal(hasNextPage);
            });
        });

        describe('creating a pagination criteria with incorrect values', function () {

            var total = 1, envelope = paginationCriteria.createCriteria(-10, "name", true, 1, 200);

            it('should return a total with value ' + total, function () {

                expect(envelope.total).to.equal(total);
            });
        });
    });

})();