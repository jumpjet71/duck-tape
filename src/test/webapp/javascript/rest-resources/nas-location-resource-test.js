(function () {
    'use strict';

    describe('the nas location resource:', function () {

        var injector, mockHttpBackend, nasLocationResource, newObjectRequest,
            successfulObjectResponse, successfulDeletedObjectResponse;

        beforeEach(function () {

            injector = angular.injector(['ngMock', 'webApp.restResources']);
            mockHttpBackend = injector.get('$httpBackend');
            nasLocationResource = injector.get('nasLocationResource');

            newObjectRequest = {data: {computerName: 'HAL9000', serverIp: '192.17.5.20'}};
            successfulObjectResponse = {httpStatus: 200, data: {id: 12, computerName: 'HAL9000', serverIp: '192.17.5.20'}};
            successfulDeletedObjectResponse = {httpStatus: 200, data: {id: 12, deleted: true}};
        });

        it('should return a status of 200 along with a valid resource when performing a valid GET request', function () {

            mockHttpBackend.expectGET('http://localhost:9090/v1/api/csv/nas-locations/12').respond(200, successfulObjectResponse);

            nasLocationResource.getResource(successfulObjectResponse.data.id).success(function () {

                expect(nasLocationResource.model.id).to.equal(successfulObjectResponse.data.id);
                expect(nasLocationResource.httpStatus).to.equal(successfulObjectResponse.httpStatus);
            });
        });

        it('should return a status of 201 along with a valid resource when performing a valid POST request', function () {

            successfulObjectResponse.httpStatus = 201;

            mockHttpBackend.expectPOST('http://localhost:9090/v1/api/csv/nas-locations').respond(201, successfulObjectResponse);

            nasLocationResource.postResource(newObjectRequest).success(function () {

                expect(nasLocationResource.model.id).to.equal(successfulObjectResponse.data.id);
                expect(nasLocationResource.httpStatus).to.equal(successfulObjectResponse.httpStatus);
            });
        });

        it('should return a status of 200 along with a valid resource when performing a valid DELETE request', function () {

            mockHttpBackend.expectDELETE('http://localhost:9090/v1/api/csv/nas-locations/12').respond(200, successfulDeletedObjectResponse);

            nasLocationResource.deleteResource(successfulObjectResponse.data.id).success(function () {

                expect(nasLocationResource.model.id).to.equal(successfulObjectResponse.data.id);
                expect(nasLocationResource.httpStatus).to.equal(successfulObjectResponse.httpStatus);
            });
        });

        afterEach(function () {

            mockHttpBackend.flush();
            mockHttpBackend.verifyNoOutstandingExpectation();
            mockHttpBackend.verifyNoOutstandingRequest();

            newObjectRequest = null;
            successfulObjectResponse = null;
            successfulDeletedObjectResponse = null;
        });
    });
})();