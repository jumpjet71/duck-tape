/**
 * General configuration properties for the service endpoint and database connectivity.
 * Corresponds to the defined "running modes" in the application.
 *
 * @class config
 * @module resources.config
 *
 */
exports.config = {
    test: {
        // The test UI REST endpoint definition.
        componentEndpoint: {
            port: 9090,
            host: "localhost",
            path: "/v1/api"
        }
    }
};