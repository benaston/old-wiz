(function (app) {
    "use strict";

    function UIRootView(model) {

        if (!(this instanceof app.UIRootView)) {
            return new app.UIRootView(model);
        }

        var that = this,
            _el = "body",
            _uiModeEnum = wizerati.mod("enum").UIMode,
            _modalEnum = wizerati.mod("enum").Modal;

        this.$el = null;
        this.Model = null;

        this.render = function (e, options) {
            options = options || { done: that.postRender };

            that.$el.attr("data-ui-mode", that.Model.getUIMode());
            that.$el.attr("data-modal", that.Model.getModal());
         };

        this.postRender = function () {
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

            that.bindEvents();

            return that;
        }

        return init();
    };

    app.UIRootView = UIRootView;
    invertebrate.View.isExtendedBy(app.UIRootView);

}(wizerati));
