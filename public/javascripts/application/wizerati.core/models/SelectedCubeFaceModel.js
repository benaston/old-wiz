"use strict";

(function (app) {
    function SelectedCubeFaceModel() {

        if (!(this instanceof app.SelectedCubeFaceModel)) {
            return new app.SelectedCubeFaceModel();
        }

        var that = this,
            _selectedCubeFace = null;

        this.updateEventUri = "update://SelectedCubeFaceModel/";

        this.getSelectedCubeFaceId = function () {

            return _selectedCubeFace;
        }

        this.setSelectedCubeFaceId = function (value) {
            _selectedCubeFace = value;

            $.publish(that.updateEventUri);
        }

        function init() {

            return that;
        }

        return init();
    };

    app.SelectedCubeFaceModel = SelectedCubeFaceModel;

}(wizerati));