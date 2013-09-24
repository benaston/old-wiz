(function (app) {
    "use strict";

    //for account entity manipulation for the purchase panel
    function PurchasePanelAccountsController(purchasePanelModel, accountService) {

        if (!(this instanceof app.PurchasePanelAccountsController)) {
            return new app.PurchasePanelAccountsController(purchasePanelModel, accountService);
        }

        var that = this,
            _accountService = null,
            _purchasePanelModel = null,
            _modalEnum = wizerati.mod("enum").Modal;

        this.create = function (dto) {
            try{ 
                _accountService.create(dto.name, dto.email, 
                    { success: function(){
                        _purchasePanelModel.setIsWaiting(" ");
                        app.instance.router.redirect('/purchasepanel?tab=3');
                      }, 
                      fail: function(){
                        _purchasePanelModel.setIsWaiting(" ");
                        var notifications = _purchasePanelModel.getNotifications();
                        notifications.push({type:"error", message: "An error occurred while creating your account." })
                        _purchasePanelModel.setNotifications(notifications);
                      }, 
                      wait: function() {
                        _purchasePanelModel.setIsWaiting("success");
                      },
                      timeout: function() {
                        _purchasePanelModel.setIsTimedOut("success");
                      }, });
            }
            catch(e) {
                throw "error in PurchasePanelAccountsController.create. " + e;
            }
        };

        function init() {
            if (!purchasePanelModel) {
                throw "purchasePanelModel not supplied.";
            }

            if (!accountService) {
                throw "accountService not supplied.";
            }

            _purchasePanelModel = purchasePanelModel;
            _accountService = accountService;

            return that;
        }

        return init();
    }

    app.PurchasePanelAccountsController = PurchasePanelAccountsController;

}(wizerati));
