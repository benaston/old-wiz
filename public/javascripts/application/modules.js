//order of declaration matters here.
(function (mod) {
  'use strict';

  try {
    mod.UserRole = {
      Contractor: '1',
      Employer: '2',
      ContractorStranger: '3',
      EmployerStranger: '4'
    };

    mod.UIMode = {
      GreenfieldSearch: '0',
      Search: '1',
      SingleItem: '2'
    };

    mod.Modal = {
      Purchase: '0',
      LogIn: '1',
      MyAccount: '2',
      AccountActivation: '3',
      DeleteFavoriteGroupConfirmationDialog: '4'
    };

    mod.SearchPanelMode = {
      Default: '0',
      Minimized: '1'
    };

    mod.ResultListMode = {
      Default: '0',
      Minimized: '1'
    };

    mod.ItemsOfInterestAction = {
      Remove: '0'
    };

    mod.FavoritesCubeMode = {
      Default: '0',
      Edit: '1'
    };

  } catch (e) {
    throw 'problem registering enum module. ' + e;
  }

}(wizerati.mod('enum')));


(function (mod) {
  'use strict';

  try {
    mod.config = new wizerati.Config(invertebrate.env.dev);
  }
  catch (e) {
    throw 'problem registering config module. ' + e;
  }

}(wizerati.mod('config')));

(function (mod) {
  'use strict';

  try {
    //todo fix the dep injection here
    mod.wizeratiClient = new wizerati.WizeratiClient(new wizerati.WizeratiClientRequestFactory(), 'bar', 'bam');
  }
  catch (e) {
    throw 'problem registering clients module. ' + e;
  }

}(wizerati.mod('clients')));

(function (mod) {
  'use strict';

  try {
    mod.itemCache = new wizerati.ItemCache();
  }
  catch (e) {
    throw 'problem registering caches module. ' + e;
  }

}(wizerati.mod('caches')));

(function (mod) {
  'use strict';

  try {
    mod.authenticationService = new wizerati.AuthenticationService();
    mod.cookieService = new wizerati.CookieService();
    mod.logInService = new wizerati.LogInService(mod.cookieService);
    mod.croniclService = new wizerati.CroniclService(mod.logInService, wizerati.mod('config').config); //pass in login service instead?
    mod.searchService = new wizerati.SearchService(mod.croniclService, wizerati.mod('caches').itemCache);
    mod.accountService = new wizerati.AccountService(wizerati.mod('clients').wizeratiClient);
  }
  catch (e) {
    throw 'problem registering services module. ' + e;
  }

}(wizerati.mod('services')));

(function (mod) {

  try {
    mod.itemRepository = new wizerati.ItemRepository(wizerati.mod('caches').itemCache, wizerati.mod('services').croniclService);
  }
  catch (e) {
    throw 'problem registering repositories module. ' + e;
  }

}(wizerati.mod('repositories')));

(function (mod) {
  'use strict';

  try {
    mod.TemplateUriHelper = new invertebrate.TemplateUriHelper(wizerati.mod('config').config, wizerati.mod('services').croniclService.getCroniclUri);
  }
  catch (e) {
    throw 'problem registering templates module. ' + e;
  }

}(wizerati.mod('templates')));

