# Duck Tape

A User Interface as a Service (UIaaS) implementation.
Duck tape allows developers to utilize pre-built components to create their UI within a web based application.

## The Tech

The "glue code" libraries being used:

* [Node JS](http://nodejs.org/) for HTTP serving and server JS moduling.
* [Node Package Modules](https://npmjs.org/) for server JS package managing.
* [Git](http://git-scm.com/) for source controlling.
* [Express JS](http://www.expressjs.com/) for javascript web application structuring.
* [Jade](http://www.jade-lang.com/) for server side templating.
* [Angular JS](http://angularjs.org/) for client side MVCing.
* [Bootstrap](http://twitter.github.com/bootstrap/) for client side web developing.
* [Grunt](http://www.gruntjs.com/) for server and client JS building and tasking.
* [Bower](http://bower.io/) for web package managing.
* [Mocha](http://visionmedia.github.io/mocha/) for JS unit testing.
* [Chai](http://chaijs.com/) for unit test asserting.

## Installing Project

The Duck Tape project depends on [Node](http://nodejs.org/) and [NPM](http://npmjs.org/).

### Prerequisite Instillation

1) Install [Node JS](http://nodejs.org/).

2) Install [Git](http://git-scm.com/).

3) Clone the `duck-tape` repository:

    git clone git://192.168.0.34/exports/duck-tape.git

### Quick First Time Project Setup

From the `duck-tape` project directory , run the following commands:

1) Install the [Grunt CLI](https://github.com/gruntjs/grunt-cli) and the [Bower CLI](http://sindresorhus.com/bower-components/) dependencies:

	npm install grunt-cli bower -g

2) Install all of the client JS dependencies:

	bower install

3) Install all of the server JS dependencies:

	npm install

## License
Copyright 2012 under the [MIT License](LICENSE).
