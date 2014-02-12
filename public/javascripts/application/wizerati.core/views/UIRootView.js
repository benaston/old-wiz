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

        this.$el1 = null;
        this.Model = null;

        this.render = function (e, options) {
            options = options || { done: that.postRender };

            //two step DOM manipulation to enable visibility of CSS transition
            //first set display property
            that.$el1.removeClass("modal-visible"); //re-adding of this class will trigger CSS transition
            that.$el1.attr("data-ui-mode", that.Model.getUIMode());
            that.$el1.attr("data-modal", that.Model.getModal());

            if(that.Model.getModal()) {
                setTimeout(function(){
                    that.$el1.addClass("modal-visible");
                }, 0)  //re-adding of this class will trigger CSS transition
            }

         };

        this.postRender = function () {
        };

        this.bindEvents = function () {
        };

        this.onDomReady = function(){
            that.$el1 = $(_el);
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
    }

    app.UIRootView = UIRootView;
    invertebrate.View.isExtendedBy(app.UIRootView);

}(wizerati));
