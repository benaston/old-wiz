//(function (app) {
//  "use strict";
//
//  function ItemsController(uiRootModel, singleItemModel, itemRepository) {
//
//    if (!(this instanceof app.ItemsController)) {
//      return new app.ItemsController(uiRootModel, singleItemModel, itemRepository);
//    }
//
//    var that = this,
//        _uiModeEnum = wizerati.mod("enum").UIMode,
//        _uiRootModel = null,
//        _singleItemModel = null,
//        _itemRepository = null;
//
//    this.show = function (dto) {
//      try {
//        _uiRootModel.setUIMode(_uiModeEnum.SingleItem);
//        _itemRepository.getById(dto.id, function (item) {
//          _singleItemModel.setItem(item.id);
//        });
//      } catch (err) {
//        console.log("error: ItemsController.show. " + err);
//      }
//    };
//
//    this.uriTransformShow = function (uri, dto) {
//      return uri + '?id=' + encodeURIComponent(dto.id);
//    };
//
//    function init() {
//      if (!uiRootModel) {
//        throw "uiRootModel not supplied.";
//      }
//
//      if (!searchFormModel) {
//        throw "searchFormModel not supplied.";
//      }
//
//      if (!searchService) {
//        throw "searchService not supplied.";
//      }
//
//      if (!resultListModel) {
//        throw "resultListModel not supplied.";
//      }
//
//      _uiRootModel = uiRootModel;
//      _searchFormModel = searchFormModel;
//      _searchService = searchService;
//      _resultListModel = resultListModel;
//
//      return that;
//    }
//
//    return init();
//  }
//
//  app.ItemsController = ItemsController;
//
//}(wizerati));
//
//
////throw "script downloaded to be assigned to an object in a known location and then subsequently invoked by the search controller for wait, success, fail, timeout";
