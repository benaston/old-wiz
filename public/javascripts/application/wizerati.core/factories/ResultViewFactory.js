"use strict";

(function (app) {
    function ResultViewFactory(loginService) {

        if (!(this instanceof app.ResultViewFactory)) {
            return new app.ResultViewFactory(loginService);
        }

        var that = this,
            _loginService = null,
            _roleEnum = app.mod("enum").UserRole;

        this.create = function (data) {
            switch (_loginService.getCurrentRole()) {
                case _roleEnum.Employer:
                case _roleEnum.EmployerStranger:
                    return new app.ContractorView(data).render();
                case _roleEnum.Contractor:
                case _roleEnum.ContractorStranger:
                    return new app.ContractView(data).render();
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

    app.ResultViewFactory = ResultViewFactory;

}(wizerati));
