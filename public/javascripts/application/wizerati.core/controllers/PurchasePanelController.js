(function (app) {
    "use strict";

    function PurchasePanelController(purchasePanelModel, uiRootModel) {

        if (!(this instanceof app.PurchasePanelController)) {
            return new app.PurchasePanelController(purchasePanelModel, uiRootModel);
        }

        var that = this,
            _purchasePanelModel = null,
            _uiRootModel = null,
            _uiModeEnum = wizerati.mod("enum").UIMode;

        this.show = function (dto) {
            try {
                _uiRootModel.setUIMode(_uiModeEnum.Purchase);
                _purchasePanelModel.setIsVisible(true);
                _purchasePanelModel.setActiveTab(dto.tab);
            } catch (err) {
                console.log("error: PurchasePanelController.show");
            }
        };

        this.destroy = function (dto) {
            try {
                _uiRootModel.setUIMode(_uiRootModel.getPreviousUIMode());
            } catch (err) {
                console.log("error: PurchasePanelController.destroy");
            }
        };

        function init() {
            if (!purchasePanelModel) {
                throw "purchasePanelModel not supplied.";
            }

            if (!uiRootModel) {
                throw "uiRootModel not supplied.";
            }

            _purchasePanelModel = purchasePanelModel;
            _uiRootModel = uiRootModel;

            return that;
        }

        return init();
    }

    app.PurchasePanelController = PurchasePanelController;

}(wizerati));
