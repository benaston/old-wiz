"use strict";

(function (app) {
    function FavoritesCubeModel() {

        if (!(this instanceof app.FavoritesCubeModel)) {
            return new app.FavoritesCubeModel();
        }

        var that = this,
            _favorites = [
                [], //top
                [], //left
                [], //right
                [], //bottom
                [], //back
                []  //front
            ];

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

        this.addFavorite = function (result) {
            if (!result) {
                throw "result not supplied";
            }

            _results.unshift(results);

            $.publish(that.updateEventUri);
        };

        this.removeFavorite = function (id) {
            if (!id) {
                throw "id not supplied";
            }

            _favorites = _.reject(_favorites, function (f) {
                f.id === id;
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
