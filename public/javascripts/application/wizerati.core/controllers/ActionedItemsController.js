"use strict";

(function (app) {
    function ActionedItemsController(favoritesCubeView,
                                 selectedCubeFaceModel) {

        if (!(this instanceof app.ActionedItemsController)) {
            return new app.ActionedItemsController(favoritesCubeView,
                                               selectedCubeFaceModel);
        }

        var that = this,
            _favoritesCubeView = null,
            _selectedCubeFaceModel = null;

        this.create = function (dto) {
            if(!dto) { throw "dto not supplied." }

            var currentCubeFace = _selectedCubeFaceModel.getSelectedCubeFaceId();
            if(_.find(_favoritesCubeView.Model.getFavorites[currentCubeFace], function(id){ return id === dto.id; })) {
                return;
            }

            _favoritesCubeView.Model.addFavorite(dto.id, currentCubeFace);
        };

        //todo: result list items should be object literals like {id:'foo'}
        this.destroy = function (dto) {

            _favoritesCubeView.Model.removeFavorite(dto.id, _selectedCubeFaceModel.getSelectedCubeFaceId());
        };

        function init() {
            if (!favoritesCubeView) {
                throw "favoritesCubeView not supplied.";
            }

            if (!selectedCubeFaceModel) {
                throw "selectedCubeFaceModel not supplied.";
            }

            _favoritesCubeView = favoritesCubeView;
            _selectedCubeFaceModel = selectedCubeFaceModel;

            return that;
        }

        return init();
    }

    app.ActionedItemsController = ActionedItemsController;

}(wizerati));
