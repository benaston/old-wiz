wizerati
========

*Please note: I intend to move the JavaScript in this application to be more idiomatic, adding methods to the prototype object instead of the actual objects themselves, but this is not high on my list of things to do at the moment.*

Wizerati is an ongoing experimental project for me to test out user interface ideas and hone my skills developing JavaScript-heavy single-page web applications.

You can find a version of it online here (please note it has not been made cross-browser compatible yet, please use Chrome or Safari):

http://pacific-plains-5947.herokuapp.com/


Wizerati is based on my open source CSS bootstrap lucid.css (https://github.com/benaston/lucid).

##Technical Details

###"Vendor" libraries:

- Underscore.js (string/collection utility methods)
- jQuery (DOM manipulation)
- TinyPubSub (string-based messaging)
- _Cookie.js (cookie manipulation)
- FastClick.js (click delay correction on touch devices - this is currently disabled)
- Invertebrate.js (client-side MVC, client-side routing, templating)

###Application Initialisation Sequence

1. Vendor libraries are included/initialised.
2. Root "namespace" object is created. The root object is `window.wizerati`, this forms a top-level "namespace" and is created in `public/javascripts/application/wizerati.js`. Everything in the application (apart from JavaScript from 3rd party vendors) hangs off this - both constructor functions and object instances required for application operation. This is therefore the first application object to be created.
3. All constructor functions known about at this point (models, views, controllers, services, repositories, caches and so on and so on) are registered with the root namespace object.
4. The runtime object-graph is then initialised ("wired-up") in modules.js, with dependencies between objects constructor-injected.
5. The application constructor function is registered with the root object (`App.js`). This inherits from invertebrate.App to gain easy access to client-side routing and templating.
6. The DOM is rendered.
7. The onDomReady function on all the views is invoked to give any functionality requiring the DOM to be built a chance to run before the user gets to use the application.
8. The application instance (i.e. the Wizerati invertebrate application) is instantiated in `appStart.js`, the router is initialised and then the routes are registered. Leaving router initialisation until this late stage ensures that the user will be unable to invoke routes before the application is ready to deal with the requests.

When initialised, the running instance of the application is located at `window.wizerati.instance`.

##Launch Guide

1. Install base node modules for the application. To do this:

 - Copy the following into a file named `package.json` the root folder of the application:

	{
	  "name": "application-name",
	  "version": "0.0.1",
	  "private": true,
	  "scripts": {
	    "start": "node App.js"
	  },
	  "dependencies": {
	    "express": "3.3.8",
	    "ejs": "*"
	  }
	}
	
 - Run `npm install` from the application directoy.	

2. Install the express executable. To do this:

 - Run `npm install -g express` 

3. Create application skeleton. To do this:

 - Run `express --ejs wizerati`

	add files

	install the npm packages

	express app (this runs it)

	git init 

	git add -A

	git commit -m "init"

	heroku create

	git push heroku master

	heroku logs (view)


More:

Express documentation: http://expressjs.com/guide.html

http://evanhahn.com/understanding-express-js/

##Working with couch:

 - https://github.com/dscape/nano

git add -A && git commit -m "wip" &&  git push heroku master && git push origin master

common.js has useful library functions for things like interfacing with CouchDBB: http://wiki.commonjs.org/wiki/CommonJS.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/benaston/wiz/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

