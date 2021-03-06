(function () {
    'use strict';

    describe('the nas location resource:', function () {

        var injector, mockHttpBackend, nasLocationResource, newObjectRequest,
            successfulObjectResponse, successfulObjectListResponse, successfulDeletedObjectResponse;

        beforeEach(function () {

            injector = angular.injector(['ngMock', 'webApp.restResources']);
            mockHttpBackend = injector.get('$httpBackend');
            nasLocationResource = injector.get('nasLocationResource');

            newObjectRequest = {computerName: 'HAL9000', serverIp: '192.17.5.20'};
            successfulObjectResponse = {httpStatus: 200, data: {id: 12, computerName: 'HAL9000', serverIp: '192.17.5.20'}};
            successfulObjectListResponse = {httpStatus: 200, data: [{id: 12, computerName: 'HAL9000', serverIp: '192.17.5.20'}]};
            successfulDeletedObjectResponse = {httpStatus: 200, data: {id: 12, deleted: true}};
        });

        it('should return a status of 200 along with a valid resource when performing a valid GET request', function () {

            var nasLocation = nasLocationResource.createResourceObject();
            nasLocation.model.id = 12;

            mockHttpBackend.expectGET('http://localhost:9090/v1/api/csv/nas-locations/12').respond(200, successfulObjectResponse);

            nasLocation.getResource().then(function () {

                expect(nasLocation.model.id).to.equal(successfulObjectResponse.data.id);
                expect(nasLocation.httpStatus).to.equal(successfulObjectResponse.httpStatus);
            });
        });

        it('should return a status of 200 along with a valid list of resource when performing a valid GET list request', function () {

            var nasLocation = nasLocationResource.createResourceObject();

            nasLocation.paginationCriteria = {};

            mockHttpBackend.expectGET('http://localhost:9090/v1/api/csv/nas-locations').respond(200, successfulObjectListResponse);

            nasLocation.getAllResources().then(function () {

                expect(nasLocation.httpStatus).to.equal(successfulObjectListResponse.httpStatus);
            });
        });

        it('should return a status of 201 along with a valid resource when performing a valid POST request', function () {

            var nasLocation = nasLocationResource.createResourceObject();
            nasLocation.model.id = 12;

            successfulObjectResponse.httpStatus = 201;

            nasLocation.model = newObjectRequest;

            mockHttpBackend.expectPOST('http://localhost:9090/v1/api/csv/nas-locations').respond(201, successfulObjectResponse);

            nasLocation.createResource().success(function () {

                expect(nasLocation.model.id).to.equal(successfulObjectResponse.data.id);
                expect(nasLocation.httpStatus).to.equal(successfulObjectResponse.httpStatus);
            });
        });

        it('should return a status of 200 along with a valid resource when performing a valid PUT request', function () {

            var nasLocation = nasLocationResource.createResourceObject();

            nasLocation.model = successfulObjectResponse.data;
            nasLocation.model.id = 12;

            mockHttpBackend.expectPUT('http://localhost:9090/v1/api/csv/nas-locations/12').respond(200, successfulObjectResponse);

            nasLocation.updateResource().then(function () {

                expect(nasLocation.model.id).to.equal(successfulObjectResponse.data.id);
                expect(nasLocation.httpStatus).to.equal(successfulObjectResponse.httpStatus);
            });
        });

        it('should return a status of 200 along with a valid resource when performing a valid DELETE request', function () {

            var nasLocation = nasLocationResource.createResourceObject();
            nasLocation.model.id = 12;

            mockHttpBackend.expectDELETE('http://localhost:9090/v1/api/csv/nas-locations/12').respond(200, successfulDeletedObjectResponse);

            nasLocation.deleteResource().then(function () {

                expect(nasLocation.model.id).to.equal(successfulObjectResponse.data.id);
                expect(nasLocation.httpStatus).to.equal(successfulObjectResponse.httpStatus);
            });
        });

        afterEach(function () {

            mockHttpBackend.flush();
            mockHttpBackend.verifyNoOutstandingExpectation();
            mockHttpBackend.verifyNoOutstandingRequest();
        });
    });
})();