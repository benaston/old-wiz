(function (app) {
    "use strict";

    function ResultListView(model,
                            resultViewFactory,
                            selectedCubeFaceModel,
                            selectedItemModel,
                            favoritesCubeModel,
                            hiddenItemsModel,
                            actionedItemsModel,
                            itemsOfInterestModel) {

        if (!(this instanceof app.ResultListView)) {
            return new app.ResultListView(model,
                                          resultViewFactory,
                                          selectedCubeFaceModel,
                                          selectedItemModel,
                                          favoritesCubeModel,
                                          hiddenItemsModel,
                                          actionedItemsModel,
                                          itemsOfInterestModel);
        }

        var that = this,
            _el = "#result-list-panel",
            _resultViewFactory = null,
            _selectedCubeFaceModel = null,
            _selectedItemModel = null,
            _favoritesCubeModel = null,
            _actionedItemsModel = null,
            _hiddenItemsModel = null,
            _itemsOfInterestModel = null;

        this.$el = null;

        this.Model = null;

        this.render = function () {
            that.$el.empty();
            _.each(that.Model.getResults(), function (id) {
                setTimeout(function(){
                    _resultViewFactory.create(id, _selectedCubeFaceModel.getSelectedCubeFaceId(), function($v){
                        that.$el.append($v);
                    });
                }, 0);

            });
        };

        this.onDomReady = function(){
            that.$el = $(_el);
            that.render();
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            if (!resultViewFactory) {
                throw "resultViewFactory not supplied";
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

            if (!itemsOfInterestModel) {
                throw "itemsOfInterestModel not supplied";
            }

            that.Model = model;
            _resultViewFactory = resultViewFactory;
            _selectedCubeFaceModel = selectedCubeFaceModel;
            _selectedItemModel = selectedItemModel;
            _favoritesCubeModel = favoritesCubeModel;
            _hiddenItemsModel = hiddenItemsModel;
            _actionedItemsModel = actionedItemsModel;
            _itemsOfInterestModel = itemsOfInterestModel;

            $.subscribe(that.Model.updateEventUri, that.render);
            $.subscribe(_selectedCubeFaceModel.updateEventUri, that.render);
            $.subscribe(_selectedItemModel.updateEventUri, that.render);
            $.subscribe(_favoritesCubeModel.updateEventUri, that.render);
            $.subscribe(_hiddenItemsModel.updateEventUri, that.render);
            $.subscribe(_actionedItemsModel.updateEventUri, that.render);
            $.subscribe(_itemsOfInterestModel.updateEventUri, that.render);

            return that;
        }

        return init();
    }

    app.ResultListView = ResultListView;
    invertebrate.View.isExtendedBy(app.ResultListView);

}(wizerati));