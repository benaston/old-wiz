(function (app) {
    "use strict";

    //todo, render to in mem dom fragment with
    //single write to DOM to minimise repaint
    //use JQUery scrollTop to reset scroll position of
    //scrolled elements
    //fix jankiness of item selection and items of interest update
    function ItemsOfInterestView(model,
                                 itemOfInterestViewFactory,
                                 selectedCubeFaceModel,
                                 selectedItemModel,
                                 favoritesCubeModel) {

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
            _favoritesCubeModel = null,
            _scrollTopValues = {},
            _scrollLeft = 0;

        this.$el =
            this.Model = null;

        function storeScrollTopValues() {
            var selectedItem = that.$el.find('.item-of-interest.selected');

            if (selectedItem) {
                _scrollTopValues[selectedItem.attr('data-id') + 's'] = $(selectedItem).scrollTop();
            }

            _.each(that.$el.find('.item-of-interest:not(.selected)'), function (e) {
                _scrollTopValues[$(e).attr('data-id')] = $(e).scrollTop();
            });
        }

        function storeScrollLeftValue() {
            _scrollLeft = $('body').scrollLeft();
            console.log(_scrollLeft);
        }

        this.renderWithSelectedItemAnimation = function () {
            renderPrivate(true);
        }

        this.render = function () {
               renderPrivate(false);
        };

        function renderPrivate(animateSelectedItem) {
            storeScrollTopValues();
            storeScrollLeftValue();
            that.$el.empty();
            var items = that.Model.getItemsOfInterest();
            items.selectedItem = _selectedItemModel.getSelectedItemId();

            if (items.selectedItem) {
                _itemOfInterestViewFactory.create(items.selectedItem,
                    _selectedCubeFaceModel.getSelectedCubeFaceId(),
                    true,
                    animateSelectedItem,
                    function ($v) {

                        function addSelectedItem() {
                            that.$el.prepend($v);
                            $v.scrollTop(_scrollTopValues[items.selectedItem + 's']);
                            setTimeout(function () {
                                $v.removeClass('collapsed')
                            }, 0);

                            $('body').scrollLeft(_scrollLeft);
                        }

                        addPinnedItems(items.pinnedItems, addSelectedItem);
                    });
            } else {
                addPinnedItems(items.pinnedItems, function() { $('body').scrollLeft(_scrollLeft); });
            }
        }

        function addPinnedItems(items, done) {
            done = done || function () {};

            _.each(items, function (id) {
                if (id === null) {
                    return;
                }
                _itemOfInterestViewFactory.create(id,
                    _selectedCubeFaceModel.getSelectedCubeFaceId(),
                    false,
                    false,
                    function ($v) {
                        that.$el.prepend($v)
                        $v.scrollTop(_scrollTopValues[id]);
                    });
            });
            done();
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
            $.subscribe(_selectedItemModel.updateEventUri, that.renderWithSelectedItemAnimation);
            $.subscribe(_favoritesCubeModel.updateEventUri, that.render);

            return that;
        }

        return init();
    }

    app.ItemsOfInterestView = ItemsOfInterestView;
    invertebrate.View.isExtendedBy(app.ItemsOfInterestView);
}(wizerati));