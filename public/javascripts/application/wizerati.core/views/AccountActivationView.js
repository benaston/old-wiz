(function (app, $, invertebrate) {
  'use strict';

  function AccountActivationView(model) {

    if (!(this instanceof app.AccountActivationView)) {
      return new app.AccountActivationView(model);
    }

    var that = this,
        _el = '#activation-panel';

    this.$el = null;
    this.Model = null;

    this.render = function () {
    };

    this.bindEvents = function () {
    };

    this.onDomReady = function () {
      that.$el = $(_el);
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      that.Model = model;

      $.subscribe(that.Model.updateEventUri, that.render);

      return that;
    }

    return init();
  }

  app.AccountActivationView = AccountActivationView;
  invertebrate.View.isExtendedBy(app.AccountActivationView);

}(wizerati, $, invertebrate));
