(function (app) {
  'use strict';

  function AccountService(wizeratiClient) {

    if (!(this instanceof app.AccountService)) {
      return new app.AccountService(wizeratiClient);
    }

    var that = this,
        _wizeratiClient = null;

    this.create = function (name, email, options) {
      if (!options) {
        throw 'options not supplied.';
      }

      if (!options.success) {
        throw 'options.success not supplied.';
      }

      if (!options.fail) {
        throw 'options.fail not supplied.';
      }

      if (!options.wait) {
        throw 'options.wait not supplied.';
      }

      var entity = new app.AccountEntity();
      entity.name = name;
      entity.email = email;
      options.wait();
      setTimeout(function () {
        options.success();
      }, 3000);
      //_wizeratiClient.Put(entity, options);
    };

    function init() {
      if (!wizeratiClient) {
        throw 'wizeratiClient not supplied';
      }

      _wizeratiClient = wizeratiClient;

      return that;
    }

    return init();
  }

  app.AccountService = AccountService;

}(wizerati));
