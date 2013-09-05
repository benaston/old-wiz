"use strict";

(function (app) {
    function FavoritesCubeModel() {

        if (!(this instanceof app.FavoritesCubeModel)) {
            return new app.FavoritesCubeModel();
        }

        var that = this,
            _selectedFavoriteId = null;

        this.updateEventUri = "update://FavoritesCubeModel/";

        this.setSelectedFavoriteId = function (id) {

            _selectedFavoriteId = id;

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
