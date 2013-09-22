(function (app) {
    "use strict";

    function ItemsOfInterestModel(selectedItemModel) {
        if (!(this instanceof app.ItemsOfInterestModel)) {
            return new app.ItemsOfInterestModel(selectedItemModel);
        }

        var that = this,
            _selectedItemModel = null,
            _itemsOfInterest = { selectedItem: "",
                pinnedItems: [] };


        this.updateEventUri = "update://ItemsOfInterestModel/";

        this.getItemsOfInterest = function () {
            return _itemsOfInterest;
        }

        this.addItemOfInterest = function (id) {
            if (!id) {
                throw "id not supplied";
            }

            if (_.find(that.getItemsOfInterest().pinnedItems, function (idOfPinnedItem) {
                return idOfPinnedItem === id;
            })) {
                return;
            }

            if (_selectedItemModel.getSelectedItemId() === id) {
                _selectedItemModel.setSelectedItemId(null, {silent: true});
                _itemsOfInterest.selectedItem = null;
            }

            _itemsOfInterest.pinnedItems.push(id);

            $.publish(that.updateEventUri);
        };

        this.removeItemOfInterest = function (id) {
            if (!id) {
                throw "id not supplied";
            }

            _itemsOfInterest.pinnedItems = _.reject(_itemsOfInterest.pinnedItems, function (idOfPinnedItem) {
                return idOfPinnedItem === id;
            });

            $.publish(that.updateEventUri);
        };

        function init() {

            if (!selectedItemModel) {
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