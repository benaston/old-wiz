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
            if(!dto) { throw "dto not supplied." }

            var currentCubeFace = _favoritesCubeView.getCurrentFace();
            if(_.find(_favoritesCubeView.Model.getFavorites[_favoritesCubeView.getCurrentFace()], function(id){ return id === dto.id; })) {
                return;
            }

            _favoritesCubeView.Model.addFavorite(dto.id, currentCubeFace);
        };

        //todo: result list items should be object literals like {id:'foo'}
        this.destroy = function (dto) {
            var shouldReRenderResultList = false;

            //make hash
            var result = _.find(_resultListModel, function(id){
                return id === dto.id;
            });

            if(result){
                result.isFavorite = true;
                shouldReRenderResultList = true;
            }

            if(shouldReRenderResultList) {
                $.publish(_resultListModel.updateEventUri);
            }

            $.publish(_favoritesCubeView.Model.updateEventUri);

            _favoritesCubeView.Model.removeFavorite(dto.id,
                _favoritesCubeView.getCurrentFace());
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

//try {
//
//    _itemRepository.getById(dto.id, done);
//} catch (err) {
//    console.log("error: FavoritesController.create. " + err);
//}