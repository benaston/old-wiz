(function (app) {
    "use strict";

    function UIRootView(model) {

        if (!(this instanceof app.UIRootView)) {
            return new app.UIRootView(model);
        }

        var that = this,
            _el = "body",
            _loginButtonEl = ".btn-log-in",
            _uiModeEnum = wizerati.mod("enum").UIMode,
            _uiModeDataValues = [
                { key: _uiModeEnum.GreenfieldSearch, value: "greenfield" },
                { key: _uiModeEnum.LogIn, value: "log-in" },
                { key: _uiModeEnum.Purchase, value: "purchase" },
                { key: _uiModeEnum.Search, value: "search" }
            ];


        this.$el = null;
        this.$loginButton = $(_loginButtonEl);
        this.Model = null;

        this.render = function (e, options) {
            options = options || { done: that.postRender };

            var uiMode = that.Model.getUIMode();

            that.$el.attr("data-ui-mode", _.find(_uiModeDataValues,function (e) {
                return e.key === uiMode;
            }).value);
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
