(function (app) {
    "use strict";

    function ContractorView(model) {

        if (!(this instanceof app.ContractorView)) {
            return new app.ContractorView(model);
        }

        var that = this,
            _el = "<li class='thumbnail thumbnail-219' data-id='" + model.Id + "'></li>",
            _templateName = "result.html";

        this.$el = null;
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

        this.postRender = function () {
        };

        this.onDomReady = function(){
            that.$el = $(_el);
            that.render();
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

    app.ContractorView = ContractorView;
    invertebrate.View.isExtendedBy(app.ContractorView);
}(wizerati));
