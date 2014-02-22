(function (app, $, invertebrate) {
  'use strict';

  function PurchasePanelModel() {

    if (!(this instanceof app.PurchasePanelModel)) {
      return new app.PurchasePanelModel();
    }

    var that = this,
        _activeTab = '0',
        _isWaiting = '', //should identify the dom element to indicate waiting
        _notifications = []; //eg. [{ type: 'formField', id: 'foo' }]

    this.updateEventUri = 'update://PurchasePanelModel/';

    this.getNotifications = function () {
      return _notifications;
    };

    this.setNotifications = function (value) {
      if (!value) {
        throw 'value not supplied.';
      }

      _notifications = value;
      $.publish(that.updateEventUri);
    };

    this.getIsWaiting = function () {
      return _isWaiting;
    };

    this.setIsWaiting = function (value, options) {
      options = options || { silent: false };

      if (!value) {
        throw 'value not supplied.';
      }

      _isWaiting = value;

      if (!options.silent) {
        $.publish(that.updateEventUri);
      }
    };

    this.getActiveTab = function () {
      return _activeTab;
    };

    this.setActiveTab = function (value) {
      if (!value) {
        throw 'value not supplied.';
      }

      _activeTab = value;
      $.publish(that.updateEventUri);
    };

    function init() {
      return that;
    }

    return init();
  }

  app.PurchasePanelModel = PurchasePanelModel;
  invertebrate.Model.isExtendedBy(app.PurchasePanelModel);

}(wizerati, $, invertebrate));
