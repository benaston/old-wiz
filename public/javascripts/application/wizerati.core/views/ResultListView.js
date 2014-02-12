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

        this.$el1 = null;
        this.$el2 = null;
        this.$currentEl = null;
        this.Model = null;

        function calculateScrollTopValueToMaintain($el) {
            if(_lastKnownSearchId === that.Model.getSearchId()) {
                _scrollTopValue = $el.scrollTop();
            } else {
                _scrollTopValue = 0;
                _lastKnownSearchId = that.Model.getSearchId();
            }
        }

        this.render = function () {
            var $prevEl = that.$currentEl || that.$el2;
            var isFreshSearch = _lastKnownSearchId !== that.Model.getSearchId();
            calculateScrollTopValueToMaintain($prevEl);
            that.$currentEl = $prevEl === that.$el1 ? that.$el2 : that.$el1; //Double buffering to ensure the user sees no "flicker" as the results are rendered.
            that.$currentEl.empty();

            that.$currentEl.removeClass('display-none');
//            that.$currentEl.addClass('ios-scroll-enable');

            _.each(that.Model.getResults(), function (id) {
                _resultViewFactory.create(id, _selectedCubeFaceModel.getSelectedCubeFaceId(), function ($v) {
                    that.$currentEl.append($v);
                });
            });

            that.$currentEl.scrollTop(_scrollTopValue);
            $prevEl.addClass('buffer');

            if(isFreshSearch) {
                setTimeout(function(){ //this avoids the user seeing the appending of results to the DOM as an "animation"
                    that.$currentEl.removeClass('buffer');
                }, 350);
            } else {
                that.$currentEl.removeClass('buffer');
            }

            setTimeout(function(){
                //Circumvent iOS bug whereby scrolling is applied to the hidden "buffer" list.
                  $prevEl.add('display-none');
//                $prevEl.removeClass('ios-scroll-enable');
            }, 900); //This timeout must be longer than the css transition to avoid interrupting it with a flicker.
        };

        function renderResults(results, index) {
            index = index === undefined ? 0 : index;

            if (index === results.length) {
                return;
            }

            _resultViewFactory.create(results[index], _selectedCubeFaceModel.getSelectedCubeFaceId(), function ($v) {
                that.$el1.append($v);
            });

            setTimeout(function () {
                renderResults(results, ++index)
            }, 950);
        }

        this.onDomReady = function () {
            that.$el1 = $(_el1);
            that.$el2 = $(_el2);
//            that.render();
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