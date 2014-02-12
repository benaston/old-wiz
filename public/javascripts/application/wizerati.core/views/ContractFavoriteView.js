(function (app) {
    "use strict";

    function ContractFavoriteView(model) {

        if (!(this instanceof app.ContractFavoriteView)) {
            return new app.ContractFavoriteView(model);
        }

        var that = this,
            _el = "<div class='thumbnail thumbnail-108'></div>",
            _templateName = "favorite.html";

        this.$el1 = $(_el);
        this.Model = null;

        this.render = function () {
            if (that.Model.isSelected) {
                that.$el1.addClass('selected');
            } else {
                that.$el1.removeClass('selected');
            }

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

            return that;
        }

        return init();
    }

    app.ContractFavoriteView = ContractFavoriteView;
    invertebrate.View.isExtendedBy(app.ContractFavoriteView);

}(wizerati));
