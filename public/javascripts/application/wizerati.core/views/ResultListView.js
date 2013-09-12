(function (app) {
    "use strict";

    function ResultListView(model,
                            resultViewFactory,
                            selectedCubeFaceModel,
                            selectedItemModel) {

        if (!(this instanceof app.ResultListView)) {
            return new app.ResultListView(model,
                                          resultViewFactory,
                                          selectedCubeFaceModel,
                                          selectedItemModel);
        }

        var that = this,
            _el = "#result-list-panel",
            _resultViewFactory = null,
            _selectedCubeFaceModel = null,
            _selectedItemModel = null;

        this.$el = $(_el);
        this.Model = null;

        this.render = function () {
            that.$el.empty();
            _.each(that.Model.getResults(), function (id) {
                _resultViewFactory.create(id, _selectedCubeFaceModel.getSelectedCubeFaceId(), function($v){
                    that.$el.append($v);
                });
            });
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

            that.Model = model;
            _resultViewFactory = resultViewFactory;
            _selectedCubeFaceModel = selectedCubeFaceModel;
            _selectedItemModel = selectedItemModel;

            that.render();

            $.subscribe(that.Model.updateEventUri, that.render);
            $.subscribe(_selectedCubeFaceModel.updateEventUri, that.render);
            $.subscribe(_selectedItemModel.updateEventUri, that.render);

            return that;
        }

        return init();
    }

    app.ResultListView = ResultListView;
    invertebrate.View.isExtendedBy(app.ResultListView);
}(wizerati));