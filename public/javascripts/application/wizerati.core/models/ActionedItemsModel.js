"use strict";

(function (app) {
    function ActionedItemsModel() {

        if (!(this instanceof app.SelecteActionedItemsModeldCubeFaceModel)) {
            return new app.ActionedItemsModel();
        }

        var that = this,
            _actionedItems = [];

        this.updateEventUri = "update://ActionedItemsModel/";

        this.getActionedItemIds = function () {

            return _actionedItems;
        }

        this.addActionedItemId = function (value) {
            _actionedItems.unshift(value);

            $.publish(that.updateEventUri);
        }

        function init() {

            return that;
        }

        return init();
    };

    app.ActionedItemsModel = ActionedItemsModel;

}(wizerati));