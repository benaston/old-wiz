"use strict";

(function (app) {
    function AdvertisersPanelModel() {

        if (!(this instanceof app.AdvertisersPanelModel)) {
            return new app.AdvertisersPanelModel();
        }

        var that = this,
            _isVisible = false;

        this.updateEventUri = "update://AdvertisersPanelModel/";

        this.setIsVisible = function (value) {
            _isVisible = value;

            $.publish(that.updateEventUri);
        };

        function init() {
            return that;
        }

        return init();
    }

    app.AdvertisersPanelModel = AdvertisersPanelModel;
    invertebrate.Model.isExtendedBy(app.AdvertisersPanelModel);

}(wizerati));
