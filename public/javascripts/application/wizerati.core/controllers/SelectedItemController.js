(function (app) {
    "use strict";

    function SelectedItemController(selectedItemModel) {

        if (!(this instanceof app.SelectedItemController)) {
            return new app.SelectedItemController(selectedItemModel);
        }

        var that = this,
            _selectedItemModel = null;

        this.update = function (dto) {
            try {
                _selectedItemModel.setSelectedItemId(dto.id);
            } catch (err) {
                console.log("error: SelectedItemController.update. " + err);
            }
        };

        function init() {
            if (!selectedItemModel) {
                throw "selectedItemModel not supplied.";
            }

            _selectedItemModel = selectedItemModel;

            return that;
        }

        return init();
    }

    app.SelectedItemController = SelectedItemController;

}(wizerati));
