(function (app) {
  'use strict';

  function ResultListModeController(resultListModel) {

    if (!(this instanceof app.ResultListModeController)) {
      return new app.ResultListModeController(resultListModel);
    }

    var that = this,
        _resultListModel = null;

    this.update = function (dto) {
      try {
        if (_resultListModel.getMode() !== dto.mode) {
          _resultListModel.setMode(dto.mode);
        }
      } catch (err) {
        console.log('error: ResultListModeController.update. ' + err);
      }
    };

    function init() {
      if (!resultListModel) {
        throw 'resultListModel not supplied.';
      }

      _resultListModel = resultListModel;

      return that;
    }

    return init();
  }

  app.ResultListModeController = ResultListModeController;

}(wizerati));
