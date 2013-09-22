(function (app) {
    "use strict";

    function FavoriteViewFactory(loginService,
                                 itemRepository,
                                 selectedItemModel,
                                 hiddenItemsModel,
                                 actionedItemsModel) {

        if (!(this instanceof app.FavoriteViewFactory)) {
            return new app.FavoriteViewFactory(loginService,
                                               itemRepository,
                                               selectedItemModel,
                                               hiddenItemsModel,
                                               actionedItemsModel);
        }

        var that = this,
            _loginService = null,
            _itemRepository = null,
            _selectedItemModel = null,
            _hiddenItemsModel = null,
            _actionedItemsModel = null,
            _roleEnum = app.mod("enum").UserRole;

        this.create = function (id, currentCubeFace, done) {
            var role = _loginService.getCurrentRole();
            switch (role) {
                case _roleEnum.Employer:
                case _roleEnum.EmployerStranger:
                    _itemRepository.getById(id, function(item){
                        item.isFavorite = item["isFavoriteOnFace" + currentCubeFace];
                        item.isSelected = _selectedItemModel.getSelectedItemId() === item.id;
                        item.isHidden = _hiddenItemsModel.isHidden(item.id);
                        item.isActioned = _actionedItemsModel.isActioned(item.id);
                        done(new app.ContractorFavoriteView(item).render().$el)
                    });
                    break;
                case _roleEnum.Contractor:
                case _roleEnum.ContractorStranger:
                    _itemRepository.getById(id, function(item){
                        item.isFavorite = item["isFavoriteOnFace" + currentCubeFace];
                        item.isSelected = _selectedItemModel.getSelectedItemId() === item.id;
                        item.isHidden = _hiddenItemsModel.isHidden(item.id);
                        item.isActioned = _actionedItemsModel.isActioned(item.id);
                        done(new app.ContractFavoriteView(item).render().$el)
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

            if (!selectedItemModel) {
                throw "selectedItemModel not supplied."
            }

            if (!hiddenItemsModel) {
                throw "hiddenItemsModel not supplied."
            }

            if (!actionedItemsModel) {
                throw "actionedItemsModel not supplied."
            }

            _loginService = loginService;
            _itemRepository = itemRepository;
            _selectedItemModel = selectedItemModel;
            _hiddenItemsModel = hiddenItemsModel;
            _actionedItemsModel = actionedItemsModel;

            return that;
        }

        return init();
    }

    app.FavoriteViewFactory = FavoriteViewFactory;

}(wizerati));
