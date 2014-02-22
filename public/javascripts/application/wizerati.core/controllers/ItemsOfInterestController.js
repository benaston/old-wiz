(function (app) {
  'use strict';

  function ItemsOfInterestController(itemsOfInterestModel) {

    if (!(this instanceof app.ItemsOfInterestController)) {
      return new app.ItemsOfInterestController(itemsOfInterestModel);
    }

    var that = this,
        _itemsOfInterestModel = null;

    this.create = function (dto) {
      if (!dto) {
        throw 'dto not supplied.';
      }

      _itemsOfInterestModel.addItemOfInterest(dto.id);
    };

    //todo: result list items should be object literals like {id:'foo'}
    this.destroy = function (dto) {
      //take control of the rendering process here to avoid the jarring re-paint with a massively changed width

      _itemsOfInterestModel.removeItemOfInterest(dto.id);
    };

    function init() {
      if (!itemsOfInterestModel) {
        throw 'itemsOfInterestModel not supplied.';
      }

      _itemsOfInterestModel = itemsOfInterestModel;

      return that;
    }

    return init();
  }

  app.ItemsOfInterestController = ItemsOfInterestController;

}(wizerati));
