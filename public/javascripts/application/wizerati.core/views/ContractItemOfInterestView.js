(function (app) {
    "use strict";

    function ContractItemOfInterestView(model) {

        if (!(this instanceof app.ContractItemOfInterestView)) {
            return new app.ContractItemOfInterestView(model);
        }

        var that = this,
            //id="selected-item"
            _el = '<article class="item-of-interest overflow-y-scroll overflow-x-hidden lucid-column"></article>',
            _templateName = "item-of-interest.html";

        this.$el = $(_el);
        this.Model = null;

        this.render = function () {
            that.$el.attr('data-id', that.Model.id);

            if (that.Model.isSelected) {
                that.$el.addClass('selected');
            }

            if (that.Model.shouldAnimateIn) {
                that.$el.addClass('collapsed');
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
