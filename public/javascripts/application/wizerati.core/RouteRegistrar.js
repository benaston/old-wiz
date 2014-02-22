(function (app) {
  'use strict';

  function RouteRegistrar() {
    if (!(this instanceof app.RouteRegistrar)) {
      return new app.RouteRegistrar();
    }

    var that = this;

    this.registerRoutes = function (instance) {
      try {

        instance.router.registerRoute('/', function () {
          app.mod('controllers').homeController.index();
        });

        instance.router.registerRoute('/session/create', function (model) {
          app.mod('controllers').sessionController.create(model);
        });

        instance.router.registerRoute('/login', function () {
          app.mod('controllers').loginController.index();
        });

        instance.router.registerRoute('/advertisers', function () {
          app.mod('controllers').advertisersController.index();
        });

        instance.router.registerRoute('/search', function (dto) {
          app.mod('controllers').searchController.show(dto);
        }, { title: 'Wizerati Search', uriTransform: app.mod('controllers').searchController.uriTransformShow });

        instance.router.registerRoute('/selecteditem/update', function (dto) {
          app.mod('controllers').selectedItemController.update(dto);
        }, { silent: true });

        instance.router.registerRoute('/favorites/create', function (dto) {
          app.mod('controllers').favoritesController.create(dto);
        }, { silent: true });

        instance.router.registerRoute('/favorites/destroy', function (dto) {
          app.mod('controllers').favoritesController.destroy(dto);
        }, { silent: true });

        instance.router.registerRoute('/selectedcubeface/update', function (dto) {
          app.mod('controllers').selectedCubeFaceController.update(dto);
        }, { silent: true });

        instance.router.registerRoute('/itemsofinterest/create', function (dto) {
          app.mod('controllers').itemsOfInterestController.create(dto);
        }, { silent: true });

        instance.router.registerRoute('/itemsofinterest/destroy', function (dto) {
          app.mod('controllers').itemsOfInterestController.destroy(dto);
        }, { silent: true });

        instance.router.registerRoute('/hiddenitems/create', function (dto) {
          app.mod('controllers').hiddenItemsController.create(dto);
        }, { silent: true });

        instance.router.registerRoute('/hiddenitems/destroy', function (dto) {
          app.mod('controllers').hiddenItemsController.destroy(dto);
        }, { silent: true });

        instance.router.registerRoute('/actioneditems/create', function (dto) {
          app.mod('controllers').actionedItemsController.create(dto);
        }, { silent: true });

        instance.router.registerRoute('/actioneditems/destroy', function (dto) {
          app.mod('controllers').actionedItemsController.destroy(dto);
        }, { silent: true });

        instance.router.registerRoute('/purchasepanel', function (dto) {
          app.mod('controllers').purchasePanelController.index(dto);
        });

        instance.router.registerRoute('/purchasepanel/destroy', function (dto) {
          app.mod('controllers').purchasePanelController.destroy(dto);
        });

        instance.router.registerRoute('/accountactivationpanel', function (dto) {
          app.mod('controllers').accountActivationPanelController.index(dto);
        });

        instance.router.registerRoute('/accountactivationpanel/destroy', function (dto) {
          app.mod('controllers').accountActivationPanelController.destroy(dto);
        });

        instance.router.registerRoute('/accountactivation/create', function (dto) {
          app.mod('controllers').accountActivationController.create(dto);
        });

        instance.router.registerRoute('/purchasepanelaccounts/create', function (dto) {
          app.mod('controllers').purchasePanelAccountsController.create(dto);
        });

        instance.router.registerRoute('/searchpanelmode/update', function (dto) {
          app.mod('controllers').searchPanelModeController.update(dto);
        }, { silent: true });

        instance.router.registerRoute('/resultlistmode/update', function (dto) {
          app.mod('controllers').resultListModeController.update(dto);
        }, { silent: true });

        instance.router.registerRoute('/favoritegroup/create', function (dto) {
          app.mod('controllers').favoriteGroupController.create(dto);
        }, { silent: true });

        instance.router.registerRoute('/favoritegroup/destroy', function (dto) {
          app.mod('controllers').favoriteGroupController.destroy(dto);
        }, { silent: true });

        instance.router.registerRoute('/favoritescubemode/update', function (dto) {
          app.mod('controllers').favoritesCubeModeController.update(dto);
        }, { silent: true });

        instance.router.registerRoute('/deletefavoritegroupconfirmationdialog', function (dto) {
          app.mod('controllers').deleteFavoriteGroupConfirmationDialogController.index(dto);
        }, { silent: true });

        instance.router.registerRoute('/deletefavoritegroupconfirmationdialog/destroy', function (dto) {
          app.mod('controllers').deleteFavoriteGroupConfirmationDialogController.destroy(dto);
        }, { silent: true });

      } catch (e) {
        throw 'RouteRegistrar::registerRoutes threw an exception. ' + e;
      }
    };

    function init() {
    }

    return init();
  }

  app.RouteRegistrar = RouteRegistrar;
}(wizerati));
