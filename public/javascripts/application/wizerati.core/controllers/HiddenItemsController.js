(function (app) {
    "use strict";

    function HiddenItemsController(hiddenItemsModel) {

        if (!(this instanceof app.HiddenItemsController)) {
            return new app.HiddenItemsController(hiddenItemsModel);
        }

        var that = this,
            _hiddenItemsModel = null;

        this.create = function (dto) {
            throw "script donloaded to be assigned to an object ina  known location and then subsequently invoked by the search controller for wait, success, fail, timeout";

            if (!dto) {
                throw "dto not supplied."
            }

            _hiddenItemsModel.addHiddenItemId(dto.id);
        };

        this.destroy = function (dto) {

            _hiddenItemsModel.removeHiddenItemId(dto.id);
        };

        function init() {
            if (!hiddenItemsModel) {
                throw "hiddenItemsModel not supplied.";
            }

            _hiddenItemsModel = hiddenItemsModel;

            return that;
        }

        return init();
    }

    app.HiddenItemsController = HiddenItemsController;

}(wizerati));
