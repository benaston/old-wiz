

(function (app) {
    "use strict";

    function SelectedItemModel() {

        if (!(this instanceof app.SelectedItemModel)) {
            return new app.SelectedItemModel();
        }

        var that = this,
            _selectedResultId = null;

        this.updateEventUri = "update://SelectedItemModel/";

        this.getSelectedItemId = function () {

            return _selectedResultId;
        }

        this.setSelectedItemId = function (value) {
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