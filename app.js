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
        globals = require('./src/main/javascript/utils/globals-util').appGlobals,
        app = express();

    // General, boilerplate Express JS configuration that sets up
    // the locations of client and server source files.
    app.configure(function () {

        var port = 9090,
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
        app.use(express.session( { secret: 'b051f23bf3944d92b026ed36a1d3e003' } ));
        app.use(connect.compress());
        app.use(express.static(path.join(__dirname, srcClient)));
        app.use(express.static(path.join(__dirname, buildClient)));
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

        // Initialize Passport!
        // Use passport.session() middle ware, to support persistent login sessions.
        app.use(flash());
        app.use(passport.initialize());
        app.use(passport.session());

        // LESS configuration
        app.use(require('less-middleware')({ src: srcClient + '/webapp/stylesheets' }));

        app.use(app.router);
    });

    // Allow the running mode to be accessed by any node js module.
    globals.setMode(require('./src/main/javascript/utils/mode-parser-util.js').modeParser(process));

    // Create and run the server instance
    http.createServer(app).listen(app.get('port'), function () {

        console.log("Express server listening on port " + app.get('port') + ", running in " + globals.getMode() + " mode.");
    });

})();


