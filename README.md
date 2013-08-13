# Duck Tape

A User Interface Components As-A-Service Experiment.

## The Tech
The "glue code" libraries being used:

* [Node JS](http://nodejs.org/) for HTTP serving and server side javascript moduling.
* [Node Package Modules](https://npmjs.org/) for server JS package managing.
* [Git](http://git-scm.com/) for source controlling.
* [Express JS](http://www.expressjs.com/) for javascript web application structuring.
* [Jade](http://www.jade-lang.com/) for server side templating.
* [Angular JS](http://angularjs.org/) for client MVCing.
* [Bootstrap](http://twitter.github.com/bootstrap/) for client side web developing.
* [Grunt JS](http://www.gruntjs.com/) for server and client JS building and tasking.
* [Mocha](http://visionmedia.github.io/mocha/) for JS unit testing.
* [Chai](http://chaijs.com/) for JS unit test asserting.

## Installing The Duck Tape Project

The Duck Tape project depends on [Node](http://nodejs.org/) and [NPM](http://npmjs.org/).

### Installing project runtime

1) Install [Node JS](http://nodejs.org/) with NPM. 

### Installing project dependencies

From the current project directory, run the following commands:

1) Install the grunt CLI

	npm install grunt-cli -g

2) Install bower client JS package manager

	npm install bower -g

3) Install the client JS dependencies listed in the current directory's bower.json

	bower install

4) Install the server JS dependencies listed in the current directory's package.json

	npm install

## License
Copyright 2012 Teloslogic, under the [MIT License](LICENSE).
