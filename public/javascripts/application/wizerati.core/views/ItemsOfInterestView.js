(function (app) {
    "use strict";

    //todo, render to in mem dom fragment with
    //single write to DOM to minimise repaint
    //use JQUery scrollTop to reset scroll position of
    //scrolled elements
    //fix jankiness of item selection and items of interest update
    function ItemsOfInterestView(model, itemOfInterestViewFactory, selectedCubeFaceModel, selectedItemModel, favoritesCubeModel, hiddenItemsModel, actionedItemsModel) {

        if (!(this instanceof app.ItemsOfInterestView)) {
            return new app.ItemsOfInterestView(model,
                itemOfInterestViewFactory,
                selectedCubeFaceModel,
                selectedItemModel,
                favoritesCubeModel,
                hiddenItemsModel,
                actionedItemsModel);
        }

        var that = this,
            _el1 = "#items-of-interest-panel-1",
            _el2 = "#items-of-interest-panel-2",
            _itemOfInterestViewFactory = null,
            _selectedCubeFaceModel = null,
            _selectedItemModel = null,
            _favoritesCubeModel = null,
            _hiddenItemsModel = null,
            _actionedItemsModel = null,
            _scrollTopValues = {},
            _scrollLeft = 0;

        this.$el = null;
        this.$el2 = null;
        this.$currentEl = null;
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
        }

        this.renderWithSelectedItemAnimation = function () {
            renderPrivate();
        }

        this.render = function () {

            renderPrivate({ animateSelectedItem: false });

        };

        function renderPrivate(options) {
            options = options || {animateSelectedItem: true};

            storeScrollTopValues();
            storeScrollLeftValue();

            var $prevEl = that.$currentEl || that.$el2;
            that.$currentEl = $prevEl === that.$el ? that.$el2 : that.$el; //Double buffering to ensure the user sees no "flicker" as the results are rendered.
            that.$currentEl.empty();

            var items = that.Model.getItemsOfInterest();
            items.selectedItem = _selectedItemModel.getSelectedItemId();

            if (items.selectedItem) {
                _itemOfInterestViewFactory.create(items.selectedItem,
                    _selectedCubeFaceModel.getSelectedCubeFaceId(),
                    true,
                    options.animateSelectedItem,
                    function ($v) {

                        function addSelectedItem() {
                            that.$currentEl.prepend($v);
                            $v.scrollTop(_scrollTopValues[items.selectedItem + 's']);
                            setTimeout(function () {
                                $v.removeClass('collapsed')
                            }, 300);

                            $('body').scrollLeft(_scrollLeft);
                        }

                        addPinnedItems(items.pinnedItems, addSelectedItem);
                    });
            } else {
                addPinnedItems(items.pinnedItems, function () {
                    $('body').scrollLeft(_scrollLeft);
                });
            }

            $prevEl.addClass('buffer');
            that.$currentEl.removeClass('buffer');
            setTimeout(function(){ $prevEl.empty(); }, 300)
        }

        function addPinnedItems(items, done) {
            done = done || function () {
            };

            _.each(items, function (id) {
                if (id === null) {
                    return;
                }
                _itemOfInterestViewFactory.create(id,
                    _selectedCubeFaceModel.getSelectedCubeFaceId(),
                    false,
                    false,
                    function ($v) {
                        that.$currentEl.prepend($v)
                        $v.scrollTop(_scrollTopValues[id]);
                    });
            });
            done();
        }

        this.onDomReady = function () {
            that.$el = $(_el1);
            that.$el2 = $(_el2);
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

            if (!hiddenItemsModel) {
                throw "hiddenItemsModel not supplied";
            }

            if (!actionedItemsModel) {
                throw "actionedItemsModel not supplied";
            }

            that.Model = model;
            _itemOfInterestViewFactory = itemOfInterestViewFactory;
            _selectedCubeFaceModel = selectedCubeFaceModel;
            _selectedItemModel = selectedItemModel;
            _favoritesCubeModel = favoritesCubeModel;
            _hiddenItemsModel = hiddenItemsModel;
            _actionedItemsModel = actionedItemsModel;

            $.subscribe(that.Model.updateEventUri, that.render);
            $.subscribe(_selectedCubeFaceModel.updateEventUri, that.render);
            $.subscribe(_selectedItemModel.updateEventUri, that.renderWithSelectedItemAnimation);
            $.subscribe(_favoritesCubeModel.updateEventUri, that.render);
            $.subscribe(_hiddenItemsModel.updateEventUri, that.render);
            $.subscribe(_actionedItemsModel.updateEventUri, that.render);

            return that;
        }

        return init();
    }

    app.ItemsOfInterestView = ItemsOfInterestView;
    invertebrate.View.isExtendedBy(app.ItemsOfInterestView);

}(wizerati));