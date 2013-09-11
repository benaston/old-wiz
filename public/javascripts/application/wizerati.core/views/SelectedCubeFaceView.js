"use strict";

(function (app) {

    function SelectedCubeFaceView(model) {

        if (!(this instanceof app.SelectedCubeFaceView)) {
            return new app.SelectedCubeFaceView(model);
        }

        var that = this,
            _el = "body";

        this.$el = $(_el);
        this.Model = null;

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;


            $.subscribe(that.Model.updateEventUri, that.render);
            that.render();

            return view;
        }

        return init();
    };

    app.SelectedCubeFaceView = SelectedCubeFaceView;
    invertebrate.View.isExtendedBy(app.SelectedCubeFaceView);
}(wizerati));
