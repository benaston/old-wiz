(function (app) {
    "use strict";

    function FavoritesCubeView(model, favoriteViewFactory) {

        if (!(this instanceof app.FavoritesCubeView)) {
            return new app.FavoritesCubeView(model, favoriteViewFactory);
        }

        var that = this,
            _el = "#favorites-cube",
            _favoriteViewFactory = null;

        this.$el = $(_el);
        this.Model = null;

        this.render = function (options) {
            var defaults = { done: function () {} };
            options = _.extend({}, defaults, options);

            that.$el.empty();
            $.each(that.Model.getFavorites(), function (index, value) {
                that.$el.append(_favoriteViewFactory.create(value).$el);
            });

            options.done();
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            if (!favoriteViewFactory) {
                throw "favoriteViewFactory not supplied";
            }

            that.Model = model;
            _favoriteViewFactory = favoriteViewFactory;

            that.render();

            $.subscribe(that.Model.updateEventUri, that.render);

            return that;
        }

        return init();
    }

    app.FavoritesCubeView = FavoritesCubeView;
    invertebrate.View.isExtendedBy(app.FavoritesCubeView);
}(wizerati));