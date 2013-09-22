(function (app) {
    "use strict";

    function FavoritesController(favoritesCubeModel, selectedCubeFaceModel) {

        if (!(this instanceof app.FavoritesController)) {
            return new app.FavoritesController(favoritesCubeModel,
                selectedCubeFaceModel);
        }

        var that = this,
            _favoritesCubeModel = null,
            _selectedCubeFaceModel = null;

        this.create = function (dto) {
            if (!dto) {
                throw "dto not supplied."
            }

            var currentCubeFace = _selectedCubeFaceModel.getSelectedCubeFaceId();
            if (_.find(_favoritesCubeModel.getFavorites[currentCubeFace], function (id) {
                return id === dto.id;
            })) {
                return;
            }

            _favoritesCubeModel.addFavorite(dto.id, currentCubeFace);
        };

        this.destroy = function (dto) {
            _favoritesCubeModel.removeFavorite(dto.id, _selectedCubeFaceModel.getSelectedCubeFaceId());
        };

        function init() {
            if (!favoritesCubeModel) {
                throw "favoritesCubeModel not supplied.";
            }

            if (!selectedCubeFaceModel) {
                throw "selectedCubeFaceModel not supplied.";
            }

            _favoritesCubeModel = favoritesCubeModel;
            _selectedCubeFaceModel = selectedCubeFaceModel;

            return that;
        }

        return init();
    }

    app.FavoritesController = FavoritesController;

}(wizerati));
