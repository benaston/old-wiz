jQuery(document).ready(function () {
    "use strict";

	//throw "base ui mode should be maintained, and closing of a modal causes reversion to this state";
    FastClick.attach(document.body);
    //dom binding
    window.wizerati.instance = new wizerati.App(invertebrate.env.dev);

    _.each(window.wizerati.mod("views"), function(v){
        v.onDomReady();
    });

    //this should happen at the end here to ensure everything is initialized before routing begins
    window.wizerati.instance.router = new invertebrate.Router('Wizerati');
    window.wizerati.instance.registerRoutes();
});



