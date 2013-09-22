(function (app) {
    "use strict";

    function SessionController(loginPanelModel, authenticationService) {

        if (!(this instanceof app.SessionController)) {
            return new app.SessionController(loginPanelModel, authenticationService);
        }

        var that = this,
            _loginPanelModel = null,
            _authenticationService = null;

        this.create = function () {
            if (!_authenticationService.authenticate(_loginPanelModel.getUsername(), _loginPanelModel.getPassword())) {
                _loginPanelModel.setIsLoginFailedMessageVisible(true);
            }

            //...
        };

        function init() {
            if (!loginPanelModel) {
                throw "loginPanelModel not supplied.";
            }

            if (!authenticationService) {
                throw "authenticationService not supplied.";
            }

            _loginPanelModel = loginPanelModel;
            _authenticationService = authenticationService;

            return that;
        }

        return init();
    }

    app.SessionController = SessionController;

}(wizerati));
