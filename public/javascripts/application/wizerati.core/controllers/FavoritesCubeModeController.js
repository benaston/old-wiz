(function (app) {
  "use strict";

  function FavoritesCubeModeController(favoritesCubeModel) {

    if (!(this instanceof app.FavoritesCubeModeController)) {
      return new app.FavoritesCubeModeController(favoritesCubeModel);
    }

    var that = this,
        _favoritesCubeModel = null;

    this.update = function (dto) {
      _favoritesCubeModel.setMode(dto.mode);
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

  app.FavoritesCubeModeController = FavoritesCubeModeController;

}(wizerati));
