# Duck Tape

 A User Interface as a Service (UIaaS) that allows developers to utilize pre-built components to create their own UI within an
 existing web application or conveniently build a new one. Components are implemented
 as [Angular JS](http://angularjs.org/) [Directives](http://docs.angularjs.org/guide/directive),
 and component dependencies are delivered as [REST services](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api).

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

### Requirements

1) Install [Node JS](http://nodejs.org/) and NPM (should come with Node).

2) Install [Git](http://git-scm.com/).

3) Clone the `duck-tape` repository:

    git clone git://192.168.0.34/exports/duck-tape.git

### Project Setup

From the `duck-tape` project directory , run the following commands:

1) Install [Grunt CLI](https://github.com/gruntjs/grunt-cli) and the [Bower CLI](http://sindresorhus.com/bower-components/) global dependencies:

	npm install grunt-cli bower -g

2) Install all of the local client side JavaScript dependencies:

	bower install

3) Install all of the local server side JavaScript dependencies:

	npm install

## License
Copyright 2013 under the [MIT License](LICENSE).
