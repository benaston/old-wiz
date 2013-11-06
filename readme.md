wizerati
========

http://pacific-plains-5947.herokuapp.com/

    git add -A && git commit -m "wip" &&  git push heroku master && git push origin master

##Launch Guide

1. Install base node modules for the application. To do this:

 - Copy the following into the root folder of the application:

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
 - 

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/benaston/wiz/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
