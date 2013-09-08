"use strict";

(function (app) {

    function ContractorFavoriteView(model) {

        if (!(this instanceof app.ContractorFavoriteView)) {
            return new app.ContractorFavoriteView(model);
        }

        var that = this,
            _el = "<li class='thumbnail thumbnail-108'></li>",
            _templateName = "favorite.html";

        this.$el = $(_el);
        this.Model = null;

        this.render = function () {
            app.instance.renderTemplate(that.$el,
                                        _templateName,
                                        that.Model,
                                        {});

            return that;
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            that.render();

            return that;
        }

        return init();
    }

    app.ContractorFavoriteView = ContractorFavoriteView;
    invertebrate.View.isExtendedBy(app.ContractorFavoriteView);
}(wizerati));