(function (mod, i, config) {
  'use strict';

  function traceCalls(context, done) {
    if (config.enableTrace === 'true') {
      console.log(context.timestamp + ': ' + context.ctor + '::' + context.methodName + '%s', context.args.length > 0 ? ' called with: ' + context.args : '');
    }
    return done(null, null);
  }

  try {
    mod.searchFormModel = i.util.decorate(new wizerati.SearchFormModel(), traceCalls);
    mod.uiRootModel = i.util.decorate(new wizerati.UIRootModel(), traceCalls);
    mod.loginPanelModel = i.util.decorate(new wizerati.LoginPanelModel(), traceCalls);
    mod.resultListModel = i.util.decorate(new wizerati.ResultListModel(), traceCalls);
    mod.selectedCubeFaceModel = i.util.decorate(new wizerati.SelectedCubeFaceModel(), traceCalls);
    mod.selectedItemModel = i.util.decorate(new wizerati.SelectedItemModel(), traceCalls);
    mod.hiddenItemsModel = i.util.decorate(new wizerati.HiddenItemsModel(), traceCalls);
    mod.actionedItemsModel = i.util.decorate(new wizerati.ActionedItemsModel(), traceCalls);
    mod.favoritesCubeModel = i.util.decorate(new wizerati.FavoritesCubeModel(wizerati.mod('repositories').itemRepository, mod.resultListModel), traceCalls);
    mod.itemsOfInterestModel = i.util.decorate(new wizerati.ItemsOfInterestModel(mod.selectedItemModel), traceCalls);
    mod.purchasePanelModel = i.util.decorate(new wizerati.PurchasePanelModel(), traceCalls);
    mod.searchPanelModel = i.util.decorate(new wizerati.SearchPanelModel(), traceCalls);
    mod.deleteFavoriteGroupConfirmationDialogModel = i.util.decorate(new wizerati.DeleteFavoriteGroupConfirmationDialogModel(), traceCalls);
  }
  catch (e) {
    throw 'problem registering models module. ' + e;
  }

}(wizerati.mod('models'), invertebrate, wizerati.mod('config').config.config));

(function (mod) {
  'use strict';

  try {
    mod.favoriteViewFactory = new wizerati.FavoriteViewFactory(wizerati.mod('services').logInService, wizerati.mod('repositories').itemRepository, wizerati.mod('models').selectedItemModel, wizerati.mod('models').hiddenItemsModel, wizerati.mod('models').actionedItemsModel, wizerati.mod('models').itemsOfInterestModel);
    mod.itemOfInterestViewFactory = new wizerati.ItemOfInterestViewFactory(wizerati.mod('services').logInService, wizerati.mod('repositories').itemRepository, wizerati.mod('models').selectedItemModel, wizerati.mod('models').itemsOfInterestModel, wizerati.mod('models').favoritesCubeModel, wizerati.mod('models').hiddenItemsModel, wizerati.mod('models').actionedItemsModel);
    mod.resultViewFactory = new wizerati.ResultViewFactory(wizerati.mod('services').logInService, wizerati.mod('repositories').itemRepository, wizerati.mod('models').selectedItemModel, wizerati.mod('models').hiddenItemsModel, wizerati.mod('models').actionedItemsModel, wizerati.mod('models').itemsOfInterestModel);
    mod.wizeratiClientRequestFactory = new wizerati.WizeratiClientRequestFactory();
    mod.guidFactory = new wizerati.GuidFactory();
  }
  catch (e) {
    throw 'problem registering factories module. ' + e;
  }

}(wizerati.mod('factories')));

(function (mod) {
  'use strict';

  try {
    mod.searchFormView = new wizerati.SearchFormView(wizerati.mod('models').searchFormModel);
    mod.uiRootView = new wizerati.UIRootView(wizerati.mod('models').uiRootModel);
    mod.loginPanelView = new wizerati.LoginPanelView(wizerati.mod('models').loginPanelModel);
    mod.favoritesCubeView = new wizerati.FavoritesCubeView(wizerati.mod('models').favoritesCubeModel, wizerati.mod('factories').favoriteViewFactory, wizerati.mod('models').selectedCubeFaceModel, wizerati.mod('models').selectedItemModel, wizerati.mod('models').hiddenItemsModel, wizerati.mod('models').actionedItemsModel, wizerati.mod('models').itemsOfInterestModel);
    mod.resultListView = new wizerati.ResultListView(wizerati.mod('models').resultListModel, wizerati.mod('factories').resultViewFactory, wizerati.mod('models').selectedCubeFaceModel, wizerati.mod('models').selectedItemModel, wizerati.mod('models').favoritesCubeModel, wizerati.mod('models').hiddenItemsModel, wizerati.mod('models').actionedItemsModel, wizerati.mod('models').itemsOfInterestModel);
    mod.itemsOfInterestView = new wizerati.ItemsOfInterestView(wizerati.mod('models').itemsOfInterestModel, wizerati.mod('factories').itemOfInterestViewFactory, wizerati.mod('models').selectedCubeFaceModel, wizerati.mod('models').selectedItemModel, wizerati.mod('models').favoritesCubeModel, wizerati.mod('models').hiddenItemsModel, wizerati.mod('models').actionedItemsModel);
    mod.purchasePanelView = new wizerati.PurchasePanelView(wizerati.mod('models').purchasePanelModel);
    mod.searchPanelView = new wizerati.SearchPanelView(wizerati.mod('models').searchPanelModel);
    mod.deleteFavoriteGroupConfirmationDialogView = new wizerati.DeleteFavoriteGroupConfirmationDialogView(wizerati.mod('models').deleteFavoriteGroupConfirmationDialogModel, wizerati.mod('models').favoritesCubeModel);
  }
  catch (e) {
    throw 'problem registering views module. ' + e;
  }

}(wizerati.mod('views')));

