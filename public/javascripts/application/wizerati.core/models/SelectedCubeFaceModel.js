(function (app, $, invertebrate) {
  'use strict';

  function SelectedCubeFaceModel() {

    if (!(this instanceof app.SelectedCubeFaceModel)) {
      return new app.SelectedCubeFaceModel();
    }

    var that = this,
        _selectedCubeFaceId = '0';

    this.updateEventUri = 'update://SelectedCubeFaceModel/';

    this.getSelectedCubeFaceId = function () {
      return _selectedCubeFaceId;
    };

    this.setSelectedCubeFaceId = function (value) {
      _selectedCubeFaceId = value;
      $.publish(that.updateEventUri);
    };

    function init() {
      return that;
    }

    return init();
  }

  app.SelectedCubeFaceModel = SelectedCubeFaceModel;
  invertebrate.Model.isExtendedBy(app.SelectedCubeFaceModel);

}(wizerati, $, invertebrate));
