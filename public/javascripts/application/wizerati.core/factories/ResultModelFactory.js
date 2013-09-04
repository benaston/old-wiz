"use strict";

(function (app) {
    //todo: split authorization and authentication?
    function ResultModelFactory(loginService) {

        if (!(this instanceof app.ResultModelFactory)) {
            return new app.ResultModelFactory(loginService);
        }

        var that = this,
            _loginService = null,
            _roleEnum = null;

        this.create = function (data) {
            //throw "json is undefined here. likely missing json lib. underscore prob has something (or jquery)";
            switch (_loginService.getCurrentRole()) {
                case _roleEnum.Employer:
                case _roleEnum.EmployerStranger:
                    return createContractor(data);
                case _roleEnum.Contractor:
                case _roleEnum.ContractorStranger:
                    return createContract(data);
                default:
                    throw "invalid user role '" + role + "'";
            }
        };

        function createContractor(data) {
            var dataModel = json.Parse(data);

            return new app.ContractorModel(dataModel.id,
                dataModel.city,
                dataModel.telephone,
                dataModel.email,
                dataModel.lastUpdated,
                dataModel.lastUpdated,
                dataModel.summary,
                dataModel.availability);
        }

        function createContract(data) {

            return new app.ContractModel(data.id,
                data.title,
                data.location,
                data.organization,
                data.jobType,
                data.contact,
                data.telephoneNumber,
                data.email,
                data.rateLower,
                data.rateUpper,
                data.postedDatetime,
                data.updatedDatetime,
                data.skills,
                data.eternalLinks);
        }

        function init() {
            if (!loginService) {
                throw "loginService not supplied."
            }
            ;

            _loginService = loginService;
            _roleEnum = wizerati.mod("enum").UserRole;

            return that;
        }

        return init();
    };

    app.ResultModelFactory = ResultModelFactory;

}(wizerati));
