(function (app) {
  'use strict';

  function HiddenItemsController(hiddenItemsModel) {

    if (!(this instanceof app.HiddenItemsController)) {
      return new app.HiddenItemsController(hiddenItemsModel);
    }

    var that = this,
        _hiddenItemsModel = null;

    this.create = function (dto) {
      if (!dto) {
        throw 'dto not supplied.';
      }

      _hiddenItemsModel.addHiddenItemId(dto.id);
    };

    this.destroy = function (dto) {

      _hiddenItemsModel.removeHiddenItemId(dto.id);
    };

    function init() {
      if (!hiddenItemsModel) {
        throw 'hiddenItemsModel not supplied.';
      }

      _hiddenItemsModel = hiddenItemsModel;

      return that;
    }

    return init();
  }

  app.HiddenItemsController = HiddenItemsController;

}(wizerati));
