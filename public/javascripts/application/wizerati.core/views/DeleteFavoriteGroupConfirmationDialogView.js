(function (app, $, invertebrate, document) {
  'use strict';

  function DeleteFavoriteGroupConfirmationDialogView(model, favoritesCubeModel) {

    if (!(this instanceof app.DeleteFavoriteGroupConfirmationDialogView)) {
      return new app.DeleteFavoriteGroupConfirmationDialogView(model, favoritesCubeModel);
    }

    var that = this,
        _el = '#delete-favorite-group-confirmation-dialog',
        _messageContainerEl = '.message-container',
        _deleteButtonEl = '.btn-danger',
        _favoritesCubeModel = null,
        _uiModeEnum = app.mod('enum').UIMode;

    this.$el = null;
    this.Model = null;

    this.render = function () {
      var favoriteGroupId = that.Model.getFavoriteGroupId();
      var favoriteGroupName = _favoritesCubeModel.getFavoriteGroupName(favoriteGroupId);
      that.$el.find(_messageContainerEl).html('<p>You have chosen to delete the following group of favorites:</p><blockquote><em>' + favoriteGroupName + '</em></blockquote><p>This cannot be undone.</p><p>Are you sure you want to delete this group?</p>')
      that.$el.find(_deleteButtonEl).attr('href', '/favoritegroup/destroy?id=' + favoriteGroupId);
    };

    this.bindEvents = function () {
      $(document).keyup(function (e) {
        if (e.keyCode === 27 && app.mod('views').uiRootView.Model.getModal() === _uiModeEnum.DeleteFavoriteGroupConfirmationDialog) {
          that.Model.setIsVisible(false);
        }
      });
    };

    this.onDomReady = function () {
      that.$el = $(_el);
      that.bindEvents();
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      if (!favoritesCubeModel) {
        throw 'favoritesCubeModel not supplied';
      }

      that.Model = model;
      _favoritesCubeModel = favoritesCubeModel;

      $.subscribe(that.Model.updateEventUri, that.render);

      return that;
    }

    return init();
  }

  app.DeleteFavoriteGroupConfirmationDialogView = DeleteFavoriteGroupConfirmationDialogView;
  invertebrate.View.isExtendedBy(app.DeleteFavoriteGroupConfirmationDialogView);

}(wizerati, $, invertebrate, document));
