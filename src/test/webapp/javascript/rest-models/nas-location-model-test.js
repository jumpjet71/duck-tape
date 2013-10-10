(function () {
    'use strict';

    describe('the nas location model:', function () {

        var injector, mockHttpBackend,
            newObjectRequest = {data: {computerName: 'HAL9000', serverIp: '192.17.5.20'}},
            successfulObjectResponse = {httpStatus: 200, data: {id: 12, computerName: 'HAL9000', serverIp: '192.17.5.20'}};

        beforeEach(function () {

            injector = angular.injector(['ngMock', 'webApp.restModels']);
            mockHttpBackend = injector.get('$httpBackend');
        });

        it('should return a status of 200 along with a valid resource when performing a valid GET request', function () {

            var nasLocationModel = injector.get('nasLocationModel');

            mockHttpBackend.expectGET('/v1/api/csv/nas-locations/12').respond(200, successfulObjectResponse);

            nasLocationModel.getResource(successfulObjectResponse.data.id).success(function () {

                expect(nasLocationModel.getModel().id).to.equal(successfulObjectResponse.data.id);
            });
        });

        it('should return a status of 201 along with a valid resource when performing a valid POST request', function () {

            var nasLocationModel = injector.get('nasLocationModel');

            mockHttpBackend.expectPOST('/v1/api/csv/nas-locations').respond(201, successfulObjectResponse);

            nasLocationModel.postResource(newObjectRequest).success(function () {

                expect(nasLocationModel.getModel().id).to.equal(successfulObjectResponse.data.id);
            });
        });

        afterEach(function () {

            mockHttpBackend.flush();
            mockHttpBackend.verifyNoOutstandingExpectation();
            mockHttpBackend.verifyNoOutstandingRequest();
        });
    });
})();