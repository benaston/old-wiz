"use strict";

(function (app) {

    function ContractFavoriteView(model) {

//        throw "todo: hyperlinks on results/favs do not cover full result. " +
//            "make inline block. make favs and results ";

        if (!(this instanceof app.ContractFavoriteView)) {
            return new app.ContractFavoriteView(model);
        }

        var that = this,
            _el = "<div class='thumbnail thumbnail-108'></div>",
            _templateName = "favorite.html";

        this.$el = $(_el);
        this.Model = null;

        this.render = function () {

            if (that.Model.isSelected) {
                that.$el.addClass('selected');
            } else {
                that.$el.removeClass('selected');
            }

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

            return that;
        }

        return init();
    }

    app.ContractFavoriteView = ContractFavoriteView;
    invertebrate.View.isExtendedBy(app.ContractFavoriteView);
}(wizerati));
