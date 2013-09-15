(function (app) {
    "use strict";

    function SelectedItemModel() {

        if (!(this instanceof app.SelectedItemModel)) {
            return new app.SelectedItemModel();
        }

        var that = this,
            _selectedResultId = null,
            _previouslySelectedResultId = null;

        this.updateEventUri = "update://SelectedItemModel/";

        this.getSelectedItemId = function () {

            return _selectedResultId;
        }

        this.getPreviouslySelectedItemId = function () {

            return _previouslySelectedResultId;
        }

        this.setSelectedItemId = function (value) {
            _previouslySelectedResultId = _selectedResultId;
            _selectedResultId = value;

            $.publish(that.updateEventUri);
        }

        function init() {

            return that;
        }

        return init();
    };

    app.SelectedItemModel = SelectedItemModel;
}(wizerati));