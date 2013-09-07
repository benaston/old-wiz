"use strict";

(function (app) {
    function FavoritesCubeModel() {

        if (!(this instanceof app.FavoritesCubeModel)) {
            return new app.FavoritesCubeModel();
        }

        var that = this,
            _favourites = [
                [],
                [],
                [],
                [],
                [],
                []
            ];

        this.updateEventUri = "update://FavoritesCubeModel/";

        this.getSelectedFavoriteId = function () {
            return _selectedFavoriteId;
        };

        this.setSelectedFavoriteId = function (id) {
            if (!id) {
                throw "id not supplied";
            }

            _.each(_favourites, function (r) {
                if (r.id === id) {
                    r.isSelected = true;
                } else {
                    r.isSelected = false;
                }
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
