(function (app) {
    "use strict";

    function ContractResultView(model) {

        if (!(this instanceof app.ContractResultView)) {
            return new app.ContractResultView(model);
        }

        var that = this,
            _el = "<li class='t t-219'></li>",
            _templateName = "result.html";

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

    app.ContractResultView = ContractResultView;
    invertebrate.View.isExtendedBy(app.ContractResultView);

}(wizerati));
