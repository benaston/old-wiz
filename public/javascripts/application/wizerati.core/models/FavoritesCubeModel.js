"use strict";

//refactor to have a central collection of results
//referred to by both favourites and search results, this
//way consistency is assured? if not in this collection,
//go to server to get it and add it
(function (app) {
    function FavoritesCubeModel() {

        if (!(this instanceof app.FavoritesCubeModel)) {
            return new app.FavoritesCubeModel();
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
            _currentFace = '0';

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

        this.addFavorite = function (favorite, face) {
            if (!favorite) {
                throw "favorite not supplied";
            }

            if (!face) {
                throw "face not supplied";
            }

            _favorites[face].push(favorite);

            $.publish(that.updateEventUri);
        };

        this.removeFavorite = function (id, face) {
            if (!id) {
                throw "id not supplied";
            }

            if (!face) {
                throw "face not supplied";
            }

            _favorites[parseInt(face)] = _.reject(_favorites[parseInt(face)], function (f) {
                return f.id === id;
            });

            $.publish(that.updateEventUri);
        };

        function init() {
            return that;
        }

        return init();
    }

    app.FavoritesCubeModel = FavoritesCubeModel;
    invertebrate.Model.isExtendedBy(app.FavoritesCubeModel);

}(wizerati));
