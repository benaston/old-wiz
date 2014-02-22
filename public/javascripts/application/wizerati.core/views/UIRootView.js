(function (app) {
    "use strict";

    function UIRootView(model) {

        if (!(this instanceof app.UIRootView)) {
            return new app.UIRootView(model);
        }

        var that = this,
            _el = "body";

        this.$el = null;
        this.Model = null;

        this.render = function (e, options) {
            options = options || { done: that.postRender };

            //two step DOM manipulation to enable visibility of CSS transition
            //first set display property
            var modal = that.Model.getModal();
            that.$el.removeClass("modal-visible"); //re-adding of this class will trigger CSS transition
            that.$el.attr("data-ui-mode", that.Model.getUIMode());
            that.$el.attr("data-modal", modal);

            if(modal) {
                setTimeout(function(){
                    that.$el.addClass("modal-visible");
                }, 0)  //re-adding of this class will trigger CSS transition
            }

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
    }

    app.UIRootView = UIRootView;
    invertebrate.View.isExtendedBy(app.UIRootView);

}(wizerati));