(function (mod) {
  'use strict';

  try {
    mod.sessionController = new wizerati.SessionController(wizerati.mod('models').loginPanelModel,
        wizerati.mod('services').authenticationService);
    mod.loginController = new wizerati.LoginController(wizerati.mod('models').loginPanelModel,
        wizerati.mod('models').uiRootModel);
    mod.homeController = new wizerati.HomeController(wizerati.mod('models').uiRootModel, wizerati.mod('models').searchPanelModel, wizerati.mod('models').resultListModel);
    mod.advertisersController = new wizerati.AdvertisersController(wizerati.mod('models').uiRootModel);
    mod.searchController = new wizerati.SearchController(wizerati.mod('models').uiRootModel,
        wizerati.mod('models').searchFormModel,
        wizerati.mod('services').searchService,
        wizerati.mod('models').resultListModel,
        wizerati.mod('factories').guidFactory);
    mod.selectedItemController = new wizerati.SelectedItemController(wizerati.mod('models').selectedItemModel, wizerati.mod('models').searchPanelModel, wizerati.mod('models').resultListModel);
    mod.favoritesController = new wizerati.FavoritesController(wizerati.mod('models').favoritesCubeModel, wizerati.mod('models').selectedCubeFaceModel);
    mod.selectedCubeFaceController = new wizerati.SelectedCubeFaceController(wizerati.mod('models').selectedCubeFaceModel);
    mod.itemsOfInterestController = new wizerati.ItemsOfInterestController(wizerati.mod('models').itemsOfInterestModel);
    mod.hiddenItemsController = new wizerati.HiddenItemsController(wizerati.mod('models').hiddenItemsModel);
    mod.actionedItemsController = new wizerati.ActionedItemsController(wizerati.mod('models').actionedItemsModel);
    mod.purchasePanelController = new wizerati.PurchasePanelController(wizerati.mod('models').purchasePanelModel, wizerati.mod('models').uiRootModel);
    mod.accountActivationController = new wizerati.AccountActivationController(wizerati.mod('models').uiRootModel);
    mod.accountActivationPanelController = new wizerati.AccountActivationPanelController(wizerati.mod('models').uiRootModel);
    mod.purchasePanelAccountsController = new wizerati.PurchasePanelAccountsController(wizerati.mod('models').purchasePanelModel, wizerati.mod('services').accountService);
    mod.searchPanelModeController = new wizerati.SearchPanelModeController(wizerati.mod('models').searchPanelModel);
    mod.resultListModeController = new wizerati.ResultListModeController(wizerati.mod('models').resultListModel);
    mod.favoriteGroupController = new wizerati.FavoriteGroupController(wizerati.mod('models').favoritesCubeModel, wizerati.mod('models').uiRootModel);
    mod.favoritesCubeModeController = new wizerati.FavoritesCubeModeController(wizerati.mod('models').favoritesCubeModel);
    mod.deleteFavoriteGroupConfirmationDialogController = new wizerati.DeleteFavoriteGroupConfirmationDialogController(wizerati.mod('models').deleteFavoriteGroupConfirmationDialogModel, wizerati.mod('models').uiRootModel);
  }
  catch (e) {
    throw 'problem registering controllers module. ' + e;
  }

}(wizerati.mod('controllers')));

(function (mod) {
  'use strict';

  try {
    mod.postRenderActions = [];
  }
  catch (e) {
    throw 'problem registering ui module. ' + e;
  }

}(wizerati.mod('ui')));
