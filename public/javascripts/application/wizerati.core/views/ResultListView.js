(function (app) {
    "use strict";

    function ResultListView(model,
                            resultViewFactory) {

        if (!(this instanceof app.ResultListView)) {
            return new app.ResultListView(model,
                                          resultViewFactory);
        }

        var that = this,
            _el = "#result-list-panel",
            _resultViewFactory = null;

        this.$el = $(_el);
        this.Model = null;

        this.render = function () {
            that.$el.empty();
            _.each(that.Model.getResults(), function (id) {
                _resultViewFactory.create(id, function($v){
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

            that.Model = model;
            _resultViewFactory = resultViewFactory;

            that.render();

            $.subscribe(that.Model.updateEventUri, that.render);

            return that;
        }

        return init();
    }

    app.ResultListView = ResultListView;
    invertebrate.View.isExtendedBy(app.ResultListView);
}(wizerati));