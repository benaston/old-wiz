(function (app) {
    "use strict";

    function FavoritesGroupController(favoritesCubeModel) {

        if (!(this instanceof app.FavoritesGroupController)) {
            return new app.FavoritesGroupController(favoritesCubeModel);
        }

        var that = this,
            _favoritesCubeModel = null;

        this.create = function () {
            var faceStatuses = _favoritesCubeModel.getFaceStatuses();
            if(faceStatuses.indexOf(false) === -1) {
                throw "Up to six favorites groups may be created.";
            }

            faceStatuses[faceStatuses.indexOf(false)] = true;
            _favoritesCubeModel.setFaceStatuses(faceStatuses);
        };

        function init() {
            if (!favoritesCubeModel) {
                throw "favoritesCubeModel not supplied.";
            }

            _favoritesCubeModel = favoritesCubeModel;

            return that;
        }

        return init();
    }

    app.FavoritesGroupController = FavoritesGroupController;

}(wizerati));
