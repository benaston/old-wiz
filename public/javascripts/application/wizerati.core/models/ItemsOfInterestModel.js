"use strict";

(function (app) {
    function ItemsOfInterestModel(selectedItemModel) {
        if (!(this instanceof app.ItemsOfInterestModel)) {
            return new app.ItemsOfInterestModel(selectedItemModel);
        }

        var that = this,
            _selectedItemModel = null,
            _itemsOfInterest = []; //note these will be GUIDs - use the ItemCache for the actual objects

        this.updateEventUri = "update://ItemsOfInterestModel/";

        this.getItemsOfInterest = function (shouldIncludeSelectedItem) {
                return _itemsOfInterest;
        }

        this.addItemOfInterest = function (id) {
            if (!id) {
                throw "favorite not supplied";
            }

            _itemsOfInterest.push(id);
            $.publish(that.updateEventUri);
        };

        this.removeItemOfInterest = function (id) {
            if (!id) {
                throw "id not supplied";
            }

            _.reject(_itemsOfInterest[parseInt(face)], function (idOfItemOfInterest) {
                return idOfItemOfInterest === id;
            });

            $.publish(that.updateEventUri);
        };

        function init() {

            if(!selectedItemModel){
                throw "selectedItemModel not supplied."
            }

            _selectedItemModel = selectedItemModel;

            return that;
        }

        return init();
    }

    app.ItemsOfInterestModel = ItemsOfInterestModel;
    invertebrate.Model.isExtendedBy(app.ItemsOfInterestModel);
}(wizerati));