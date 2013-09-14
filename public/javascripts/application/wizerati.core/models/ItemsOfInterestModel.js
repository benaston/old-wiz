"use strict";

(function (app) {
    function ItemsOfInterestModel() {
        if (!(this instanceof app.ItemsOfInterestModel)) {
            return new app.ItemsOfInterestModel();
        }

        var that = this,
            _itemsOfInterest = []; //note these will be GUIDs - use the ItemCache for the actual objects

        this.updateEventUri = "update://ItemsOfInterestModel/";

        this.getItemsOfInterest = function () {
            //todo ensure selected item is always first
            return _itemsOfInterest;
        }

        this.addItemOfInterest = function (id, face) {
            if (!id) {
                throw "favorite not supplied";
            }

            if (!face) {
                throw "face not supplied";
            }

            _itemsOfInterest.push(id);
            $.publish(that.updateEventUri);
        };

        this.removeItemOfInterest = function (id, face) {
            if (!id) {
                throw "id not supplied";
            }

            _.reject(_itemsOfInterest[parseInt(face)], function (idOfItemOfInterest) {
                return idOfItemOfInterest === id;
            });

            $.publish(that.updateEventUri);
        };

        function init() {

            return that;
        }

        return init();
    }

    app.ItemsOfInterestModel = ItemsOfInterestModel;
    invertebrate.Model.isExtendedBy(app.ItemsOfInterestModel);
}(wizerati));