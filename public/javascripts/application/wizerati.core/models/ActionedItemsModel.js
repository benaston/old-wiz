(function (app, $, invertebrate) {
  'use strict';

  function ActionedItemsModel() {

    if (!(this instanceof app.ActionedItemsModel)) {
      return new app.ActionedItemsModel();
    }

    var that = this,
        _actionedItems = {};

    this.updateEventUri = 'update://ActionedItemsModel/';

    this.isActioned = function (id) {
      return !!_actionedItems[id];
    };

    this.addActionedItemId = function (value) {
      _actionedItems[value] = value;

      $.publish(that.updateEventUri);
    };

    this.removeActionedItemId = function (value) {
      delete _actionedItems[value];

      $.publish(that.updateEventUri);
    };

    function init() {
      return that;
    }

    return init();
  }

  app.ActionedItemsModel = ActionedItemsModel;
  invertebrate.Model.isExtendedBy(app.ActionedItemsModel);

}(wizerati, $, invertebrate));
