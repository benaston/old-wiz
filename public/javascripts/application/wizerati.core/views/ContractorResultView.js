(function (app) {
    "use strict";

    function ContractorResultView(model) {

        if (!(this instanceof app.ContractorResultView)) {
            return new app.ContractorResultView(model);
        }

        var that = this,
            _el = "<li class='thumbnail thumbnail-219' data-id='" + model.Id + "'></li>",
            _templateName = "result.html";

        this.$el1 = null;
        this.Model = null;

        this.render = function (options) {
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

    app.ContractorResultView = ContractorResultView;
    invertebrate.View.isExtendedBy(app.ContractorResultView);

}(wizerati));
