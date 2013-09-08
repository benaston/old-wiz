"use strict";

(function (app) {
    function FavoritesController(favoritesCubeView,
                                    resultListModel) {

        if (!(this instanceof app.FavoritesController)) {
            return new app.FavoritesController(favoritesCubeView,
                resultListModel);
        }

        var that = this,
            _favoritesCubeView = null,
            _resultListModel = null;

        this.create = function (dto) {
            try {
                var shouldReRenderResultList = false;

                _.each(_resultListModel.getResults(), function(r){
                    if(r.id === dto.id) {
                        r.isFavorite = true;
                        shouldReRenderResultList = true;
                    }
                });

                _favoritesCubeView.Model.addFavorite(_resultListModel.getResult(dto.id), _favoritesCubeView.getCurrentFace());

                if(shouldReRenderResultList) {
                    $.publish(_resultListModel.updateEventUri);
                }

            } catch (err) {
                console.log("error: FavoritesController.create. " + err);
            }
        };

        //todo: possibly refactor so that favorite status
        //depends on the side of the cube showing
        this.destroy = function (dto) {
            try {
                var shouldReRenderResultList = false;

                _.each(_resultListModel.getResults(), function(r){
                    if(r.id === dto.id) {
                        r.isFavorite = false;
                        shouldReRenderResultList = true;
                    }
                });

                _favoritesCubeView.Model.removeFavorite(dto.id, _favoritesCubeView.getCurrentFace());

                if(shouldReRenderResultList) {
                    $.publish(_resultListModel.updateEventUri);
                }

            } catch (err) {
                console.log("error: FavoritesController.create. " + err);
            }
        };

        function init() {
            if (!favoritesCubeView) {
                throw "favoritesCubeView not supplied.";
            }

            if (!resultListModel) {
                throw "resultListModel not supplied.";
            }

            _favoritesCubeView = favoritesCubeView;
            _resultListModel = resultListModel;

            return that;
        }

        return init();
    }

    app.FavoritesController = FavoritesController;

}(wizerati));
