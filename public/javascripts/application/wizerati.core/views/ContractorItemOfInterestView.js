(function (app) {
    "use strict";

    function ContractorItemOfInterestView(model) {

        if (!(this instanceof app.ContractorItemOfInterestView)) {
            return new app.ContractorItemOfInterestView(model);
        }

        var that = this,
            _el = '<article id="selected-item" class="overflow-y-scroll lucid-column"></article>',
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

    app.ContractorItemOfInterestView = ContractorItemOfInterestView;
    invertebrate.View.isExtendedBy(app.ContractorItemOfInterestView);
}(wizerati));
