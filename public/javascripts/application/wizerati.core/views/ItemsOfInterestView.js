(function (app) {
    "use strict";

    function ItemsOfInterestView(model, itemOfInterestViewFactory, selectedCubeFaceModel, selectedItemModel, favoritesCubeModel) {

        if (!(this instanceof app.ItemsOfInterestView)) {
            return new app.ItemsOfInterestView(model,
                itemOfInterestViewFactory,
                selectedCubeFaceModel,
                selectedItemModel,
                favoritesCubeModel);
        }

        var that = this,
            _el = "#items-of-interest-panel",
            _itemOfInterestViewFactory = null,
            _selectedCubeFaceModel = null,
            _selectedItemModel = null,
            _favoritesCubeModel = null;

        this.$el =
            this.Model = null;

        this.render = function () {
//            throw "get addition/removal behavior of items of interest working, without a full refresh of items of interest panel, plus get the column layout working so content slides under the search panel.";
            that.$el.empty();
            var items = that.Model.getItemsOfInterest();
            items.selectedItem = _selectedItemModel.getSelectedItemId();

            if(items.selectedItem) {
                _itemOfInterestViewFactory.create(items.selectedItem, _selectedCubeFaceModel.getSelectedCubeFaceId(), function ($v) {
                    that.$el.append($v);

                    addPinnedItems(items.pinnedItems);
                });
            }
        };

        function addPinnedItems(items) {
            _.each(items, function (id) {
                if(id === null){ return; }
                _itemOfInterestViewFactory.create(id, _selectedCubeFaceModel.getSelectedCubeFaceId(), function ($v) {
                    that.$el.append($v);
                });
            });
        }

        this.onDomReady = function () {
            that.$el = $(_el);
            that.render();
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            if (!itemOfInterestViewFactory) {
                throw "itemOfInterestViewFactory not supplied";
            }

            if (!selectedCubeFaceModel) {
                throw "selectedCubeFaceModel not supplied";
            }

            if (!selectedItemModel) {
                throw "selectedItemModel not supplied";
            }

            if (!favoritesCubeModel) {
                throw "selectedItemModel not supplied";
            }

            that.Model = model;
            _itemOfInterestViewFactory = itemOfInterestViewFactory;
            _selectedCubeFaceModel = selectedCubeFaceModel;
            _selectedItemModel = selectedItemModel;
            _favoritesCubeModel = favoritesCubeModel;

            $.subscribe(that.Model.updateEventUri, that.render);
            $.subscribe(_selectedCubeFaceModel.updateEventUri, that.render);
            $.subscribe(_selectedItemModel.updateEventUri, that.render);
            $.subscribe(_favoritesCubeModel.updateEventUri, that.render);

            return that;
        }

        return init();
    }

    app.ItemsOfInterestView = ItemsOfInterestView;
    invertebrate.View.isExtendedBy(app.ItemsOfInterestView);
}(wizerati));