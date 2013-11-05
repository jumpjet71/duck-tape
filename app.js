/**
 * Main application entry file.
 *
 * NOTE: The order of module loading is important. Randomly changing
 * the order of the module loading could result catastrophic exceptions.
 */
(function () {
    'use strict';

    // Load required modules
    var express = require('express'),
        flash = require('connect-flash'),
        connect = require('connect'),
        http = require('http'),
        path = require('path'),
        passport = require('passport'),
        globals = require('./src/main/javascript/utils/globals-utils').globalsUtils,
        config = require('./src/main/resources/config/config').config,
        errorResponse = require('./src/main/javascript/envelopes/error-response').errorResponse,
        app = express();

    // Allow the running mode to be accessed by any node js module.
    globals.setMode(require('./src/main/javascript/utils/mode-parser-utils').modeParserUtils(process));

    // General, boilerplate Express JS configuration that sets up
    // the locations of client and server source files.
    app.configure(function () {

        var port = config[globals.getMode()].s2RestEndpoint.port,
            srcMain = '/src/main',
            buildMain = '/dist/main',
            srcClient = srcMain + '/webapp',
            buildClient = buildMain + '/webapp';

        app.set('port', process.env.NODE_JS_PORT || port);
        app.set('views', __dirname + srcClient + '/views');
        app.set('view engine', 'jade');
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser());
        app.use(express.session({ secret: 'b051f23bf3944d92b026ed36a1d3e003' }));
        app.use(connect.compress());

        app.use(express.static(path.join(__dirname, srcClient)));
        app.use(express.static(path.join(__dirname, buildClient)));
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

        // Initialize Passport!
        // Use passport.session() middle ware, to support persistent login sessions.
        app.use(flash());
        app.use(passport.initialize());
        app.use(passport.session());

        app.use(app.router);
    });

    // Configure data store and store it's instance as global pointer.
    globals.setDataStore(require('./src/main/resources/config/in-memory-data-store-config').configInMemoryDataStore());

    // Express JS staging pages route (controller) configuration
    require('./src/main/resources/config/stage-routes-config').stageRoutesConfig(app);

    // Configure NAS location service endpoints.
    require('./src/main/resources/config/nas-location-config').configNasLocation(app, globals.getMode());

    // Generic 404 error handling
    app.use(function (request, response) {

        response.status(404);
        response.set('Content-Type', 'application/json');
        response.send(errorResponse.createResponse(404, "The requested resource was not found",
            "The resource URL is malformed and does not match the location of any resources in the system", null));
    });

    // Create and run the server instance
    http.createServer(app).listen(app.get('port'), config[globals.getMode()].s2RestEndpoint.host, function () {

        console.log("Express server listening on port " + app.get('port') + ", running in " + globals.getMode() + " mode.");
    });
})();


