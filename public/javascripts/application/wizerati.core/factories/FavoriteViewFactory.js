"use strict";

(function (app) {
    function FavoriteViewFactory(loginService,
                                 itemRepository) {

        if (!(this instanceof app.FavoriteViewFactory)) {
            return new app.FavoriteViewFactory(loginService,
                                               itemRepository);
        }

        var that = this,
            _loginService = null,
            _itemRepository = null,
            _roleEnum = app.mod("enum").UserRole;

        this.create = function (id, done) {
            var role = _loginService.getCurrentRole();
            switch (role) {
                case _roleEnum.Employer:
                case _roleEnum.EmployerStranger:
                    _itemRepository.getById(id, function(i){
                        done(new app.ContractorFavoriteView(i).render().$el)
                    });
                    break;
                case _roleEnum.Contractor:
                case _roleEnum.ContractorStranger:
                    _itemRepository.getById(id, function(i){
                        done(new app.ContractFavoriteView(i).render().$el)
                    });
                    break;
                default:
                    throw "invalid user role '" + role + "'";
            }
        };

        function init() {
            if (!loginService) {
                throw "loginService not supplied."
            }

            if (!itemRepository) {
                throw "itemRepository not supplied."
            }

            _loginService = loginService;
            _itemRepository = itemRepository;

            return that;
        }

        return init();
    }

    app.FavoriteViewFactory = FavoriteViewFactory;

}(wizerati));
