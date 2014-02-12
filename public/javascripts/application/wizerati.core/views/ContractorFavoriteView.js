(function (app) {
    "use strict";

    function ContractorFavoriteView(model) {

        if (!(this instanceof app.ContractorFavoriteView)) {
            return new app.ContractorFavoriteView(model);
        }

        var that = this,
            _el = "<div class='thumbnail thumbnail-108'></div>",
            _templateName = "favorite.html";

        this.$el1 = $(_el);
        this.Model = null;

        this.render = function () {
            app.instance.renderTemplate(that.$el1,
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
