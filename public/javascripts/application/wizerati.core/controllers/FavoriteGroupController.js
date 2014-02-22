(function (app) {
  "use strict";

  function FavoriteGroupController(favoritesCubeModel, uiRootModel) {

    if (!(this instanceof app.FavoriteGroupController)) {
      return new app.FavoriteGroupController(favoritesCubeModel, uiRootModel);
    }

    var that = this,
        _favoritesCubeModel = null,
        _uiRootModel = null;

    this.create = function () {
      var faceStatuses = _favoritesCubeModel.getFaceStatuses();
      if (faceStatuses.indexOf(false) === -1) {
        throw "Up to six favorite groups may be created.";
      }

      faceStatuses[faceStatuses.indexOf(false)] = true;
      _favoritesCubeModel.setFaceStatuses(faceStatuses);
    };

    this.destroy = function (dto) {
      if (dto.id == null) {
        throw "id not supplied.";
      }

      _favoritesCubeModel.deactivateFace(dto.id);
      _uiRootModel.setModal(null);
    };

    function init() {
      if (!favoritesCubeModel) {
        throw "favoritesCubeModel not supplied.";
      }

      if (!uiRootModel) {
        throw "uiRootModel not supplied.";
      }

      _favoritesCubeModel = favoritesCubeModel;
      _uiRootModel = uiRootModel;

      return that;
    }

    return init();
  }

  app.FavoriteGroupController = FavoriteGroupController;

}(wizerati));
