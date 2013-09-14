(function (app) {
    "use strict";

    function ContractItemOfInterestView(model) {

        if (!(this instanceof app.ContractItemOfInterestView)) {
            return new app.ContractItemOfInterestView(model);
        }

        var that = this,
            _el = '<article id="selected-item" class="overflow-y-scroll lucid-column"></article>',
            _templateName = "item-of-interest.html";

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

    app.ContractItemOfInterestView = ContractItemOfInterestView;
    invertebrate.View.isExtendedBy(app.ContractItemOfInterestView);
}(wizerati));
