"use strict";

(function (app) {
    function SelectedCubeFaceModel() {

        //throw "move model and view creation to the mod bit, and then call dom binding sep. trace trhough the behavior of clicking the new top, left, right etc links and get the cube and result list re-rendering.";
        if (!(this instanceof app.SelectedCubeFaceModel)) {
            return new app.SelectedCubeFaceModel();
        }

        var that = this,
            _selectedCubeFaceId = '0';

        this.updateEventUri = "update://SelectedCubeFaceModel/";

        this.getSelectedCubeFaceId = function () {

            return _selectedCubeFaceId;
        }

        this.setSelectedCubeFaceId = function (value) {
            _selectedCubeFaceId = value;

            $.publish(that.updateEventUri);
        }

        function init() {

            return that;
        }

        return init();
    };

    app.SelectedCubeFaceModel = SelectedCubeFaceModel;

}(wizerati));