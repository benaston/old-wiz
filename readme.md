wizerati
========

*Please note: I intend to move the JavaScript in this application to be more idiomatic, adding methods to the prototype object instead of the actual objects themselves, but this is not high on my list of things to do at the moment.*

Wizerati is an ongoing experimental project for me to test out user interface ideas and hone my skills developing JavaScript-heavy single-page web applications.

You can find a version of it online here (please note it has not been made cross-browser compatible yet, please use Chrome or Safari):

http://pacific-plains-5947.herokuapp.com/


Wizerati is based on my open source css bootstrap (lucid.css)[1].

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

[1] https://github.com/dscape/nano
git add -A && git commit -m "wip" &&  git push heroku master && git push origin master

common.js has useful library functions for things like interfacing with CouchDBB: http://wiki.commonjs.org/wiki/CommonJS.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/benaston/wiz/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

