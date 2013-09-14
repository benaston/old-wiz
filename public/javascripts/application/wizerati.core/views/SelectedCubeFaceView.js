"use strict";

(function (app) {

    function SelectedCubeFaceView(model) {

        if (!(this instanceof app.SelectedCubeFaceView)) {
            return new app.SelectedCubeFaceView(model);
        }

        var that = this,
            _el = "body";

        this.$el = null;
        this.Model = null;

        this.onDomReady = function(){
            that.$el = $(_el);
            that.render();
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

    app.SelectedCubeFaceView = SelectedCubeFaceView;
    invertebrate.View.isExtendedBy(app.SelectedCubeFaceView);
}(wizerati));
