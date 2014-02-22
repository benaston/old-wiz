(function (app, $, invertebrate) {
  'use strict';

  function SearchPanelModel() {

    if (!(this instanceof app.SearchPanelModel)) {
      return new app.SearchPanelModel();
    }

    var that = this,
        _mode = null,
        _searchPanelModeEnum = app.mod('enum').SearchPanelMode;

    this.updateEventUri = 'update://SearchPanelModel/';

    this.getMode = function () {
      return _mode || _searchPanelModeEnum.Default;
    };

    this.setMode = function (value, options) {
      options = options || {silent: false};

      _mode = value;

      if (!options.silent) {
        $.publish(that.updateEventUri);
      }
    };

    function init() {
      _mode = _searchPanelModeEnum.Default;

      return that;
    }

    return init();
  }

  app.SearchPanelModel = SearchPanelModel;
  invertebrate.Model.isExtendedBy(app.SearchPanelModel);

}(wizerati, $, invertebrate));
