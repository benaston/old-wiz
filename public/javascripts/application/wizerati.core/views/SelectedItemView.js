(function (app) {
    "use strict";

    function SelectedItemView(model) {

        if (!(this instanceof app.SelectedItemView)) {
            return new app.SelectedItemView(model);
        }

        var that = this,
            _el = "<li class='thumbnail thumbnail-219' data-id='" + model.Id + "'></li>",
            _templateName = "selected-item.html";

        this.$el = $(_el);
        this.Model = null;

        this.render = function (options) {
            options = options || { done: that.postRender };

            app.instance.renderTemplate(that.$el, templateName, that.Model, {
                done: function ($el) {
                    that.bindEvents($el, options.done);
                }
            });

            return that;
        };

        function init() {
            if (!model) {
                throw "model not supplied.";
            }

            that.Model = model;

            return that;
        }

        return init();
    }

    app.SelectedItemView = SelectedItemView;
    invertebrate.View.isExtendedBy(app.SelectedItemView);
}(wizerati));
