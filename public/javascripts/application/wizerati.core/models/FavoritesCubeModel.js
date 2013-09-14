"use strict";

(function (app) {
    function FavoritesCubeModel(itemRepository,
                                resultListModel) {

//        throw "get rid of selectedcubefaceview. wire up " +
//            "clicking of cube face selection labels to " +
//            "updating of the selected cube face model. " +
//            "wire up subscribers to changes to the " +
//            "selected cube face.";

        if (!(this instanceof app.FavoritesCubeModel)) {
            return new app.FavoritesCubeModel(itemRepository,
                resultListModel);
        }

        var that = this,
            _favorites = [
                [], //top
                [], //left
                [], //front
                [], //right
                [], //bottom
                []  //back
            ],
            _currentFace = '0',
            _itemRepository = null,
            _resultListModel = null;

        this.updateEventUri = "update://FavoritesCubeModel/";

        this.getFavorites = function () {

            return _favorites;
        };

        this.setFavorites = function (value) {

            _favorites = value;

            $.publish(that.updateEventUri);
        };

        this.setSelectedFavoriteId = function (id) {
            if (!id) {
                throw "id not supplied";
            }

            _.each(_.flatten(_favorites, true), function (r) {
                if (r.id === id) {
                    r.isSelected = true;
                } else {
                    r.isSelected = false;
                }
            });

            $.publish(that.updateEventUri);
        };

        this.addFavorite = function (id, face) {
            if (!id) {
                throw "favorite not supplied";
            }

            if (!face) {
                throw "face not supplied";
            }

            if (!_.find(_favorites[face], function (i) {
                return i === id;
            })) {
                _favorites[face].push(id);
                _itemRepository.getById(id, function (item) {
                    item["isFavoriteOnFace" + face] = true;
                    $.publish(that.updateEventUri);
                });
            }
        };

        this.removeFavorite = function (id, face) {
            if (!id) {
                throw "id not supplied";
            }

            if (!face) {
                throw "face not supplied";
            }

            _favorites[parseInt(face)] = _.reject(_favorites[parseInt(face)], function (idOnCubeFace) {
                return idOnCubeFace === id;
            });

            _itemRepository.getById(id, function (item) {
                item["isFavoriteOnFace" + face] = false;
                $.publish(that.updateEventUri);
            });
        };

        function init() {
            if (!itemRepository) {
                throw "itemRepository not supplied.";
            }

            if (!resultListModel) {
                throw "resultListModel not supplied.";
            }

            _itemRepository = itemRepository;
            _resultListModel = resultListModel;

            return that;
        }

        return init();
    }

    app.FavoritesCubeModel = FavoritesCubeModel;
    invertebrate.Model.isExtendedBy(app.FavoritesCubeModel);

}(wizerati));
