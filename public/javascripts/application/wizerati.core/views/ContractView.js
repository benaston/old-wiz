(function (app) {
    "use strict";

    function ContractView(model) {

        if (!(this instanceof app.ContractView)) {
            return new app.ContractView(model);
        }

        var that = this,
            _el = "<li class='thumbnail thumbnail-219'></li>",
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

    app.ContractView = ContractView;
    invertebrate.View.isExtendedBy(app.ContractView);
}(wizerati));
