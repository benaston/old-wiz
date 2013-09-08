"use strict";

(function (app) {
    function SelectedItemController(favoritesCubeModel,
                                    resultListModel) {

        if (!(this instanceof app.SelectedItemController)) {
            return new app.SelectedItemController(favoritesCubeModel,
                resultListModel);
        }

        var that = this,
            _favoritesCubeModel = null,
            _resultListModel = null;

        this.update = function (dto) {
            try {
                _resultListModel.setSelectedResultId(dto.id);
                _favoritesCubeModel.setSelectedFavoriteId(dto.id);
            } catch (err) {
                console.log("error: SelectedItemController.update. " + err);
            }
        };

        function init() {
            if (!favoritesCubeModel) {
                throw "favoritesCubeModel not supplied.";
            }

            if (!resultListModel) {
                throw "resultListModel not supplied.";
            }

            _favoritesCubeModel = favoritesCubeModel;
            _resultListModel = resultListModel;

            return that;
        }

        return init();
    }

    app.SelectedItemController = SelectedItemController;

}(wizerati));
