(function (app) {
    "use strict";

    function FavoritesCubeView(model) {

        if (!(this instanceof app.FavoritesCubeView)) {
            return new app.FavoritesCubeView(model);
        }

        var that = this,
            _el = "#favorites-cube";

        this.$el = $(_el);
        this.Model = null;

        this.render = function (options) {
            var defaults = { done: that.postRender };
            options = _.extend({}, defaults, options);

            options.done();
        };

        this.postRender = function () {
            //removed functionality to set selected item - this should now be performed via the router
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            that.render();

            $.subscribe(that.Model.updateEventUri, that.render);

            return that;
        }

        return init();
    }

    app.FavoritesCubeView = FavoritesCubeView;
    invertebrate.View.isExtendedBy(app.FavoritesCubeView);
}(wizerati));