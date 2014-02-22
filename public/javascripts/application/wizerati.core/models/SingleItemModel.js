(function (app, $, invertebrate) {
  'use strict';

  function SingleItemModel() {

    if (!(this instanceof app.SingleItemModel)) {
      return new app.SingleItemModel();
    }

    var that = this,
        _selectedResultId = null,
        _previouslySelectedResultId = null;

    this.updateEventUri = 'update://SelectedItemModel/';

    this.getSelectedItemId = function () {
      return _selectedResultId;
    };

    this.getPreviouslySelectedItemId = function () {

      return _previouslySelectedResultId;
    };

    this.setSelectedItemId = function (value, options) {
      options = options || { silent: false };

      _previouslySelectedResultId = _selectedResultId;
      _selectedResultId = value;

      if (!options.silent) {
        $.publish(that.updateEventUri);
      }
    };

    function init() {
      return that;
    }

    return init();
  }

  app.SingleItemModel = SingleItemModel;
  invertebrate.Model.isExtendedBy(app.SingleItemModel);

}(wizerati, $, invertebrate));
