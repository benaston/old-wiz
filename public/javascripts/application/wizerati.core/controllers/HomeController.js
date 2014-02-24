(function (app) {
  'use strict';

  function HomeController(uiRootModel, searchPanelModel) {

    if (!(this instanceof app.HomeController)) {
      return new app.HomeController(uiRootModel, searchPanelModel);
    }

    var that = this,
        _uiRootModel = null,
        _searchPanelModel = null,
        _uiModeEnum = wizerati.mod('enum').UIMode,
        _searchPanelModeEnum = wizerati.mod('enum').SearchPanelMode;


    this.index = function () {
      try {
//                throw 'get redirection after purchase panel/destroy working';
        _searchPanelModel.setMode(_searchPanelModeEnum.Default, {silent: false});
        _uiRootModel.setUIMode(_uiModeEnum.GreenfieldSearch, {silent: true}); //todo: retrieve state from local state bag
        _uiRootModel.setModal(null);
      } catch (err) {
        console.log('error: HomeController.index. ' + err);
      }
    };

    function init() {
      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      if (!searchPanelModel) {
        throw 'searchPanelModel not supplied.';
      }

      _uiRootModel = uiRootModel;
      _searchPanelModel = searchPanelModel;

      return that;
    }

    return init();
  }

  app.HomeController = HomeController;

}(wizerati));
