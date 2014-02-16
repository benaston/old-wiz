(function (app) {
    "use strict";

    function PurchasePanelView(model) {

        if (!(this instanceof app.PurchasePanelView)) {
            return new app.PurchasePanelView(model);
        }

        var that = this,
            _el = "#purchase-panel";

        this.$el = null;
        this.Model = null;

        this.render = function () {
            that.$el.attr('data-state', that.Model.getActiveTab());
            that.$el.attr('data-is-waiting', that.Model.getIsWaiting());
        };

        this.bindEvents = function () {
        };

        this.onDomReady = function(){
            that.$el = $(_el);
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            $.subscribe(that.Model.updateEventUri, that.render);

            return that;
        }

        return init();
    };

    app.PurchasePanelView = PurchasePanelView;
    invertebrate.View.isExtendedBy(app.PurchasePanelView);

}(wizerati));
