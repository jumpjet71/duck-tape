(function () {
    'use strict';

    describe('the nas location model:', function () {

        var injector, mockHttpBackend,
            successfulObjectResponse = {httpStatus: 200, data: {id: 12, computerName: 'HAL9000', serverIp: '192.17.5.20'}};

        beforeEach(function () {

            injector = angular.injector(['ngMock', 'webApp.restModels']);
            mockHttpBackend = injector.get('$httpBackend');
        });

        describe('using a valid "get" request ', function () {

            it('should return a valid "nas-location" resource', function () {

                var nasLocationModel = injector.get('nasLocationModel');

                mockHttpBackend.expectGET('/v1/api/csv/nas-locations/12').respond(successfulObjectResponse);

                nasLocationModel.getResource(successfulObjectResponse.data.id).success(function () {

                    expect(nasLocationModel.getModel().id).to.equal(successfulObjectResponse.data.id);
                });
            });
        });

        afterEach(function () {

            mockHttpBackend.flush();
            mockHttpBackend.verifyNoOutstandingExpectation();
            mockHttpBackend.verifyNoOutstandingRequest();
        });
    });
})();