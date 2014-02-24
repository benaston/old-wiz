(function (app) {
  'use strict';

  function HomeController(uiRootModel, searchPanelModel, resultListModel) {

    if (!(this instanceof app.HomeController)) {
      return new app.HomeController(uiRootModel, searchPanelModel, resultListModel);
    }

    var that = this,
        _uiRootModel = null,
        _searchPanelModel = null,
        _resultListModel = null,
        _uiModeEnum = wizerati.mod('enum').UIMode,
        _searchPanelModeEnum = wizerati.mod('enum').SearchPanelMode,
        _resultListModeEnum = wizerati.mod('enum').ResultListMode;


    this.index = function () {
      try {
        _uiRootModel.setUIMode(_uiModeEnum.GreenfieldSearch, {silent: true}); //todo: retrieve state from local state bag
        _searchPanelModel.setMode(_searchPanelModeEnum.Default, {silent: false});
        _resultListModel.setMode(_resultListModeEnum.Default, {silent: false});
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

      if (!resultListModel) {
        throw 'resultListModel not supplied.';
      }

      _uiRootModel = uiRootModel;
      _searchPanelModel = searchPanelModel;
      _resultListModel = resultListModel;

      return that;
    }

    return init();
  }

  app.HomeController = HomeController;

}(wizerati));
