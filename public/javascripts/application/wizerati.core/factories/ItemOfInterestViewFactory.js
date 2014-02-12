(function (app) {
    "use strict";

    //algo for re-drawing:
    //items in dom ! (in latest item of interest collection ? leave : collapse and remove)
    function ItemOfInterestViewFactory(loginService,
                                       itemRepository,
                                       selectedItemModel,
                                       itemsOfInterestModel,
                                       favoritesCubeModel,
                                       hiddenItemsModel,
                                       actionedItemsModel) {

        if (!(this instanceof app.ItemOfInterestViewFactory)) {
            return new app.ItemOfInterestViewFactory(loginService,
                itemRepository,
                selectedItemModel,
                itemsOfInterestModel,
                favoritesCubeModel,
                hiddenItemsModel,
                actionedItemsModel);
        }

        var that = this,
            _loginService = null,
            _itemRepository = null,
            _selectedItemModel = null,
            _itemsOfInterestModel = null,
            _favoritesCubeModel = null,
            _hiddenItemsModel = null,
            _actionedItemsModel = null,
            _roleEnum = app.mod("enum").UserRole;

        this.create = function (id,
                                currentCubeFace,
                                isSelectedItem,
                                animateSelectedItem,
                                done) {
            if (!id) {
                throw "id not supplied."
            }

            if (!currentCubeFace) {
                throw "currentCubeFace not supplied."
            }


            if (isSelectedItem === undefined || isSelectedItem === null) {
                throw "isSelectedItem not supplied."
            }

            if (animateSelectedItem === undefined || animateSelectedItem === null) {
                throw "animateSelectedItem not supplied."
            }

            if (!favoritesCubeModel) {
                throw "favoritesCubeModel not supplied."
            }

            if (!done) {
                throw "done not supplied."
            }

            var role = _loginService.getCurrentRole();
            switch (role) {
                case _roleEnum.Employer:
                case _roleEnum.EmployerStranger:
                    _itemRepository.getById(id, function (item) {
                        item.isFavoritable = _favoritesCubeModel.getFavorites()[currentCubeFace].length < 6 && !_hiddenItemsModel.isHidden(item.id)
                        item.isFavorite = item["isFavoriteOnFace" + currentCubeFace];
                        item.isSelected = _selectedItemModel.getSelectedItemId() === item.id;
                        item.isPinned = !isSelectedItem;
                        item.isPinnable = _itemsOfInterestModel.getItemsOfInterest().pinnedItems.length < 6 && !_.find(_itemsOfInterestModel.getItemsOfInterest().pinnedItems, function (i) {
                            i === id;
                        });
                        item.shouldAnimateIn = animateSelectedItem && isSelectedItem && _itemsOfInterestModel.getItemsOfInterest().pinnedItems.length > 0 && !_selectedItemModel.getPreviouslySelectedItemId();
                        item.isHidden = _hiddenItemsModel.isHidden(item.id);
                        item.isHideable = !(_favoritesCubeModel.isFavoriteOnAnyFace(item.id));
                        item.isActioned = _actionedItemsModel.isActioned(item.id);
                        var $e = new app.ContractorItemOfInterestView(item).render().$el1;
                        done($e)
                    });
                    break;
                case _roleEnum.Contractor:
                case _roleEnum.ContractorStranger:
                    _itemRepository.getById(id, function (item) {
                        item.isFavoritable = _favoritesCubeModel.getFavorites()[currentCubeFace].length < 6 && !_hiddenItemsModel.isHidden(item.id)
                        item.isFavorite = item["isFavoriteOnFace" + currentCubeFace];
                        item.isSelected = isSelectedItem;
                        item.isPinned = !isSelectedItem;
                        item.isPinnable = !_hiddenItemsModel.isHidden(item.id) && (_itemsOfInterestModel.getItemsOfInterest().pinnedItems.length < 6 && (!isSelectedItem || !_.find(_itemsOfInterestModel.getItemsOfInterest().pinnedItems, function (i) {
                            return i === item.id;
                        })));
                        item.shouldAnimateIn = animateSelectedItem && isSelectedItem && _itemsOfInterestModel.getItemsOfInterest().pinnedItems.length > 0 && !_selectedItemModel.getPreviouslySelectedItemId();
                        item.isHidden = _hiddenItemsModel.isHidden(item.id);
                        item.isHideable = !(_favoritesCubeModel.isFavoriteOnAnyFace(item.id)) && isSelectedItem && !_actionedItemsModel.isActioned(item.id);
                        item.isActioned = _actionedItemsModel.isActioned(item.id);
                        item.isActionable =  !_hiddenItemsModel.isHidden(item.id);
                        done(new app.ContractItemOfInterestView(item).render().$el1)
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

            if (!itemsOfInterestModel) {
                throw "itemsOfInterestModel not supplied."
            }

            if (!favoritesCubeModel) {
                throw "favoritesCubeModel not supplied."
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
            _itemsOfInterestModel = itemsOfInterestModel;
            _favoritesCubeModel = favoritesCubeModel;
            _hiddenItemsModel = hiddenItemsModel;
            _actionedItemsModel = actionedItemsModel;

            return that;
        }

        return init();
    }

    app.ItemOfInterestViewFactory = ItemOfInterestViewFactory;

}(wizerati));
