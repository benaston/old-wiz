$(function () {
  'use strict';

  //dom binding
  window.wizerati.instance = new wizerati.App(window.invertebrate.env.dev, new window.invertebrate.Router('Wizerati'));

  _.each(window.wizerati.mod('views'), function (v) {
    v.onDomReady();
  });

  //this should happen at the end here to ensure everything is initialized before routing begins
  new wizerati.RouteRegistrar().registerRoutes(window.wizerati.instance);
});