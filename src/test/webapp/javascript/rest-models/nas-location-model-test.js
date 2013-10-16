(function () {
    'use strict';

    describe('the nas location model:', function () {

        var injector, mockHttpBackend, nasLocationModel,
            newObjectRequest = {data: {computerName: 'HAL9000', serverIp: '192.17.5.20'}},
            successfulObjectResponse = {httpStatus: 200, data: {id: 12, computerName: 'HAL9000', serverIp: '192.17.5.20'}};

        beforeEach(function () {

            injector = angular.injector(['ngMock', 'webApp.restModels']);
            mockHttpBackend = injector.get('$httpBackend');
            nasLocationModel = injector.get('nasLocationModel');
        });

        it('should return a status of 200 along with a valid resource when performing a valid GET request', function () {

            mockHttpBackend.expectGET('/v1/api/csv/nas-locations/12').respond(200, successfulObjectResponse);

            nasLocationModel.getResource(successfulObjectResponse.data.id).success(function () {

                expect(nasLocationModel.model.id).to.equal(successfulObjectResponse.data.id);
                expect(nasLocationModel.httpStatus).to.equal(successfulObjectResponse.httpStatus);
            });
        });

        it('should return a status of 201 along with a valid resource when performing a valid POST request', function () {

            successfulObjectResponse.httpStatus = 201;

            mockHttpBackend.expectPOST('/v1/api/csv/nas-locations').respond(201, successfulObjectResponse);

            nasLocationModel.postResource(newObjectRequest).success(function () {

                expect(nasLocationModel.model.id).to.equal(successfulObjectResponse.data.id);
                expect(nasLocationModel.httpStatus).to.equal(successfulObjectResponse.httpStatus);
            });
        });

        it('should return a status of 200 along with a valid resource when performing a valid PUT request', function () {

            mockHttpBackend.expectPUT('/v1/api/csv/nas-locations/12').respond(200, successfulObjectResponse);

            nasLocationModel.putResource(successfulObjectResponse.data.id, newObjectRequest).success(function () {

                expect(nasLocationModel.model.id).to.equal(successfulObjectResponse.data.id);
                expect(nasLocationModel.httpStatus).to.equal(successfulObjectResponse.httpStatus);
            });
        });

        afterEach(function () {

            mockHttpBackend.flush();
            mockHttpBackend.verifyNoOutstandingExpectation();
            mockHttpBackend.verifyNoOutstandingRequest();
        });
    });
})();