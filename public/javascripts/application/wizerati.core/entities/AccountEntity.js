(function (app) {
  'use strict';

  function AccountEntity() {

    if (!(this instanceof app.AccountEntity)) {
      return new app.AccountEntity();
    }

    var that = this,
        _loginService = null,
        _config = null;

    this.name = '';
    this.email = '';
  }

  app.AccountEntity = AccountEntity;

}(wizerati));
