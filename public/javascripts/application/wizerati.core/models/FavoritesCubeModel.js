(function (app) {
    "use strict";

    function FavoritesCubeModel(itemRepository, resultListModel) {

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
            _faceLabels = ["my favorites", "my favorites 2", "my favorites 3", "my favorites 4", "my favorites 5", "my favorites 6"],
            _itemRepository = null,
            _resultListModel = null,
            _faceActiveStatuses = [true, false, false, false, false, false];

        this.updateEventUri = "update://FavoritesCubeModel/";

        this.getFaceLabels = function () {

            return _faceLabels;
        };

        this.getFaceStatuses = function () {

            return _faceActiveStatuses;
        };

        this.setFaceStatuses = function (value) {
            if(!value) {
                throw "value not supplied";
            }

            _faceActiveStatuses = value;
            $.publish(that.updateEventUri);
        };

        this.getFavorites = function () {

            return _favorites;
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

        this.isFavoriteOnAnyFace = function (id) {
            if (!id) {
                throw "id not supplied";
            }

            return _favorites.map(function (a) {
                return _.any(a, function (i) {
                    return i === id;
                });
            }).reduce(function (prev, curr) {
                return prev || curr;
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
