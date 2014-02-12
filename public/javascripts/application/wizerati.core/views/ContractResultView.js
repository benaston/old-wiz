(function (app) {
    "use strict";

    function ContractResultView(model) {

        if (!(this instanceof app.ContractResultView)) {
            return new app.ContractResultView(model);
        }

        var that = this,
            _el = "<li class='thumbnail thumbnail-219'></li>",
            _templateName = "result.html";

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

    app.ContractResultView = ContractResultView;
    invertebrate.View.isExtendedBy(app.ContractResultView);

}(wizerati));
