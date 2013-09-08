(function (app) {
    "use strict";

    function ResultListView(model, resultViewFactory) {

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
            $.each(that.Model.getResults(), function (index, value) {
                that.$el.append(_resultViewFactory.create(value).$el);
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