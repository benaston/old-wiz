(function (app) {
    "use strict";

    function HomeController(uiRootModel) {

        if (!(this instanceof app.HomeController)) {
            return new app.HomeController(uiRootModel);
        }

        var that = this,
            _uiRootModel = null,
            _uiModeEnum = wizerati.mod("enum").UIMode;


        this.index = function(){
            try {
                _uiRootModel.setUIMode(_uiModeEnum.GreenfieldSearch);
                _uiRootModel.setModal(null);
            } catch(err) {
                console.log("error: HomeController.index. " + err);
            }
        };

        function init() {
            if(!uiRootModel) { throw "uiRootModel not supplied."; }

            _uiRootModel = uiRootModel;

            return that;
        }

        return init();
    }

    app.HomeController = HomeController;

}(wizerati));
