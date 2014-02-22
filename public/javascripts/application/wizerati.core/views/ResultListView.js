(function (app) {
    "use strict";

    function ResultListView(model, resultViewFactory, selectedCubeFaceModel, selectedItemModel, favoritesCubeModel, hiddenItemsModel, actionedItemsModel, itemsOfInterestModel) {

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
            _elContainer = ".result-list-container",
            _el1 = "#result-list-panel-1",
            _el2 = "#result-list-panel-2",
            _resultViewFactory = null,
            _selectedCubeFaceModel = null,
            _selectedItemModel = null,
            _favoritesCubeModel = null,
            _actionedItemsModel = null,
            _hiddenItemsModel = null,
            _itemsOfInterestModel = null,
            _scrollTopValue = 0,
            _lastKnownSearchId = null;

        this.$elContainer = null;
        this.$el = null;
        this.$el2 = null;
        this.$currentEl = null;
        this.Model = null;

        function calculateScrollTopValueToMaintain($el, searchId) {
            if(_lastKnownSearchId === searchId) {
                _scrollTopValue = $el.scrollTop();
            } else {
                _scrollTopValue = 0;
                _lastKnownSearchId = searchId;
            }
        }

        this.render = function () {
            var $prevEl = that.$currentEl || that.$el2;
            var searchId = that.Model.getSearchId();
            var isFreshSearch = _lastKnownSearchId !== searchId;
            calculateScrollTopValueToMaintain($prevEl, searchId);
            that.$currentEl = $prevEl === that.$el ? that.$el2 : that.$el; //Double buffering to ensure the user sees no "flicker" as the results are rendered.
            that.$currentEl.empty();

            that.$currentEl.addClass('ios-scroll-enable');

            var selectedCubeFaceId = _selectedCubeFaceModel.getSelectedCubeFaceId();
            _.each(that.Model.getResults(), function (id) {
                _resultViewFactory.create(id, selectedCubeFaceId, function ($v) {
                    that.$currentEl.append($v);
                });
            });

            that.$currentEl.scrollTop(_scrollTopValue);
            setTimeout(function(){$prevEl.addClass('buffer');}, 0); //reduces jank on iOS (yes really)

            var mode = that.Model.getMode();
            if(isFreshSearch) {
                setTimeout(function(){ //this avoids the user seeing the appending of results to the DOM as an "animation"
                    that.$currentEl.removeClass('buffer');
                    that.$elContainer.attr('data-mode', mode);
                }, 350);
            } else {
                setTimeout(function(){
                    that.$currentEl.removeClass('buffer');
                    that.$elContainer.attr('data-mode', mode);
                }, 0); //reduces jank on iOS (yes really)
            }

            setTimeout(function(){
                //Circumvent iOS bug whereby scrolling is applied to the hidden "buffer" list.
                $prevEl.empty();
                $prevEl.removeClass('ios-scroll-enable');
            }, 300); //This timeout must be longer than the css transition to avoid interrupting it with a flicker.
        };

//        function renderResults(results, index) {
//            index = index === undefined ? 0 : index;
//
//            if (index === results.length) {
//                return;
//            }
//
//            _resultViewFactory.create(results[index], _selectedCubeFaceModel.getSelectedCubeFaceId(), function ($v) {
//                that.$el1.append($v);
//            });
//
//            setTimeout(function () {
//                renderResults(results, ++index)
//            }, 950);
//        }

        this.onDomReady = function () {
            that.$el = $(_el1);
            that.$el2 = $(_el2);
            that.$elContainer = $(_elContainer);
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