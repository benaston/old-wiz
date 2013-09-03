"use strict";

(function (app) {
    function LogInService(cookieService) {

        if (!(this instanceof app.LogInService)) {
            return new app.LogInService(cookieService);
        }

        var that = this,
            _cookieService = null,
            _roleEnum = null;

        this.logIn = function (options) {
            if (!options.username && !options.role) {
                throw "username not supplied";
            }
            if (!options.password && !options.role) {
                throw "password not supplied";
            }

            if (options.role) {
                _cookieService.setAuthorizationCookie(options.role);
                initializeUI();

                return;
            } else {
                if (authenticate(options.username, options.password)) {
                    _cookieService.setAuthorizationCookie(options.role);

                    return;
                }
            }

            throw "authentication failed.";
        };

        this.getCurrentRole = function () {
            var cookie = _cookieService.getAuthorizationCookie();

            if (!cookie) {
                return _roleEnum.ContractorStranger;
            }

            if (cookie !== _roleEnum.Contractor
                && cookie !== _roleEnum.Employer
                && cookie !== _roleEnum.ContractorStranger
                && cookie !== _roleEnum.EmployerStranger) {

                throw "invalid role found in cookie '" + cookie + "'";
            }

            return cookie;
        };

        function authenticate(username, password) {
            return (username === "ben" || username === "sally");
        }

        function authorize(username) {
            if (username == "ben") {
                return _role = _roleEnum.Contractor;
            } else if (username == "sally") {
                return _role = _roleEnum.Employer;
            }

            throw "unauthorized.";
        }

        //gets the value of a cookie by name
        //see: http://stackoverflow.com/questions/10730362/javascript-get-cookie-by-name
        function getCookieValue(name) {
            var parts = document.cookie.split(name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        }

        function init() {
            if (!cookieService) {
                throw "cookieService not supplied";
            }

            _roleEnum = wizerati.mod("enum").UserRole;

            _cookieService = cookieService;

            return that;
        }

        return init();
    };

    app.LogInService = LogInService;

}(wizerati));
