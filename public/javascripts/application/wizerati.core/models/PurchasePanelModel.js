(function (app) {
    "use strict";

    function PurchasePanelModel() {

        if (!(this instanceof app.PurchasePanelModel)) {
            return new app.PurchasePanelModel();
        }

        var that = this,
            _activeTab = '0',
            _isVisible = false;

        this.updateEventUri = "update://PurchasePanelModel/";

        this.getIsVisible = function () {
            return _isVisible;
        }

        this.setIsVisible = function (value) {
            if (!value) {
                throw "value not supplied."
            }

            _isVisible = value;
            $.publish(that.updateEventUri);
        };

        this.getActiveTab = function () {
            return _activeTab;
        }

        this.setActiveTab = function (tab) {
            if (!tab) {
                throw "tab not supplied."
            }

            _activeTab = tab;
            $.publish(that.updateEventUri);
        };

        function init() {
            return that;
        }

        return init();
    };

    app.PurchasePanelModel = PurchasePanelModel;
    invertebrate.Model.isExtendedBy(app.PurchasePanelModel);

}(wizerati));
