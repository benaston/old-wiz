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

    app.ContractorView = ContractorView;
    invertebrate.View.isExtendedBy(app.ContractorView);
}(wizerati));
