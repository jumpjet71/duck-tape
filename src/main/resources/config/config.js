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
        // The test REST endpoint definition.
        s2RestEndpoint: {
            port: 9090,
            host: "localhost",
            path: "/v1"
        }
    }
};