(function (app) {
    "use strict";

    function ResultListView(model, resultViewFactory) {

        if (!(this instanceof app.ResultListView)) {
            return new app.ResultListView(model, resultViewFactory);
        }

        var that = this,
            _el = "#result-list-panel",
            _resultViewFactory = null;

        this.$el = $(_el);
        this.Model = null;

        this.render = function (options) {
            throw "wiring up contractview and contractorview rendering here";
            options = options || { done: that.postRender };

            that.$el.empty();
            $.each(that.Model.getResults(), function (index, value) {
                that.$el.append(_resultViewFactory.create(value).$el);
            });

            options.done();
        };

        this.postRender = function () {
            var $results = that.$el.find(".result");
            $results.on('click, touch', function () {
                that.Model.setSelectedResult($results.find('.is-selected').data('id'), { silent: false });
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

            $.subscribe(that.Model.updateEventUri, that.render);

            that.render();

            return that;
        }

        return init();
    }

    app.ResultListView = ResultListView;
    invertebrate.View.isExtendedBy(app.ResultListView);
}(wizerati));