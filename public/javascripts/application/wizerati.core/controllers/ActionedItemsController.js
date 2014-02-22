(function (app) {
  'use strict';

  function ActionedItemsController(actionedItemsModel) {

    if (!(this instanceof app.ActionedItemsController)) {
      return new app.ActionedItemsController(actionedItemsModel);
    }

    var that = this,
        _actionedItemsModel = null;

    this.create = function (dto) {
      if (!dto) {
        throw 'dto not supplied.';
      }

      _actionedItemsModel.addActionedItemId(dto.id);
    };

    this.destroy = function (dto) {

      _actionedItemsModel.removeActionedItemId(dto.id);
    };

    function init() {
      if (!actionedItemsModel) {
        throw 'actionedItemsModel not supplied.';
      }

      _actionedItemsModel = actionedItemsModel;

      return that;
    }

    return init();
  }

  app.ActionedItemsController = ActionedItemsController;

}(wizerati));
