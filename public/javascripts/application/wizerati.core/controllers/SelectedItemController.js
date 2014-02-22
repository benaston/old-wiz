(function (app) {
  'use strict';

  function SelectedItemController(selectedItemModel, searchPanelModel, resultListModel) {

    if (!(this instanceof app.SelectedItemController)) {
      return new app.SelectedItemController(selectedItemModel, searchPanelModel, resultListModel);
    }

    var that = this,
        _selectedItemModel = null,
        _searchPanelModel = null,
        _resultListModel = null,
        _searchPanelModeEnum = app.mod('enum').SearchPanelMode,
        _resultListModeEnum = app.mod('enum').ResultListMode;

    this.update = function (dto) {
      try {
        if (!dto) {
          throw 'dto not supplied';
        }

        if (dto.__isInvertebrateExternal__) {
          app.instance.router.redirect('/items/show?id=' + dto.id);
          return;
        }

        if (dto.source === 'results') {
          _searchPanelModel.setMode(_searchPanelModeEnum.Minimized);
        } else if (dto.source === 'favorites') {
          _resultListModel.setMode(_resultListModeEnum.Minimized, {silent: true});
        }

        _selectedItemModel.setSelectedItemId(dto.id);
      } catch (err) {
        console.log('error: SelectedItemController.update. ' + err);
      }
    };

    function init() {
      if (!selectedItemModel) {
        throw 'selectedItemModel not supplied.';
      }

      if (!searchPanelModel) {
        throw 'searchPanelModel not supplied.';
      }

      if (!resultListModel) {
        throw 'resultListModel not supplied.';
      }

      _selectedItemModel = selectedItemModel;
      _searchPanelModel = searchPanelModel;
      _resultListModel = resultListModel;

      return that;
    }

    return init();
  }

  app.SelectedItemController = SelectedItemController;

}(wizerati));
