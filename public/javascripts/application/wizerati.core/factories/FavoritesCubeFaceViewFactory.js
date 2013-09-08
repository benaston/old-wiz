"use strict";

(function (app) {
    function FavoritesCubeFaceViewFactory(face, favorites) {

        if (!(this instanceof app.FavoritesCubeFaceViewFactory)) {
            return new app.FavoritesCubeFaceViewFactory(loginService);
        }

        var that = this,
            _loginService = null,
            _roleEnum = app.mod("enum").UserRole;

        this.create = function (data) {
            switch (_loginService.getCurrentRole()) {
                case _roleEnum.Employer:
                case _roleEnum.EmployerStranger:
                    return new app.ContractorFavoriteView(data).render();
                case _roleEnum.Contractor:
                case _roleEnum.ContractorStranger:
                    return new app.ContractFavoriteView(data).render();
                default:
                    throw "invalid user role '" + role + "'";
            }
        };

        function init() {
            if (!loginService) {
                throw "loginService not supplied."
            }

            _loginService = loginService;

            return that;
        }

        return init();
    }

    app.FavoriteViewFactory = FavoriteViewFactory;

}(wizerati));
