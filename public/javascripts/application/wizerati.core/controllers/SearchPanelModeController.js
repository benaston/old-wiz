(function (app) {
  'use strict';

  function SearchPanelModeController(searchPanelModel) {

    if (!(this instanceof app.SearchPanelModeController)) {
      return new app.SearchPanelModeController(searchPanelModel);
    }

    var that = this,
        _searchPanelModel = null;

    this.update = function (dto) {
      try {
        if (_searchPanelModel.getMode() !== dto.mode) {
          _searchPanelModel.setMode(dto.mode);
        }
      } catch (err) {
        console.log('error: SearchPanelController.update. ' + err);
      }
    };

    function init() {
      if (!searchPanelModel) {
        throw 'searchPanelModel not supplied.';
      }

      _searchPanelModel = searchPanelModel;

      return that;
    }

    return init();
  }

  app.SearchPanelModeController = SearchPanelModeController;

}(wizerati));
