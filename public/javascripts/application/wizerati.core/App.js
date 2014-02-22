(function (app, invertebrate, _) {
  'use strict';

  console.log('apply should prompt the user for credentials if not signed in, otherwise present the fields for registration')
  function App(env, router) {
    if (!(this instanceof app.App)) {
      return new app.App(env, router);
    }

    var that = this;

    function init() {
      if (!env) {
        throw 'env not supplied';
      }

      if (!router) {
        throw 'router not supplied';
      }

      that.env = env;
      that.router = router;

      return _.extend(that, new invertebrate.App(app.mod('templates').TemplateUriHelper));
    }

    return init();
  }

  app.App = App;
}(wizerati, invertebrate, _));
