(function () {
    'use strict';

    describe('the nas location model:', function () {

        var injector, mockHttpBackend;
        var successfulObjectResponse = {httpStatus: 200, data: {id: 22, computerName: 'HAL9000', serverIp: '192.17.5.20'}};

        beforeEach(function () {

            injector = angular.injector(['ngMock', 'webApp.restModels']);

            mockHttpBackend = injector.get('$httpBackend');
        });

        describe('using a valid "get" request ', function () {

            it('should return a valid "nas-location" resource', function () {

                var NasLocationModel = injector.get('NasLocationModel'), nasLocation;

                mockHttpBackend.expectGET('/v1/api/csv/nas-locations/12').respond(200, successfulObjectResponse);

                nasLocation = NasLocationModel.get({id: 12});
            });
        });

        afterEach(function () {

            mockHttpBackend.flush();
            mockHttpBackend.verifyNoOutstandingExpectation();
            mockHttpBackend.verifyNoOutstandingRequest();
        });
    });
})();