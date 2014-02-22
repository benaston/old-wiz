jQuery(document).ready(function () {
    "use strict";

    //dom binding
    window.wizerati.instance = new wizerati.App(window.invertebrate.env.dev, new window.invertebrate.Router('Wizerati'));

    _.each(window.wizerati.mod("views"), function (v) {
        v.onDomReady();
    });

    //this should happen at the end here to ensure everything is initialized before routing begins
    new wizerati.RouteRegistrar().registerRoutes(window.wizerati.instance)
});



;//order of declaration matters here.
(function (mod) {
    "use strict";

    try {
        mod.UserRole = {
            Contractor: "1",
            Employer: "2",
            ContractorStranger: "3",
            EmployerStranger: "4"
        };

        mod.UIMode = {
            GreenfieldSearch: "0",
            Search: "1",
            SingleItem: "2"
        };

        mod.Modal = {
            Purchase: "0",
            LogIn: "1",
            MyAccount: "2",
            AccountActivation: "3",
            DeleteFavoriteGroupConfirmationDialog: "4"
        };

        mod.SearchPanelMode = {
            Default: "0",
            Minimized: "1"
        };

        mod.ResultListMode = {
            Default: "0",
            Minimized: "1"
        };

        mod.ItemsOfInterestAction = {
            Remove: "0"
        };

        mod.FavoritesCubeMode = {
            Default: "0",
            Edit: "1"
        };

    } catch (e) {
        throw "problem registering enum module. " + e;
    }

}(wizerati.mod("enum")));


(function (mod) {
    "use strict";

    try {
        mod.config = new wizerati.Config(invertebrate.env.dev);
    }
    catch (e) {
        throw "problem registering config module. " + e;
    }

}(wizerati.mod("config")));

(function (mod) {
    "use strict";

    try {
        //todo fix the dep injection here
        mod.wizeratiClient = new wizerati.WizeratiClient(new wizerati.WizeratiClientRequestFactory(), "bar", "bam");
    }
    catch (e) {
        throw "problem registering clients module. " + e;
    }

}(wizerati.mod("clients")));

(function (mod) {
    "use strict";

    try {
        mod.itemCache = new wizerati.ItemCache();
    }
    catch (e) {
        throw "problem registering caches module. " + e;
    }

}(wizerati.mod("caches")));

(function (mod) {
    "use strict";

    try {
        mod.authenticationService = new wizerati.AuthenticationService();
        mod.cookieService = new wizerati.CookieService();
        mod.logInService = new wizerati.LogInService(mod.cookieService);
        mod.croniclService = new wizerati.CroniclService(mod.logInService, wizerati.mod("config").config); //pass in login service instead?
        mod.searchService = new wizerati.SearchService(mod.croniclService, wizerati.mod("caches").itemCache);
        mod.accountService = new wizerati.AccountService(wizerati.mod("clients").wizeratiClient);
    }
    catch (e) {
        throw "problem registering services module. " + e;
    }

}(wizerati.mod("services")));

(function (mod) {

    try {
        mod.itemRepository = new wizerati.ItemRepository(wizerati.mod("caches").itemCache, wizerati.mod("services").croniclService);
    }
    catch (e) {
        throw "problem registering repositories module. " + e;
    }

}(wizerati.mod("repositories")));

(function (mod) {
    "use strict";

    try {
        mod.TemplateUriHelper = new invertebrate.TemplateUriHelper(wizerati.mod("config").config, wizerati.mod("services").croniclService.getCroniclUri);
    }
    catch (e) {
        throw "problem registering templates module. " + e;
    }

}(wizerati.mod("templates")));

(function (mod, i, config) {
    "use strict";

    function traceCalls(context, done) {
        if(config.enableTrace === "true") {
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
        mod.favoritesCubeModel = i.util.decorate(new wizerati.FavoritesCubeModel(wizerati.mod("repositories").itemRepository, mod.resultListModel), traceCalls);
        mod.itemsOfInterestModel = i.util.decorate(new wizerati.ItemsOfInterestModel(mod.selectedItemModel), traceCalls);
        mod.purchasePanelModel = i.util.decorate(new wizerati.PurchasePanelModel(), traceCalls);
        mod.searchPanelModel = i.util.decorate(new wizerati.SearchPanelModel(), traceCalls);
        mod.deleteFavoriteGroupConfirmationDialogModel = i.util.decorate(new wizerati.DeleteFavoriteGroupConfirmationDialogModel(), traceCalls);
    }
    catch (e) {
        throw "problem registering models module. " + e;
    }

}(wizerati.mod("models"), invertebrate, wizerati.mod("config").config.config));

(function (mod) {
    "use strict";

    try {
        mod.favoriteViewFactory = new wizerati.FavoriteViewFactory(wizerati.mod("services").logInService, wizerati.mod("repositories").itemRepository, wizerati.mod("models").selectedItemModel, wizerati.mod("models").hiddenItemsModel, wizerati.mod("models").actionedItemsModel, wizerati.mod("models").itemsOfInterestModel);
        mod.itemOfInterestViewFactory = new wizerati.ItemOfInterestViewFactory(wizerati.mod("services").logInService, wizerati.mod("repositories").itemRepository, wizerati.mod("models").selectedItemModel, wizerati.mod("models").itemsOfInterestModel, wizerati.mod("models").favoritesCubeModel, wizerati.mod("models").hiddenItemsModel, wizerati.mod("models").actionedItemsModel);
        mod.resultViewFactory = new wizerati.ResultViewFactory(wizerati.mod("services").logInService, wizerati.mod("repositories").itemRepository, wizerati.mod("models").selectedItemModel, wizerati.mod("models").hiddenItemsModel, wizerati.mod("models").actionedItemsModel, wizerati.mod("models").itemsOfInterestModel);
        mod.wizeratiClientRequestFactory = new wizerati.WizeratiClientRequestFactory();
        mod.guidFactory = new wizerati.GuidFactory();
    }
    catch (e) {
        throw "problem registering factories module. " + e;
    }

}(wizerati.mod("factories")));

(function (mod) {
    "use strict";

    try {
        mod.searchFormView = new wizerati.SearchFormView(wizerati.mod("models").searchFormModel);
        mod.uiRootView = new wizerati.UIRootView(wizerati.mod("models").uiRootModel);
        mod.loginPanelView = new wizerati.LoginPanelView(wizerati.mod("models").loginPanelModel);
        mod.favoritesCubeView = new wizerati.FavoritesCubeView(wizerati.mod("models").favoritesCubeModel, wizerati.mod("factories").favoriteViewFactory, wizerati.mod("models").selectedCubeFaceModel, wizerati.mod("models").selectedItemModel, wizerati.mod("models").hiddenItemsModel, wizerati.mod("models").actionedItemsModel, wizerati.mod("models").itemsOfInterestModel);
        mod.resultListView = new wizerati.ResultListView(wizerati.mod("models").resultListModel, wizerati.mod("factories").resultViewFactory, wizerati.mod("models").selectedCubeFaceModel, wizerati.mod("models").selectedItemModel, wizerati.mod("models").favoritesCubeModel, wizerati.mod("models").hiddenItemsModel, wizerati.mod("models").actionedItemsModel, wizerati.mod("models").itemsOfInterestModel);
        mod.itemsOfInterestView = new wizerati.ItemsOfInterestView(wizerati.mod("models").itemsOfInterestModel, wizerati.mod("factories").itemOfInterestViewFactory, wizerati.mod("models").selectedCubeFaceModel, wizerati.mod("models").selectedItemModel, wizerati.mod("models").favoritesCubeModel, wizerati.mod("models").hiddenItemsModel, wizerati.mod("models").actionedItemsModel);
        mod.purchasePanelView = new wizerati.PurchasePanelView(wizerati.mod("models").purchasePanelModel);
        mod.searchPanelView = new wizerati.SearchPanelView(wizerati.mod("models").searchPanelModel);
        mod.deleteFavoriteGroupConfirmationDialogView = new wizerati.DeleteFavoriteGroupConfirmationDialogView(wizerati.mod("models").deleteFavoriteGroupConfirmationDialogModel, wizerati.mod("models").favoritesCubeModel);
    }
    catch (e) {
        throw "problem registering views module. " + e;
    }

}(wizerati.mod("views")));

(function (mod) {
    "use strict";

    try {
        mod.sessionController = new wizerati.SessionController(wizerati.mod("models").loginPanelModel,
            wizerati.mod("services").authenticationService);
        mod.loginController = new wizerati.LoginController(wizerati.mod("models").loginPanelModel,
            wizerati.mod("models").uiRootModel);
        mod.homeController = new wizerati.HomeController(wizerati.mod("models").uiRootModel);
        mod.advertisersController = new wizerati.AdvertisersController(wizerati.mod("models").uiRootModel);
        mod.searchController = new wizerati.SearchController(wizerati.mod("models").uiRootModel,
            wizerati.mod("models").searchFormModel,
            wizerati.mod("services").searchService,
            wizerati.mod("models").resultListModel,
            wizerati.mod("factories").guidFactory);
        mod.selectedItemController = new wizerati.SelectedItemController(wizerati.mod("models").selectedItemModel, wizerati.mod("models").searchPanelModel, wizerati.mod("models").resultListModel);
        mod.favoritesController = new wizerati.FavoritesController(wizerati.mod("models").favoritesCubeModel, wizerati.mod("models").selectedCubeFaceModel);
        mod.selectedCubeFaceController = new wizerati.SelectedCubeFaceController(wizerati.mod("models").selectedCubeFaceModel);
        mod.itemsOfInterestController = new wizerati.ItemsOfInterestController(wizerati.mod("models").itemsOfInterestModel);
        mod.hiddenItemsController = new wizerati.HiddenItemsController(wizerati.mod("models").hiddenItemsModel);
        mod.actionedItemsController = new wizerati.ActionedItemsController(wizerati.mod("models").actionedItemsModel);
        mod.purchasePanelController = new wizerati.PurchasePanelController(wizerati.mod("models").purchasePanelModel, wizerati.mod("models").uiRootModel);
        mod.accountActivationController = new wizerati.AccountActivationController(wizerati.mod("models").uiRootModel);
        mod.accountActivationPanelController = new wizerati.AccountActivationPanelController(wizerati.mod("models").uiRootModel);
        mod.purchasePanelAccountsController = new wizerati.PurchasePanelAccountsController(wizerati.mod("models").purchasePanelModel, wizerati.mod("services").accountService);
        mod.searchPanelModeController = new wizerati.SearchPanelModeController(wizerati.mod("models").searchPanelModel);
        mod.resultListModeController = new wizerati.ResultListModeController(wizerati.mod("models").resultListModel);
        mod.favoriteGroupController = new wizerati.FavoriteGroupController(wizerati.mod("models").favoritesCubeModel, wizerati.mod("models").uiRootModel);
        mod.favoritesCubeModeController = new wizerati.FavoritesCubeModeController(wizerati.mod("models").favoritesCubeModel);
        mod.deleteFavoriteGroupConfirmationDialogController = new wizerati.DeleteFavoriteGroupConfirmationDialogController(wizerati.mod("models").deleteFavoriteGroupConfirmationDialogModel, wizerati.mod("models").uiRootModel);
    }
    catch (e) {
        throw "problem registering controllers module. " + e;
    }

}(wizerati.mod("controllers")));

(function (mod) {
    "use strict";

    try {
        mod.postRenderActions = [];
    }
    catch (e) {
        throw "problem registering ui module. " + e;
    }

}(wizerati.mod("ui")));

;(function (app, invertebrate) {
    "use strict";

    console.log("apply should prompt the user for credentials if not signed in, otherwise present the fields for registration")
    function App(env, router) {
        if (!(this instanceof app.App)) {
            return new app.App(env, router);
        }

        var that = this;

        function init() {
            if (!env) {
                throw "env not supplied";
            }

            if (!router) {
                throw "router not supplied";
            }

            that.env = env;
            that.router = router;

            return _.extend(that, new invertebrate.App(app.mod("templates").TemplateUriHelper));
        }

        return init();
    }

    app.App = App;
}(wizerati, invertebrate));;(function (app) {
    "use strict";

    function Config(env) {
        if (!(this instanceof app.Config)) {
            return new app.Config(env);
        }

        var that = this,
            devConfig = {
                wizeratiUri: "/",
                templateServerUris: {
                    "1": "./contract/",
                    "2": "./contractor/",
                    "3": "./contract/",
                    "4": "./contractor/"
                },
                "enableTrace": "false"
            },
            prodConfig = {
                wizeratiUri: "https://www.wizerati.com/",
                templateServerUris: { Contractor: "https://contract.croni.cl/",
                                      Employer: "https://contractor.croni.cl/" }
            },
            sharedConfig = {
                templatesUriPart: "templates/",
                templatePostRenderScriptsUriPart: "template-post-render-scripts/",
                metadataUriPart: "metadata"
            };

        function init() {
            if (!env) {
                throw "env not supplied";
            }

            var config = _.extend(that, new invertebrate.Config(env));
            config.devConfig = devConfig;
            config.prodConfig = prodConfig;
            config.sharedConfig = sharedConfig;
            config.collateConfiguration();
            return config;
        }

        return init();
    }

    app.Config = Config;

}(wizerati));;(function (app) {
    "use strict";

    function RouteRegistrar() {
        if (!(this instanceof app.RouteRegistrar)) {
            return new app.RouteRegistrar();
        }

        var that = this;

        this.registerRoutes = function (instance) {
            try {

                instance.router.registerRoute('/', function () {
                    app.mod("controllers").homeController.index();
                });

                instance.router.registerRoute('/session/create', function (model) {
                    app.mod("controllers").sessionController.create(model);
                });

                instance.router.registerRoute('/login', function () {
                    app.mod("controllers").loginController.index();
                });

                instance.router.registerRoute('/advertisers', function () {
                    app.mod("controllers").advertisersController.index();
                });

                instance.router.registerRoute('/search', function (dto) {
                    app.mod("controllers").searchController.show(dto);
                }, { title: 'Wizerati Search', uriTransform: app.mod("controllers").searchController.uriTransformShow });

                instance.router.registerRoute('/selecteditem/update', function (dto) {
                    app.mod("controllers").selectedItemController.update(dto);
                }, { silent: true });

                instance.router.registerRoute('/favorites/create', function (dto) {
                    app.mod("controllers").favoritesController.create(dto);
                }, { silent: true });

                instance.router.registerRoute('/favorites/destroy', function (dto) {
                    app.mod("controllers").favoritesController.destroy(dto);
                }, { silent: true });

                instance.router.registerRoute('/selectedcubeface/update', function (dto) {
                    app.mod("controllers").selectedCubeFaceController.update(dto);
                }, { silent: true });

                instance.router.registerRoute('/itemsofinterest/create', function (dto) {
                    app.mod("controllers").itemsOfInterestController.create(dto);
                }, { silent: true });

                instance.router.registerRoute('/itemsofinterest/destroy', function (dto) {
                    app.mod("controllers").itemsOfInterestController.destroy(dto);
                }, { silent: true });

                instance.router.registerRoute('/hiddenitems/create', function (dto) {
                    app.mod("controllers").hiddenItemsController.create(dto);
                }, { silent: true });

                instance.router.registerRoute('/hiddenitems/destroy', function (dto) {
                    app.mod("controllers").hiddenItemsController.destroy(dto);
                }, { silent: true });

                instance.router.registerRoute('/actioneditems/create', function (dto) {
                    app.mod("controllers").actionedItemsController.create(dto);
                }, { silent: true });

                instance.router.registerRoute('/actioneditems/destroy', function (dto) {
                    app.mod("controllers").actionedItemsController.destroy(dto);
                }, { silent: true });

                instance.router.registerRoute('/purchasepanel', function (dto) {
                    app.mod("controllers").purchasePanelController.index(dto);
                });

                instance.router.registerRoute('/purchasepanel/destroy', function (dto) {
                    app.mod("controllers").purchasePanelController.destroy(dto);
                });

                instance.router.registerRoute('/accountactivationpanel', function (dto) {
                    app.mod("controllers").accountActivationPanelController.index(dto);
                });

                instance.router.registerRoute('/accountactivationpanel/destroy', function (dto) {
                    app.mod("controllers").accountActivationPanelController.destroy(dto);
                });

                instance.router.registerRoute('/accountactivation/create', function (dto) {
                    app.mod("controllers").accountActivationController.create(dto);
                });

                instance.router.registerRoute('/purchasepanelaccounts/create', function (dto) {
                    app.mod("controllers").purchasePanelAccountsController.create(dto);
                });

                instance.router.registerRoute('/searchpanelmode/update', function (dto) {
                    app.mod("controllers").searchPanelModeController.update(dto);
                }, { silent: true });

                instance.router.registerRoute('/resultlistmode/update', function (dto) {
                    app.mod("controllers").resultListModeController.update(dto);
                }, { silent: true });

                instance.router.registerRoute('/favoritegroup/create', function (dto) {
                    app.mod("controllers").favoriteGroupController.create(dto);
                }, { silent: true });

                instance.router.registerRoute('/favoritegroup/destroy', function (dto) {
                    app.mod("controllers").favoriteGroupController.destroy(dto);
                }, { silent: true });

                instance.router.registerRoute('/favoritescubemode/update', function (dto) {
                    app.mod("controllers").favoritesCubeModeController.update(dto);
                }, { silent: true });

                instance.router.registerRoute('/deletefavoritegroupconfirmationdialog', function (dto) {
                    app.mod("controllers").deleteFavoriteGroupConfirmationDialogController.index(dto);
                }, { silent: true });

                instance.router.registerRoute('/deletefavoritegroupconfirmationdialog/destroy', function (dto) {
                    app.mod("controllers").deleteFavoriteGroupConfirmationDialogController.destroy(dto);
                }, { silent: true });

            } catch(e) {
                throw "RouteRegistrar::registerRoutes threw an exception. " + e;
            }
        };

        function init() {
        }

        return init();
    }

    app.RouteRegistrar = RouteRegistrar;
}(wizerati));;(function (app) {
    "use strict";

    function ItemCache() {

        if (!(this instanceof app.ItemCache)) {
            return new app.ItemCache();
        }

        var that = this;

        this.items = {};

        //note: if the item already exists then
        // any additional metadata on the object
        // is retained (e.g. whether it is
        // currently selected)
        this.insert = function(items){
            if(!items){
                throw "items not supplied.";
            }

            _.each(items, function(i){
                that.items[i.id] = _.extend({}, that.items[i.id], i);
            });
        };

        this.exists = function(key){
            if(!key){
                throw "key not supplied.";
            }

            return !!(that.items[key]);
        };

        function init() {

            return that;
        }

        return init();
    }

    app.ItemCache = ItemCache;

}(wizerati));;(function (app) {
    "use strict";

    function WizeratiClient(requestFactory, 
                            restClientFetch, 
                            restClientStore) {

        if (!(this instanceof app.WizeratiClient)) {
            return new app.WizeratiClient(requestFactory, 
                                          restClientFetch, 
                                          restClientStore);
        }

        var that = this,
            _requestFactory = null,
            _restClientFetch = null,
            _restClientStore = null;

        this.get = function (entity, options) {
            if(!entity) {
                throw "entity not supplied."
            }

            if(!options) {
                throw "options not supplied."
            }

            if(!options.success) {
                throw "options.success not supplied."
            }

            if(!options.fail) {
                throw "options.fail not supplied."
            }

            var request = _requestFactory.createForGet(entity);
            
            _restClientFetch.Execute(request, options);
        };

        this.put = function (entity, options) {
            if(!entity) {
                throw "entity not supplied."
            }

            if(!options) {
                throw "options not supplied."
            }

            if(!options.success) {
                throw "options.success not supplied."
            }

            if(!options.fail) {
                throw "options.fail not supplied."
            }

            var request = _requestFactory.createForPut(entity);
            
            _restClientStore.Execute(request, options);
        };

        this.post = function (entity, options) {
            if(!entity) {
                throw "entity not supplied."
            }

            if(!options) {
                throw "options not supplied."
            }

            if(!options.success) {
                throw "options.success not supplied."
            }

            if(!options.fail) {
                throw "options.fail not supplied."
            }

            var request = _requestFactory.createForPost(entity);
            
            _restClientStore.Execute(request, options);
        };

        function init() {
            if (!requestFactory) {
                throw "requestFactory not supplied";
            }
            
            if (!restClientFetch) {
                throw "restClientFetch not supplied";
            }

            if (!restClientStore) {
                throw "restClientStore not supplied";
            }

            _requestFactory = requestFactory;
            _restClientFetch = restClientFetch;
            _restClientStore = restClientStore;

            return that;
        }

        return init();
    }

    app.WizeratiClient = WizeratiClient;

}(wizerati));
;(function (app) {
  'use strict';

  function AccountActivationController(uiRootModel) {

    if (!(this instanceof app.AccountActivationController)) {
      return new app.AccountActivationController(uiRootModel);
    }

    var that = this,
        _uiRootModel = null,
        _modalEnum = wizerati.mod('enum').Modal;

    this.create = function (dto) {

      //send the key to the server and render the result
    };

    function init() {
      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      _uiRootModel = uiRootModel;

      return that;
    }

    return init();
  }

  app.AccountActivationController = AccountActivationController;

}(wizerati));
;(function (app) {
  'use strict';

  function AccountActivationPanelController(uiRootModel) {

    if (!(this instanceof app.AccountActivationPanelController)) {
      return new app.AccountActivationPanelController(uiRootModel);
    }

    var that = this,
        _uiRootModel = null,
        _uiModeEnum = wizerati.mod('enum').UIMode,
        _modalEnum = wizerati.mod('enum').Modal;

    this.index = function () {
      _uiRootModel.setModal(_modalEnum.AccountActivation);
    };

    this.destroy = function (dto) {
      try {
        _uiRootModel.setModal(null);
      } catch (e) {
        console.log('error: AccountActivationPanelController.destroy. ' + e);
      }

      var uiMode = _uiRootModel.getUIMode();

      //refactor?
      if (uiMode === _uiModeEnum.GreenfieldSearch) {
        app.instance.router.redirect('/');
      } else if (uiMode === _uiModeEnum.Search) {
        app.instance.router.redirect('/search');
      } else {
        throw 'invalid UI mode'
      }
    };

    function init() {
      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      _uiRootModel = uiRootModel;

      return that;
    }

    return init();
  }

  app.AccountActivationPanelController = AccountActivationPanelController;

}(wizerati));
;(function (app) {
  'use strict';

  function ActionedItemsController(actionedItemsModel) {

    if (!(this instanceof app.ActionedItemsController)) {
      return new app.ActionedItemsController(actionedItemsModel);
    }

    var that = this,
        _actionedItemsModel = null;

    this.create = function (dto) {
      if (!dto) {
        throw 'dto not supplied.';
      }

      _actionedItemsModel.addActionedItemId(dto.id);
    };

    this.destroy = function (dto) {

      _actionedItemsModel.removeActionedItemId(dto.id);
    };

    function init() {
      if (!actionedItemsModel) {
        throw 'actionedItemsModel not supplied.';
      }

      _actionedItemsModel = actionedItemsModel;

      return that;
    }

    return init();
  }

  app.ActionedItemsController = ActionedItemsController;

}(wizerati));
;(function (app) {
  'use strict';

  function AdvertisersController(uiRootModel) {

    if (!(this instanceof app.AdvertisersController)) {
      return new app.AdvertisersController(uiRootModel);
    }

    var that = this,
        _uiRootModel = null,
        _uiModeEnum = app.mod('enum').UIMode;

    this.index = function () {
      try {
        _uiRootModel.setUIMode(_uiModeEnum.Purchase);
      } catch (err) {
        console.log('error: AdvertisersController.index');
      }
    };

    function init() {
      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      _uiRootModel = uiRootModel;

      return that;
    }

    return init();
  }

  app.AdvertisersController = AdvertisersController;

}(wizerati));
;(function (app) {
  'use strict';

  function DeleteFavoriteGroupConfirmationDialogController(deleteFavoriteGroupConfirmationDialogModel, uiRootModel) {

    if (!(this instanceof app.DeleteFavoriteGroupConfirmationDialogController)) {
      return new app.DeleteFavoriteGroupConfirmationDialogController(deleteFavoriteGroupConfirmationDialogModel, uiRootModel);
    }

    var that = this,
        _deleteFavoriteGroupConfirmationDialogModel = null,
        _uiRootModel = null,
        _modalEnum = app.mod('enum').Modal;

    this.index = function (dto) {
      if (dto.__isInvertebrateExternal__) {
        app.instance.router.redirect('/');
        return;
      }

      _deleteFavoriteGroupConfirmationDialogModel.setFavoriteGroupId(dto.id);

      if (_uiRootModel.getModal() != _modalEnum.DeleteFavoriteGroupConfirmationDialog) {
        _uiRootModel.setModal(_modalEnum.DeleteFavoriteGroupConfirmationDialog);
      }
    };

    this.destroy = function (dto) {
      try {
        _uiRootModel.setModal(null);
      } catch (err) {
        console.log('error: DeleteFavoriteGroupConfirmationDialogController.destroy. ' + err);
      }
    };

    function init() {
      if (!deleteFavoriteGroupConfirmationDialogModel) {
        throw 'deleteFavoriteGroupConfirmationDialogModel not supplied.';
      }

      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      _uiRootModel = uiRootModel;
      _deleteFavoriteGroupConfirmationDialogModel = deleteFavoriteGroupConfirmationDialogModel;

      return that;
    }

    return init();
  }

  app.DeleteFavoriteGroupConfirmationDialogController = DeleteFavoriteGroupConfirmationDialogController;

}(wizerati));
;(function (app) {
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
;(function (app) {
  "use strict";

  function FavoritesController(favoritesCubeModel, selectedCubeFaceModel) {

    if (!(this instanceof app.FavoritesController)) {
      return new app.FavoritesController(favoritesCubeModel,
          selectedCubeFaceModel);
    }

    var that = this,
        _favoritesCubeModel = null,
        _selectedCubeFaceModel = null;

    this.create = function (dto) {
      if (!dto) {
        throw "dto not supplied.";
      }

      var currentCubeFace = _selectedCubeFaceModel.getSelectedCubeFaceId();
      if (_.find(_favoritesCubeModel.getFavorites[currentCubeFace], function (id) {
        return id === dto.id;
      })) {
        return;
      }

      _favoritesCubeModel.addFavorite(dto.id, currentCubeFace);
    };

    this.destroy = function (dto) {
      if (!dto) {
        throw "dto not supplied.";
      }

      _favoritesCubeModel.removeFavorite(dto.id, _selectedCubeFaceModel.getSelectedCubeFaceId());
    };

    function init() {
      if (!favoritesCubeModel) {
        throw "favoritesCubeModel not supplied.";
      }

      if (!selectedCubeFaceModel) {
        throw "selectedCubeFaceModel not supplied.";
      }

      _favoritesCubeModel = favoritesCubeModel;
      _selectedCubeFaceModel = selectedCubeFaceModel;

      return that;
    }

    return init();
  }

  app.FavoritesController = FavoritesController;

}(wizerati));
;(function (app) {
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
;(function (app) {
  "use strict";

  function HiddenItemsController(hiddenItemsModel) {

    if (!(this instanceof app.HiddenItemsController)) {
      return new app.HiddenItemsController(hiddenItemsModel);
    }

    var that = this,
        _hiddenItemsModel = null;

    this.create = function (dto) {
      if (!dto) {
        throw "dto not supplied.";
      }

      _hiddenItemsModel.addHiddenItemId(dto.id);
    };

    this.destroy = function (dto) {

      _hiddenItemsModel.removeHiddenItemId(dto.id);
    };

    function init() {
      if (!hiddenItemsModel) {
        throw "hiddenItemsModel not supplied.";
      }

      _hiddenItemsModel = hiddenItemsModel;

      return that;
    }

    return init();
  }

  app.HiddenItemsController = HiddenItemsController;

}(wizerati));
;(function (app) {
  "use strict";

  function HomeController(uiRootModel) {

    if (!(this instanceof app.HomeController)) {
      return new app.HomeController(uiRootModel);
    }

    var that = this,
        _uiRootModel = null,
        _uiModeEnum = wizerati.mod("enum").UIMode;


    this.index = function () {
      try {
//                throw "get redirection after purchase panel/destroy working";
        _uiRootModel.setUIMode(_uiModeEnum.GreenfieldSearch, {silent: true}); //todo: retrieve state from local state bag
        _uiRootModel.setModal(null);
      } catch (err) {
        console.log("error: HomeController.index. " + err);
      }
    };

    function init() {
      if (!uiRootModel) {
        throw "uiRootModel not supplied.";
      }

      _uiRootModel = uiRootModel;

      return that;
    }

    return init();
  }

  app.HomeController = HomeController;

}(wizerati));
;//(function (app) {
//  "use strict";
//
//  function ItemsController(uiRootModel, singleItemModel, itemRepository) {
//
//    if (!(this instanceof app.ItemsController)) {
//      return new app.ItemsController(uiRootModel, singleItemModel, itemRepository);
//    }
//
//    var that = this,
//        _uiModeEnum = wizerati.mod("enum").UIMode,
//        _uiRootModel = null,
//        _singleItemModel = null,
//        _itemRepository = null;
//
//    this.show = function (dto) {
//      try {
//        _uiRootModel.setUIMode(_uiModeEnum.SingleItem);
//        _itemRepository.getById(dto.id, function (item) {
//          _singleItemModel.setItem(item.id);
//        });
//      } catch (err) {
//        console.log("error: ItemsController.show. " + err);
//      }
//    };
//
//    this.uriTransformShow = function (uri, dto) {
//      return uri + '?id=' + encodeURIComponent(dto.id);
//    };
//
//    function init() {
//      if (!uiRootModel) {
//        throw "uiRootModel not supplied.";
//      }
//
//      if (!searchFormModel) {
//        throw "searchFormModel not supplied.";
//      }
//
//      if (!searchService) {
//        throw "searchService not supplied.";
//      }
//
//      if (!resultListModel) {
//        throw "resultListModel not supplied.";
//      }
//
//      _uiRootModel = uiRootModel;
//      _searchFormModel = searchFormModel;
//      _searchService = searchService;
//      _resultListModel = resultListModel;
//
//      return that;
//    }
//
//    return init();
//  }
//
//  app.ItemsController = ItemsController;
//
//}(wizerati));
//
//
////throw "script downloaded to be assigned to an object in a known location and then subsequently invoked by the search controller for wait, success, fail, timeout";;(function (app) {
  'use strict';

  function ItemsOfInterestController(itemsOfInterestModel) {

    if (!(this instanceof app.ItemsOfInterestController)) {
      return new app.ItemsOfInterestController(itemsOfInterestModel);
    }

    var that = this,
        _itemsOfInterestModel = null;

    this.create = function (dto) {
      if (!dto) {
        throw 'dto not supplied.';
      }

      _itemsOfInterestModel.addItemOfInterest(dto.id);
    };

    //todo: result list items should be object literals like {id:'foo'}
    this.destroy = function (dto) {
      //take control of the rendering process here to avoid the jarring re-paint with a massively changed width

      _itemsOfInterestModel.removeItemOfInterest(dto.id);
    };

    function init() {
      if (!itemsOfInterestModel) {
        throw 'itemsOfInterestModel not supplied.';
      }

      _itemsOfInterestModel = itemsOfInterestModel;

      return that;
    }

    return init();
  }

  app.ItemsOfInterestController = ItemsOfInterestController;

}(wizerati));
;(function (app) {
  'use strict';

  function LoginController(loginPanelModel, uiRootModel) {

    if (!(this instanceof app.LoginController)) {
      return new app.LoginController(loginPanelModel, uiRootModel);
    }

    var that = this,
        _loginPanelModel = null,
        _uiRootModel = null,
        _uiModeEnum = app.mod('enum').UIMode;

    this.index = function () {
      try {
        _uiRootModel.setUIMode(_uiModeEnum.LogIn);
        _loginPanelModel.setIsVisible(true);
      } catch (err) {
        console.log('error: LoginController.index');
      }
    };

    function init() {
      if (!loginPanelModel) {
        throw 'loginPanelModel not supplied.';
      }
      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      _loginPanelModel = loginPanelModel;
      _uiRootModel = uiRootModel;

      return that;
    }

    return init();
  }

  app.LoginController = LoginController;

}(wizerati));
;(function (app) {
  'use strict';

  //for account entity manipulation for the purchase panel
  function PurchasePanelAccountsController(purchasePanelModel, accountService) {

    if (!(this instanceof app.PurchasePanelAccountsController)) {
      return new app.PurchasePanelAccountsController(purchasePanelModel, accountService);
    }

    var that = this,
        _accountService = null,
        _purchasePanelModel = null,
        _modalEnum = wizerati.mod('enum').Modal;

    this.create = function (dto) {
      try {
        _accountService.create(dto.name, dto.email,
            { success: function () {
              _purchasePanelModel.setIsWaiting(' ');
              app.instance.router.redirect('/purchasepanel?tab=3');
            },
              fail: function () {
                _purchasePanelModel.setIsWaiting(' ');
                var notifications = _purchasePanelModel.getNotifications();
                notifications.push({type: 'error', message: 'An error occurred while creating your account.' });
                _purchasePanelModel.setNotifications(notifications);
              },
              wait: function () {
                _purchasePanelModel.setIsWaiting('success');
              },
              timeout: function () {
                _purchasePanelModel.setIsTimedOut('success');
              } });
      }
      catch (e) {
        throw 'error in PurchasePanelAccountsController.create. ' + e;
      }
    };

    function init() {
      if (!purchasePanelModel) {
        throw 'purchasePanelModel not supplied.';
      }

      if (!accountService) {
        throw 'accountService not supplied.';
      }

      _purchasePanelModel = purchasePanelModel;
      _accountService = accountService;

      return that;
    }

    return init();
  }

  app.PurchasePanelAccountsController = PurchasePanelAccountsController;

}(wizerati));
;(function (app) {
  'use strict';

  function PurchasePanelController(purchasePanelModel, uiRootModel) {

    if (!(this instanceof app.PurchasePanelController)) {
      return new app.PurchasePanelController(purchasePanelModel, uiRootModel);
    }

    var that = this,
        _purchasePanelModel = null,
        _uiRootModel = null,
        _modalEnum = app.mod('enum').Modal;

    this.index = function (dto) {
      try {
        if (_uiRootModel.getModal() != _modalEnum.Purchase) {
          _uiRootModel.setModal(_modalEnum.Purchase);
        }

        _purchasePanelModel.setActiveTab(dto.tab);
      } catch (err) {
        console.log('error: PurchasePanelController.show. ' + err);
      }
    };

    this.destroy = function (dto) {
      try {
        _uiRootModel.setModal(null);
      } catch (err) {
        console.log('error: PurchasePanelController.destroy. ' + err);
      }
    };

    function init() {
      if (!purchasePanelModel) {
        throw 'purchasePanelModel not supplied.';
      }

      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      _purchasePanelModel = purchasePanelModel;
      _uiRootModel = uiRootModel;

      return that;
    }

    return init();
  }

  app.PurchasePanelController = PurchasePanelController;

}(wizerati));
;(function (app) {
  'use strict';

  function ResultListModeController(resultListModel) {

    if (!(this instanceof app.ResultListModeController)) {
      return new app.ResultListModeController(resultListModel);
    }

    var that = this,
        _resultListModel = null;

    this.update = function (dto) {
      try {
        if (_resultListModel.getMode() !== dto.mode) {
          _resultListModel.setMode(dto.mode);
        }
      } catch (err) {
        console.log('error: ResultListModeController.update. ' + err);
      }
    };

    function init() {
      if (!resultListModel) {
        throw 'resultListModel not supplied.';
      }

      _resultListModel = resultListModel;

      return that;
    }

    return init();
  }

  app.ResultListModeController = ResultListModeController;

}(wizerati));
;(function (app) {
  'use strict';

  function SearchController(uiRootModel, searchFormModel, searchService, resultListModel, guidFactory) {

    if (!(this instanceof app.SearchController)) {
      return new app.SearchController(uiRootModel,
          searchFormModel,
          searchService,
          resultListModel, guidFactory);
    }

    var that = this,
        _uiModeEnum = wizerati.mod('enum').UIMode,
        _uiRootModel = null,
        _searchFormModel = null,
        _searchService = null,
        _resultListModel = null,
        _guidFactory = null;

    this.show = function (dto) {
      try {
        if (dto.__isInvertebrateExternal__) {
          _searchFormModel.setKeywords(dto.keywords, {silent: true});
          _searchFormModel.setLocation(dto.location, {silent: true});
          _searchFormModel.setRate(dto.r, {silent: true});
        }

        _uiRootModel.setUIMode(_uiModeEnum.Search);
        _searchFormModel.setIsWaiting('true');
        _searchService.runSearch(dto.keywords,
            dto.location,
            dto.r,
            function done(results) {
              _resultListModel.setResults(_.map(results, function (r) {
                return r.id;
              }), _guidFactory.create());
              _searchFormModel.setIsWaiting('false', {silent: true}); //silent to because we are taking special control over the rendering of the wait state.
            });
      } catch (err) {
        console.log('error: SearchController.show. ' + err);
      }
    };

    this.uriTransformShow = function (uri, dto) {
      return uri + '?keywords=' + encodeURIComponent(dto.keywords) + '&location=' + encodeURIComponent(dto.location) + '&r=' + encodeURIComponent(dto.r);
    };

    function init() {
      if (!uiRootModel) {
        throw 'uiRootModel not supplied.';
      }

      if (!searchFormModel) {
        throw 'searchFormModel not supplied.';
      }

      if (!searchService) {
        throw 'searchService not supplied.';
      }

      if (!resultListModel) {
        throw 'resultListModel not supplied.';
      }

      if (!guidFactory) {
        throw 'guidFactory not supplied.';
      }

      _uiRootModel = uiRootModel;
      _searchFormModel = searchFormModel;
      _searchService = searchService;
      _resultListModel = resultListModel;
      _guidFactory = guidFactory;

      return that;
    }

    return init();
  }

  app.SearchController = SearchController;

}(wizerati));;(function (app) {
  'use strict';

  function SearchPanelModeController(searchPanelModel) {

    if (!(this instanceof app.SearchPanelModeController)) {
      return new app.SearchPanelModeController(searchPanelModel);
    }

    var that = this,
        _searchPanelModel = null;

    this.update = function (dto) {
      try {
        if (_searchPanelModel.getMode() !== dto.mode) {
          _searchPanelModel.setMode(dto.mode);
        }
      } catch (err) {
        console.log('error: SearchPanelController.update. ' + err);
      }
    };

    function init() {
      if (!searchPanelModel) {
        throw 'searchPanelModel not supplied.';
      }

      _searchPanelModel = searchPanelModel;

      return that;
    }

    return init();
  }

  app.SearchPanelModeController = SearchPanelModeController;

}(wizerati));
;(function (app) {
  'use strict';

  function SelectedCubeFaceController(selectedCubeFaceModel) {

    if (!(this instanceof app.SelectedCubeFaceController)) {
      return new app.SelectedCubeFaceController(selectedCubeFaceModel);
    }

    var that = this,
        _selectedCubeFaceModel = null;

    this.update = function (dto) {
      try {
        _selectedCubeFaceModel.setSelectedCubeFaceId(dto.id);
      } catch (err) {
        console.log('error: SelectedCubeFaceController.update. ' + err);
      }
    };

    function init() {
      if (!selectedCubeFaceModel) {
        throw 'selectedCubeFaceModel not supplied.';
      }

      _selectedCubeFaceModel = selectedCubeFaceModel;

      return that;
    }

    return init();
  }

  app.SelectedCubeFaceController = SelectedCubeFaceController;

}(wizerati));
;(function (app) {
  'use strict';

  function SelectedItemController(selectedItemModel, searchPanelModel, resultListModel) {

    if (!(this instanceof app.SelectedItemController)) {
      return new app.SelectedItemController(selectedItemModel, searchPanelModel, resultListModel);
    }

    var that = this,
        _selectedItemModel = null,
        _searchPanelModel = null,
        _resultListModel = null,
        _searchPanelModeEnum = app.mod('enum').SearchPanelMode,
        _resultListModeEnum = app.mod('enum').ResultListMode;

    this.update = function (dto) {
      try {
        if (!dto) {
          throw 'dto not supplied';
        }

        if (dto.__isInvertebrateExternal__) {
          app.instance.router.redirect('/items/show?id=' + dto.id);
          return;
        }

        if (dto.source === 'results') {
          _searchPanelModel.setMode(_searchPanelModeEnum.Minimized);
        } else if (dto.source === 'favorites') {
          _resultListModel.setMode(_resultListModeEnum.Minimized, {silent: true});
        }

        _selectedItemModel.setSelectedItemId(dto.id);
      } catch (err) {
        console.log('error: SelectedItemController.update. ' + err);
      }
    };

    function init() {
      if (!selectedItemModel) {
        throw 'selectedItemModel not supplied.';
      }

      if (!searchPanelModel) {
        throw 'searchPanelModel not supplied.';
      }

      if (!resultListModel) {
        throw 'resultListModel not supplied.';
      }

      _selectedItemModel = selectedItemModel;
      _searchPanelModel = searchPanelModel;
      _resultListModel = resultListModel;

      return that;
    }

    return init();
  }

  app.SelectedItemController = SelectedItemController;

}(wizerati));
;(function (app) {
  'use strict';

  function SessionController(loginPanelModel, authenticationService) {

    if (!(this instanceof app.SessionController)) {
      return new app.SessionController(loginPanelModel, authenticationService);
    }

    var that = this,
        _loginPanelModel = null,
        _authenticationService = null;

    this.create = function () {
      if (!_authenticationService.authenticate(_loginPanelModel.getUsername(), _loginPanelModel.getPassword())) {
        _loginPanelModel.setIsLoginFailedMessageVisible(true);
      }

      //...
    };

    function init() {
      if (!loginPanelModel) {
        throw 'loginPanelModel not supplied.';
      }

      if (!authenticationService) {
        throw 'authenticationService not supplied.';
      }

      _loginPanelModel = loginPanelModel;
      _authenticationService = authenticationService;

      return that;
    }

    return init();
  }

  app.SessionController = SessionController;

}(wizerati));
;(function (app) {
    "use strict";

    function AccountEntity() {

        if (!(this instanceof app.AccountEntity)) {
            return new app.AccountEntity();
        }

        var that = this,
            _loginService = null,
            _config = null;

        this.name = "";
        this.email = "";
    }

    app.AccountEntity = AccountEntity;

}(wizerati));
;(function (app) {
    "use strict";

    function FavoriteViewFactory(loginService,
                                 itemRepository,
                                 selectedItemModel,
                                 hiddenItemsModel,
                                 actionedItemsModel,
                                 itemsOfInterestModel) {

        if (!(this instanceof app.FavoriteViewFactory)) {
            return new app.FavoriteViewFactory(loginService,
                                               itemRepository,
                                               selectedItemModel,
                                               hiddenItemsModel,
                                               actionedItemsModel,
                                               itemsOfInterestModel);
        }

        var that = this,
            _loginService = null,
            _itemRepository = null,
            _selectedItemModel = null,
            _hiddenItemsModel = null,
            _actionedItemsModel = null,
            _itemsOfInterestModel = null,
            _roleEnum = app.mod("enum").UserRole;

        this.create = function (id, currentCubeFace, done) {
            var role = _loginService.getCurrentRole();
            switch (role) {
                case _roleEnum.Employer:
                case _roleEnum.EmployerStranger:
                    _itemRepository.getById(id, function(item){
                        item.isFavorite = item["isFavoriteOnFace" + currentCubeFace];
                        item.isSelected = _selectedItemModel.getSelectedItemId() === item.id;
                        item.isHidden = _hiddenItemsModel.isHidden(item.id);
                        item.isActioned = _actionedItemsModel.isActioned(item.id);
                        item.isItemOfInterest = _itemsOfInterestModel.isItemOfInterest(item.id);
                        done(new app.ContractorFavoriteView(item).render().$el)
                    });
                    break;
                case _roleEnum.Contractor:
                case _roleEnum.ContractorStranger:
                    _itemRepository.getById(id, function(item){
                        item.isFavorite = item["isFavoriteOnFace" + currentCubeFace];
                        item.isSelected = _selectedItemModel.getSelectedItemId() === item.id;
                        item.isHidden = _hiddenItemsModel.isHidden(item.id);
                        item.isActioned = _actionedItemsModel.isActioned(item.id);
                        item.isItemOfInterest = _itemsOfInterestModel.isItemOfInterest(item.id);
                        done(new app.ContractFavoriteView(item).render().$el)
                    });
                    break;
                default:
                    throw "invalid user role '" + role + "'";
            }
        };

        function init() {
            if (!loginService) {
                throw "loginService not supplied."
            }

            if (!itemRepository) {
                throw "itemRepository not supplied."
            }

            if (!selectedItemModel) {
                throw "selectedItemModel not supplied."
            }

            if (!hiddenItemsModel) {
                throw "hiddenItemsModel not supplied."
            }

            if (!actionedItemsModel) {
                throw "actionedItemsModel not supplied."
            }

            if (!itemsOfInterestModel) {
                throw "itemsOfInterestModel not supplied."
            }

            _loginService = loginService;
            _itemRepository = itemRepository;
            _selectedItemModel = selectedItemModel;
            _hiddenItemsModel = hiddenItemsModel;
            _actionedItemsModel = actionedItemsModel;
            _itemsOfInterestModel = itemsOfInterestModel;

            return that;
        }

        return init();
    }

    app.FavoriteViewFactory = FavoriteViewFactory;

}(wizerati));
;(function (app) {
    "use strict";

    function GuidFactory() {

        if (!(this instanceof app.GuidFactory)) {
            return new app.GuidFactory();
        }

        var that = this;

        this.create = function () {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };

            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        };

        function init() {

            return that;
        }

        return init();
    }

    app.GuidFactory = GuidFactory;

}(wizerati));;(function (app) {
    "use strict";

    //algo for re-drawing:
    //items in dom ! (in latest item of interest collection ? leave : collapse and remove)
    function ItemOfInterestViewFactory(loginService,
                                       itemRepository,
                                       selectedItemModel,
                                       itemsOfInterestModel,
                                       favoritesCubeModel,
                                       hiddenItemsModel,
                                       actionedItemsModel) {

        if (!(this instanceof app.ItemOfInterestViewFactory)) {
            return new app.ItemOfInterestViewFactory(loginService,
                itemRepository,
                selectedItemModel,
                itemsOfInterestModel,
                favoritesCubeModel,
                hiddenItemsModel,
                actionedItemsModel);
        }

        var that = this,
            _loginService = null,
            _itemRepository = null,
            _selectedItemModel = null,
            _itemsOfInterestModel = null,
            _favoritesCubeModel = null,
            _hiddenItemsModel = null,
            _actionedItemsModel = null,
            _roleEnum = app.mod("enum").UserRole;

        this.create = function (id,
                                currentCubeFace,
                                isSelectedItem,
                                animateSelectedItem,
                                done) {
            if (!id) {
                throw "id not supplied."
            }

            if (!currentCubeFace) {
                throw "currentCubeFace not supplied."
            }


            if (isSelectedItem === undefined || isSelectedItem === null) {
                throw "isSelectedItem not supplied."
            }

            if (animateSelectedItem === undefined || animateSelectedItem === null) {
                throw "animateSelectedItem not supplied."
            }

            if (!favoritesCubeModel) {
                throw "favoritesCubeModel not supplied."
            }

            if (!done) {
                throw "done not supplied."
            }

            var role = _loginService.getCurrentRole();
            switch (role) {
                case _roleEnum.Employer:
                case _roleEnum.EmployerStranger:
                    _itemRepository.getById(id, function (item) {
                        item.isFavoritable = _favoritesCubeModel.getFavorites()[currentCubeFace].length < 6 && !_hiddenItemsModel.isHidden(item.id)
                        item.isFavorite = item["isFavoriteOnFace" + currentCubeFace];
                        item.isSelected = _selectedItemModel.getSelectedItemId() === item.id;
                        item.isPinned = !isSelectedItem;
                        item.pinnedItemCount = _itemsOfInterestModel.getItemsOfInterest().pinnedItems.length;
                        item.isPinnable = _itemsOfInterestModel.getItemsOfInterest().pinnedItems.length < 5 && !_.find(_itemsOfInterestModel.getItemsOfInterest().pinnedItems, function (i) {
                            i === id;
                        });
                        item.shouldAnimateIn = animateSelectedItem && isSelectedItem && _itemsOfInterestModel.getItemsOfInterest().pinnedItems.length > 0 && !_selectedItemModel.getPreviouslySelectedItemId();
                        item.isHidden = _hiddenItemsModel.isHidden(item.id);
                        item.isHideable = !(_favoritesCubeModel.isFavoriteOnAnyFace(item.id));
                        item.isActioned = _actionedItemsModel.isActioned(item.id);
                        var $e = new app.ContractorItemOfInterestView(item).render().$el;
                        done($e)
                    });
                    break;
                case _roleEnum.Contractor:
                case _roleEnum.ContractorStranger:
                    _itemRepository.getById(id, function (item) {
                        item.isFavoritable = _favoritesCubeModel.getFavorites()[currentCubeFace].length < 6 && !_hiddenItemsModel.isHidden(item.id)
                        item.isFavorite = item["isFavoriteOnFace" + currentCubeFace];
                        item.isSelected = isSelectedItem;
                        item.isPinned = !isSelectedItem;
                        item.pinnedItemCount = _itemsOfInterestModel.getItemsOfInterest().pinnedItems.length;
                        item.isPinnable = !_hiddenItemsModel.isHidden(item.id) && (_itemsOfInterestModel.getItemsOfInterest().pinnedItems.length < 5 && (!isSelectedItem || !_.find(_itemsOfInterestModel.getItemsOfInterest().pinnedItems, function (i) {
                            return i === item.id;
                        })));
                        item.shouldAnimateIn = animateSelectedItem && isSelectedItem && _itemsOfInterestModel.getItemsOfInterest().pinnedItems.length > 0 && !_selectedItemModel.getPreviouslySelectedItemId();
                        item.isHidden = _hiddenItemsModel.isHidden(item.id);
                        item.isHideable = !(_favoritesCubeModel.isFavoriteOnAnyFace(item.id)) && isSelectedItem && !_actionedItemsModel.isActioned(item.id);
                        item.isActioned = _actionedItemsModel.isActioned(item.id);
                        item.isActionable =  !_hiddenItemsModel.isHidden(item.id);
                        done(new app.ContractItemOfInterestView(item).render().$el)
                    });
                    break;
                default:
                    throw "invalid user role '" + role + "'";
            }
        };

        function init() {
            if (!loginService) {
                throw "loginService not supplied."
            }

            if (!itemRepository) {
                throw "itemRepository not supplied."
            }

            if (!selectedItemModel) {
                throw "selectedItemModel not supplied."
            }

            if (!itemsOfInterestModel) {
                throw "itemsOfInterestModel not supplied."
            }

            if (!favoritesCubeModel) {
                throw "favoritesCubeModel not supplied."
            }

            if (!hiddenItemsModel) {
                throw "hiddenItemsModel not supplied."
            }

            if (!actionedItemsModel) {
                throw "actionedItemsModel not supplied."
            }

            _loginService = loginService;
            _itemRepository = itemRepository;
            _selectedItemModel = selectedItemModel;
            _itemsOfInterestModel = itemsOfInterestModel;
            _favoritesCubeModel = favoritesCubeModel;
            _hiddenItemsModel = hiddenItemsModel;
            _actionedItemsModel = actionedItemsModel;

            return that;
        }

        return init();
    }

    app.ItemOfInterestViewFactory = ItemOfInterestViewFactory;

}(wizerati));
;(function (app) {
    "use strict";

    function ResultViewFactory(loginService,
                               itemRepository,
                               selectedItemModel,
                               hiddenItemsModel,
                               actionedItemsModel,
                               itemsOfInterestModel) {

        if (!(this instanceof app.ResultViewFactory)) {
            return new app.ResultViewFactory(loginService,
                                             itemRepository,
                                             selectedItemModel,
                                             hiddenItemsModel,
                                             actionedItemsModel,
                                             itemsOfInterestModel);
        }

        var that = this,
            _loginService = null,
            _itemRepository = null,
            _selectedItemModel = null,
            _hiddenItemsModel = null,
            _actionedItemsModel = null,
            _itemsOfInterestModel = null,
            _roleEnum = app.mod("enum").UserRole;

        this.create = function (id, currentCubeFace, done) {
            if(!id) {
                throw "id not supplied."
            }

            if(!currentCubeFace) {
                throw "currentCubeFace not supplied."
            }

            if(!done) {
                throw "done not supplied."
            }

            var role = _loginService.getCurrentRole();
            switch (role) {
                case _roleEnum.Employer:
                case _roleEnum.EmployerStranger:
                    _itemRepository.getById(id, function(item){
                        item.isFavorite = item["isFavoriteOnFace" + currentCubeFace];
                        item.isSelected = _selectedItemModel.getSelectedItemId() === item.id;
                        item.isHidden = _hiddenItemsModel.isHidden(item.id);
                        item.isActioned = _actionedItemsModel.isActioned(item.id);
                        done(new app.ContractorResultView(item).render().$el)
                    });
                    break;
                case _roleEnum.Contractor:
                case _roleEnum.ContractorStranger:
                    _itemRepository.getById(id, function(item){
                        item.isFavorite = item["isFavoriteOnFace" + currentCubeFace];
                        item.isSelected = _selectedItemModel.getSelectedItemId() === item.id;
                        item.isHidden = _hiddenItemsModel.isHidden(item.id);
                        item.isActioned = _actionedItemsModel.isActioned(item.id);
                        item.isPinned = _itemsOfInterestModel.isPinned(item.id);
                        done(new app.ContractResultView(item).render().$el)
                    });
                    break;
                default:
                    throw "invalid user role '" + role + "'";
            }
        };

        function init() {
            if (!loginService) {
                throw "loginService not supplied."
            }

            if (!itemRepository) {
                throw "itemRepository not supplied."
            }

            if (!selectedItemModel) {
                throw "selectedItemModel not supplied."
            }

            if (!hiddenItemsModel) {
                throw "hiddenItemsModel not supplied."
            }

            if (!actionedItemsModel) {
                throw "actionedItemsModel not supplied."
            }

            if (!itemsOfInterestModel) {
                throw "itemsOfInterestModel not supplied."
            }

            _loginService = loginService;
            _itemRepository = itemRepository;
            _selectedItemModel = selectedItemModel;
            _hiddenItemsModel = hiddenItemsModel;
            _actionedItemsModel = actionedItemsModel;
            _itemsOfInterestModel = itemsOfInterestModel;

            return that;
        }

        return init();
    }

    app.ResultViewFactory = ResultViewFactory;

}(wizerati));
;(function (app) {
    "use strict";

    function WizeratiClientRequestFactory() {

        if (!(this instanceof app.WizeratiClientRequestFactory)) {
            return new app.WizeratiClientRequestFactory();
        }

        var that = this,
            _config = null;

        this.createForGet = function (entity) {
            if(!entity) {
                throw "entity not supplied."
            }

            return { uri: "/foo", method: "PUT", data: "bar" };
        };

        function init() {

            return that;
        }

        return init();
    }

    app.WizeratiClientRequestFactory = WizeratiClientRequestFactory;

}(wizerati));
;(function (app) {
    "use strict";

    function ActionedItemsModel() {

        if (!(this instanceof app.ActionedItemsModel)) {
            return new app.ActionedItemsModel();
        }

        var that = this,
            _actionedItems = {};

        this.updateEventUri = "update://ActionedItemsModel/";

        this.isActioned = function (id) {

            return !!_actionedItems[id];
        }

        this.addActionedItemId = function (value) {
            _actionedItems[value] = value;

            $.publish(that.updateEventUri);
        }

        this.removeActionedItemId = function (value) {
            delete _actionedItems[value];

            $.publish(that.updateEventUri);
        }

        function init() {

            return that;
        }

        return init();
    };

    app.ActionedItemsModel = ActionedItemsModel;
    invertebrate.Model.isExtendedBy(app.ActionedItemsModel);

}(wizerati));;(function (app) {
    "use strict";

    function AdvertisersPanelModel() {

        if (!(this instanceof app.AdvertisersPanelModel)) {
            return new app.AdvertisersPanelModel();
        }

        var that = this,
            _isVisible = false;

        this.updateEventUri = "update://AdvertisersPanelModel/";

        this.setIsVisible = function (value) {
            _isVisible = value;

            $.publish(that.updateEventUri);
        };

        function init() {
            return that;
        }

        return init();
    }

    app.AdvertisersPanelModel = AdvertisersPanelModel;
    invertebrate.Model.isExtendedBy(app.AdvertisersPanelModel);

}(wizerati));
;(function (app) {
    "use strict";

    function DeleteFavoriteGroupConfirmationDialogModel() {

        if (!(this instanceof app.DeleteFavoriteGroupConfirmationDialogModel)) {
            return new app.DeleteFavoriteGroupConfirmationDialogModel();
        }

        var that = this,
            _favoriteGroupId = null,
            _isWaiting = '', //should identify the dom element to indicate waiting
            _notifications = []; //eg. [{ type: "formField", id: "foo" }]

        this.updateEventUri = "update://DeleteFavoriteGroupConfirmationDialogModel/";

        this.getFavoriteGroupId = function () {
            return _favoriteGroupId;
        }

        this.setFavoriteGroupId = function (value, options) {
            options = options || { silent: false }

            if (!value) {
                throw "value not supplied."
            }

            _favoriteGroupId = value;

            if (!options.silent) {
                $.publish(that.updateEventUri);
            }
        };

        this.getIsWaiting = function () {
            return _isWaiting;
        }

        this.setIsWaiting = function (value, options) {
            options = options || { silent: false }

            if (!value) {
                throw "value not supplied."
            }

            _isWaiting = value;

            if (!options.silent) {
                $.publish(that.updateEventUri);
            }
        };

        function init() {
            return that;
        }

        return init();
    }

    app.DeleteFavoriteGroupConfirmationDialogModel = DeleteFavoriteGroupConfirmationDialogModel;
    invertebrate.Model.isExtendedBy(app.DeleteFavoriteGroupConfirmationDialogModel);

}(wizerati));
;(function (app) {
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
            _faceActiveStatuses = [true, false, false, false, false, false],
            _modeEnum = app.mod('enum').FavoritesCubeMode,
            _mode = _modeEnum.Default;

        this.updateEventUri = "update://FavoritesCubeModel/";
        this.updateEventUriPrivate = "update://favoritescubemodel/private"; //used when it is unneccessary to tell other UI elements of a change, saving re-painting.

        this.getFaceLabels = function () {

            return _faceLabels;
        };

        this.getFavoriteGroupName = function (id) {

            return _faceLabels[id];
        };

        this.getMode = function () {

            return _mode;
        };

        this.setMode = function (value) {
            if(!value) {
                throw "value not supplied";
            }

            _mode = value;
            $.publish(that.updateEventUriPrivate);
        };

        this.deactivateFace = function (faceId) {
            if(faceId > 5) {
                throw "faceId invalid."
            }

            _faceActiveStatuses[faceId] = false;

            //update the client-side results collection
            for(var i = 0; i < _favorites[faceId].length; i++){
                var id = _favorites[faceId][i];
                _itemRepository.getById(id, function (item) {
                    item["isFavoriteOnFace" + faceId] = false;
                });
            }

            _favorites[faceId] = [];

            if(_faceActiveStatuses.indexOf(true) == -1) {
                _mode = _modeEnum.Default;
            }
            //ensure the items of interest and result list views are notified
            $.publish(that.updateEventUri);
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
;(function (app) {
    "use strict";

    function HiddenItemsModel() {

        if (!(this instanceof app.HiddenItemsModel)) {
            return new app.HiddenItemsModel();
        }

        var that = this,
            _hiddenItems = {};

        this.updateEventUri = "update://HiddenItemsModel/";

        this.isHidden = function (id) {

            return !!_hiddenItems[id];
        }

        this.addHiddenItemId = function (value) {
            _hiddenItems[value] = value;

            $.publish(that.updateEventUri);
        }

        this.removeHiddenItemId = function (value) {
            delete _hiddenItems[value];

            $.publish(that.updateEventUri);
        }

        function init() {

            return that;
        }

        return init();
    };

    app.HiddenItemsModel = HiddenItemsModel;
    invertebrate.Model.isExtendedBy(app.HiddenItemsModel);

}(wizerati));;(function (app) {
    "use strict";

    function ItemsOfInterestModel(selectedItemModel) {
        if (!(this instanceof app.ItemsOfInterestModel)) {
            return new app.ItemsOfInterestModel(selectedItemModel);
        }

        var that = this,
            _selectedItemModel = null,
            _itemsOfInterest = { selectedItem: "",
                pinnedItems: [] };


        this.updateEventUri = "update://ItemsOfInterestModel/";

        this.isItemOfInterest = function (id) {

            return (_itemsOfInterest.pinnedItems.indexOf(id)) != -1;
        }

        this.getItemsOfInterest = function () {
            return _itemsOfInterest;
        }

        this.addItemOfInterest = function (id) {
            if (!id) {
                throw "id not supplied";
            }

            if (_.find(that.getItemsOfInterest().pinnedItems, function (idOfPinnedItem) {
                return idOfPinnedItem === id;
            })) {
                return;
            }

            if (_selectedItemModel.getSelectedItemId() === id) {
                _selectedItemModel.setSelectedItemId(null, {silent: true});
                _itemsOfInterest.selectedItem = null;
            }

            _itemsOfInterest.pinnedItems.push(id);

            $.publish(that.updateEventUri);
        };

        this.removeItemOfInterest = function (id) {
            if (!id) {
                throw "id not supplied";
            }

            _itemsOfInterest.pinnedItems = _.reject(_itemsOfInterest.pinnedItems, function (idOfPinnedItem) {
                return idOfPinnedItem === id;
            });

            $.publish(that.updateEventUri, { action: "removal", removedItemId: id});
        };

        this.isPinned = function(id){
            return _.any(_itemsOfInterest.pinnedItems, function(i){return i === id; })
        }

        function init() {

            if (!selectedItemModel) {
                throw "selectedItemModel not supplied."
            }

            _selectedItemModel = selectedItemModel;

            return that;
        }

        return init();
    }

    app.ItemsOfInterestModel = ItemsOfInterestModel;
    invertebrate.Model.isExtendedBy(app.ItemsOfInterestModel);

}(wizerati));;(function (app) {
    "use strict";

    function LoginPanelModel() {

        if (!(this instanceof app.LoginPanelModel)) {
            return new app.LoginPanelModel();
        }

        var that = this,
            _username = null,
            _password = null,
            _isLoginFailedMessageVisible = false,
            _isVisible = false;

        this.updateEventUri = "update://LoginPanelModel/";

        this.getUsername = function () {
            return _username;
        };

        this.setUsername = function (value) {
            _username = value;
        };

        this.getPassword = function () {
            return _password;
        };

        this.setPassword = function (value) {
            _password = value;
        };

        this.getIsLoginFailedMessageVisible = function () {
            return _isLoginFailedMessageVisible;
        };

        this.setIsLoginFailedMessageVisible = function (value) {
            _isLoginFailedMessageVisible = value;

            $.publish(that.updateEventUri);
        };

        this.getIsVisible = function () {
            return _isVisible;
        };

        this.setIsVisible = function (value) {
            _isVisible = value;

            $.publish(that.updateEventUri);
        };

        function init() {
            return that;
        }

        return init();
    }

    app.LoginPanelModel = LoginPanelModel;
    invertebrate.Model.isExtendedBy(app.LoginPanelModel);

}(wizerati));
;(function (app) {
    "use strict";

    function PurchasePanelModel() {

        if (!(this instanceof app.PurchasePanelModel)) {
            return new app.PurchasePanelModel();
        }

        var that = this,
            _activeTab = '0',
            _isWaiting = '', //should identify the dom element to indicate waiting
            _notifications = []; //eg. [{ type: "formField", id: "foo" }]

        this.updateEventUri = "update://PurchasePanelModel/";

        this.getNotifications = function () {
            return _notifications;
        }

        this.setNotifications = function (value) {
            if (!value) {
                throw "value not supplied."
            }

            _notifications = value;
            $.publish(that.updateEventUri);
        };

        this.getIsWaiting = function () {
            return _isWaiting;
        }

        this.setIsWaiting = function (value, options) {
            options = options || { silent:false }

            if (!value) {
                throw "value not supplied."
            }

            _isWaiting = value;

            if(!options.silent) {
                $.publish(that.updateEventUri);
            }
        };

        this.getActiveTab = function () {
            return _activeTab;
        }

        this.setActiveTab = function (value) {
            if (!value) {
                throw "value not supplied."
            }

            _activeTab = value;
            $.publish(that.updateEventUri);
        };

        function init() {
            return that;
        }

        return init();
    };

    app.PurchasePanelModel = PurchasePanelModel;
    invertebrate.Model.isExtendedBy(app.PurchasePanelModel);

}(wizerati));
;(function (app) {
    "use strict";

    function ResultListModel() {
        if (!(this instanceof app.ResultListModel)) {
            return new app.ResultListModel();
        }

        var that = this,
            _searchId = "initial-value",
            _mode = "0",
            _searchPanelModeEnum = wizerati.mod("enum").SearchPanelMode,
            _results = []; //note these will be GUIDs - use the ItemCache for the actual objects

        this.updateEventUri = "update://ResultListModel/";

        this.getSearchId = function () {

            return _searchId;
        };

        this.getResults = function () {

            return _results;
        };

        this.setResults = function (value, searchId) {
            _results = value;
            _searchId = searchId;
            _mode = _searchPanelModeEnum.Default;

            $.publish(that.updateEventUri);
        };

        this.getMode = function () {

            return _mode;
        };

        this.setMode = function (value, options) {
            options = options || {silent:false};

            _mode = value;

            if(!options.silent) {
                $.publish(that.updateEventUri);
            }
        }

        this.getResult = function (id) {
            if (!id) {
                throw "id not supplied";
            }

            return _.find(_results, function (r) {
                return r.id === id;
            });
        };

        this.setSelectedResultId = function (id) {
            if (!id) {
                throw "id not supplied";
            }

            _.each(_results, function (r) {
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

    app.ResultListModel = ResultListModel;
    invertebrate.Model.isExtendedBy(app.ResultListModel);

}(wizerati));;(function (app) {
    "use strict";

    function SearchFormModel() {

        if (!(this instanceof app.SearchFormModel)) {
            return new app.SearchFormModel();
        }

        var that = this,
            _keywords = null,
            _location = null,
            _isWaiting = 'false',
            _rate = null;

        this.updateEventUri = "update://SearchFormModel/";

        this.getKeywords = function () {
            return _keywords;
        };

        this.setKeywords = function (value, options) {
            options = options || { silent: false };

            _keywords = value;

            if (options.silent === false) {
                $.publish(that.updateEventUri);
            }
        };

        this.getLocation = function () {
            return _location;
        };

        this.setLocation = function (value, options) {
            options = options || { silent: false };
            _location = value;

            if (options.silent === false) {
                $.publish(that.updateEventUri);
            }
        };

        this.getRate = function () {
            return _rate;
        };

        this.setRate = function (value, options) {
            options = options || { silent: false };
            _rate = value;

            if (options.silent === false) {
                $.publish(that.updateEventUri);
            }
        };

        this.getIsWaiting = function () {
            return _isWaiting;
        };

        this.setIsWaiting = function (value, options) {
            options = options || { silent: false };

            if (value === null || value === undefined) {
                throw "value not supplied."
            }

            if (value !== "true" && value !== "false") {
                throw "invalid argument (value)."
            }

            _isWaiting = value;

            if (options.silent === false) {
                $.publish(that.updateEventUri);
            }
        };

        function init() {
            return that;
        }

        return init();
    };

    app.SearchFormModel = SearchFormModel;
    invertebrate.Model.isExtendedBy(app.SearchFormModel);

}(wizerati));
;(function (app) {
    "use strict";

    function SearchPanelModel() {

        if (!(this instanceof app.SearchPanelModel)) {
            return new app.SearchPanelModel();
        }

        var that = this,
            _mode = null,
            _searchPanelModeEnum = wizerati.mod("enum").SearchPanelMode;

        this.updateEventUri = "update://SearchPanelModel/";

        this.getMode = function () {
            return _mode || _searchPanelModeEnum.Default;
        }

        this.setMode = function (value, options) {
            options = options || {silent:false};

            _mode = value;

            if(!options.silent) {
                $.publish(that.updateEventUri);
            }
        }

        function init() {
            _mode = _searchPanelModeEnum.Default;

            return that;
        }

        return init();
    };

    app.SearchPanelModel = SearchPanelModel;
    invertebrate.Model.isExtendedBy(app.SearchPanelModel);

}(wizerati));;(function (app) {
    "use strict";

    function SelectedCubeFaceModel() {

        if (!(this instanceof app.SelectedCubeFaceModel)) {
            return new app.SelectedCubeFaceModel();
        }

        var that = this,
            _selectedCubeFaceId = '0';

        this.updateEventUri = "update://SelectedCubeFaceModel/";

        this.getSelectedCubeFaceId = function () {

            return _selectedCubeFaceId;
        }

        this.setSelectedCubeFaceId = function (value) {
            _selectedCubeFaceId = value;

            $.publish(that.updateEventUri);
        }

        function init() {

            return that;
        }

        return init();
    };

    app.SelectedCubeFaceModel = SelectedCubeFaceModel;
    invertebrate.Model.isExtendedBy(app.SelectedCubeFaceModel);

}(wizerati));;(function (app) {
    "use strict";

    function SelectedItemModel() {

        if (!(this instanceof app.SelectedItemModel)) {
            return new app.SelectedItemModel();
        }

        var that = this,
            _selectedResultId = null,
            _previouslySelectedResultId = null;

        this.updateEventUri = "update://SelectedItemModel/";

        this.getSelectedItemId = function () {

            return _selectedResultId;
        }

        this.getPreviouslySelectedItemId = function () {

            return _previouslySelectedResultId;
        }

        this.setSelectedItemId = function (value, options) {
            options = options || { silent: false };

            _previouslySelectedResultId = _selectedResultId;
            _selectedResultId = value;

            if (!options.silent) {
                $.publish(that.updateEventUri);
            }
        }

        function init() {

            return that;
        }

        return init();
    };

    app.SelectedItemModel = SelectedItemModel;
    invertebrate.Model.isExtendedBy(app.SelectedItemModel);

}(wizerati));;(function (app) {
    "use strict";

    function SingleItemModel() {

        if (!(this instanceof app.SingleItemModel)) {
            return new app.SingleItemModel();
        }

        var that = this,
            _itemId = null,
            _previouslySelectedResultId = null;

        this.updateEventUri = "update://SelectedItemModel/";

        this.getSelectedItemId = function () {

            return _selectedResultId;
        }

        this.getPreviouslySelectedItemId = function () {

            return _previouslySelectedResultId;
        }

        this.setSelectedItemId = function (value, options) {
            options = options || { silent: false };

            _previouslySelectedResultId = _selectedResultId;
            _selectedResultId = value;

            if (!options.silent) {
                $.publish(that.updateEventUri);
            }
        }

        function init() {

            return that;
        }

        return init();
    };

    app.SingleItemModel = SingleItemModel;
    invertebrate.Model.isExtendedBy(app.SingleItemModel);

}(wizerati));;(function (app) {
    "use strict";

    function UIRootModel() {

        if (!(this instanceof app.UIRootModel)) {
            return new app.UIRootModel();
        }

        var that = this,
            _uiMode = '0',
            _modal = null,
            _uiModeEnum = wizerati.mod("enum").UIMode,
            _modalEnum = wizerati.mod("enum").Modal;

        this.updateEventUri = "update://UIRootModel/";

        this.getUIMode = function () {
            return _uiMode || "";
        }

        this.setUIMode = function (value, options) {
            options = options || {silent:false};

            _uiMode = value;

            if(!options.silent) {
                $.publish(that.updateEventUri);
            }
        }

        this.getModal = function () {

            return _modal || "";
        }

        this.setModal = function (value) {
            _modal = value;

            $.publish(that.updateEventUri);
        }

        this.getPreviousUIMode = function () {

            return _previousUIMode;
        }

        function init() {
            _uiMode = _uiModeEnum.GreenfieldSearch;

            return that;
        }

        return init();
    }

    app.UIRootModel = UIRootModel;
    invertebrate.Model.isExtendedBy(app.UIRootModel);

}(wizerati));

//wiz.mod("cronicl").CroniclSvc.getMyItemMetadata(function (metadata) {
//    $("#searchField").attr("placeholder", metadata.searchFieldPlaceholderValue);
//    $("#newItemLink").text("New " + metadata.itemNameAlternative);
//    $("#emptyMessageMyItems").text("My  " + metadata.itemNameAlternativePlural + " are shown here");
//    metadata.prefetchTemplates();
//    metadata.prefetchPostRenderActions();
//});
//wiz.mod("cronicl").CroniclSvc.getSearchItemMetadata(function (metadata) {
//    metadata.prefetchTemplates();
//    metadata.prefetchPostRenderActions();
//});
;(function (app) {
    "use strict";

    function ItemRepository(itemCache, croniclService) {

        if (!(this instanceof app.ItemRepository)) {
            return new app.ItemRepository(itemCache,
                                          croniclService);
        }

        var that = this,
            _itemCache  = null,
            _croniclService  = null;

        this.getById = function(id, done) {
            var cachedItem = _itemCache.items[id];
            if(cachedItem) {
                done(cachedItem);
                return;
            }

            function success(data) {
                if (!data) {
                    throw "data not supplied";
                }

                var result = $.parseJSON(data);
                _itemCache.insert([result]);

                done(result);
            }

            setTimeout(function(){$.ajax({ url: _croniclService.getCroniclUri() + 'items/' + id,
                     success: success,
                     cache: false });}, 2000);
        };

        function init() {
            if(!itemCache){
                throw "itemCache not supplied.";
            }

            if(!croniclService){
                throw "croniclService not supplied.";
            }

            _itemCache = itemCache;
            _croniclService = croniclService;

            return that;
        }

        return init();
    }

    app.ItemRepository = ItemRepository;

}(wizerati));;(function (app) {
    "use strict";

    function AccountService(wizeratiClient) {

        if (!(this instanceof app.AccountService)) {
            return new app.AccountService(wizeratiClient);
        }

        var that = this,
            _wizeratiClient = null;

        this.create = function (name, email, options) {
            if(!options) {
                throw "options not supplied."
            }

            if(!options.success) {
                throw "options.success not supplied."
            }

            if(!options.fail) {
                throw "options.fail not supplied."
            }

            if(!options.wait) {
                throw "options.wait not supplied."
            }

            var entity = new app.AccountEntity();
            entity.name = name;
            entity.email = email;
            options.wait();
            setTimeout(function(){
                options.success();
            }, 3000);
            //_wizeratiClient.Put(entity, options);
        };

        function init() {
            if (!wizeratiClient) {
                throw "wizeratiClient not supplied";
            }

            _wizeratiClient = wizeratiClient;

            return that;
        }

        return init();
    }

    app.AccountService = AccountService;

}(wizerati));
;(function (app) {
    "use strict";

    //todo: split authorization and authentication?
    function AuthenticationService() {

        if (!(this instanceof app.AuthenticationService)) {
            return new app.AuthenticationService();
        }

        var that = this;

        this.authenticate = function (username, password) {

//          $.ajax({ url: options.searchUri, success: success, cache: false });
            return false;
        };

        function init() {

            return that;
        }

        return init();
    }

    app.AuthenticationService = AuthenticationService;

}(wizerati));
;(function (app) {
    "use strict";

    function CookieService() {

        if (!(this instanceof CookieService)) {
            return new CookieService();
        }

        var that = this,
            _cookieName = "wizerati";

        this.getAuthorizationCookie = function () {
            return _.cookie(_cookieName);
        };

        this.setAuthorizationCookie = function (role) {
            _.cookie(_cookieName, role, { expires: 7, path: '/' });
        };

        this.deleteAuthorizationCookie = function () {
            _.cookie(_cookieName, null);
        };

        function init() {
            return that;
        }

        return init();
    }

    app.CookieService = CookieService;

}(wizerati));


;(function (app) {
    "use strict";

    function CroniclService(loginService, config) {

        if (!(this instanceof app.CroniclService)) {
            return new app.CroniclService(loginService, config);
        }

        var that = this,
            _loginService = null,
            _config = null;

        this.getCroniclUri = function () {
            return _config.config.templateServerUris[_loginService.getCurrentRole()];
        };

        function init() {
            if (!loginService) {
                throw "loginService not supplied";
            }
            if (!config) {
                throw "config not supplied";
            }

            _loginService = loginService;
            _config = config;

            return that;
        }

        return init();
    }

    app.CroniclService = CroniclService;

}(wizerati));
;(function (app) {
    "use strict";

    function LogInService(cookieService) {

        if (!(this instanceof app.LogInService)) {
            return new app.LogInService(cookieService);
        }

        var that = this,
            _cookieService = null,
            _roleEnum = null;

        this.logIn = function (options) {
            if (!options.username && !options.role) {
                throw "username not supplied";
            }
            if (!options.password && !options.role) {
                throw "password not supplied";
            }

            if (options.role) {
                _cookieService.setAuthorizationCookie(options.role);
                initializeUI();

                return;
            } else {
                if (authenticate(options.username, options.password)) {
                    _cookieService.setAuthorizationCookie(options.role);

                    return;
                }
            }

            throw "authentication failed.";
        };

        this.getCurrentRole = function () {
            var cookie = _cookieService.getAuthorizationCookie();

            if (!cookie) {
                return _roleEnum.ContractorStranger;
            }

            if (cookie !== _roleEnum.Contractor
                && cookie !== _roleEnum.Employer
                && cookie !== _roleEnum.ContractorStranger
                && cookie !== _roleEnum.EmployerStranger) {

                throw "invalid role found in cookie '" + cookie + "'";
            }

            return cookie;
        };

        function authenticate(username, password) {
            return (username === "ben" || username === "sally");
        }

        function authorize(username) {
            if (username == "ben") {
                return _role = _roleEnum.Contractor;
            } else if (username == "sally") {
                return _role = _roleEnum.Employer;
            }

            throw "unauthorized.";
        }

        //gets the value of a cookie by name
        //see: http://stackoverflow.com/questions/10730362/javascript-get-cookie-by-name
        function getCookieValue(name) {
            var parts = document.cookie.split(name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        }

        function init() {
            if (!cookieService) {
                throw "cookieService not supplied";
            }

            _roleEnum = wizerati.mod("enum").UserRole;

            _cookieService = cookieService;

            return that;
        }

        return init();
    }

    app.LogInService = LogInService;

}(wizerati));
;//try forcing service types to communicate with the UI only via routing and local storage?
(function (app) {
    "use strict";

    function SearchService(croniclService, itemCache) {

        if (!(this instanceof app.SearchService)) {
            return new app.SearchService(croniclService, itemCache);
        }

        var that = this,
            _croniclService = null,
            _itemCache = null;

        //rename to success, plus add timeout argument and error
        this.runSearch = function (keywords,
                                   location,
                                   rate,
                                   done) {
            done = !done ? function(data) {} : done;

            function success(data) {
                if (!data) {
                    throw "data not supplied";
                }

                var results = $.parseJSON(data);
                _itemCache.insert(results);
                done(results);
            }

            $.ajax({
                url: _croniclService.getCroniclUri() + 'search',
                success: success, cache: false });
        };

        function init() {
            if (!croniclService) {
                throw "croniclService not supplied."
            }

            if (!itemCache) {
                throw "itemCache not supplied."
            }

            _croniclService = croniclService;
            _itemCache = itemCache;

            return that;
        }

        return init();
    }

    app.SearchService = SearchService;

}(wizerati));

//throw "next: use cronicl service to get the uri,
// then pass it into done argument (which should update the relevant models - and hence the UI)";

//use a factory for the search URI?
//var defaults = {
//    searchUri: "./items?q=",
//    keywords: null,
//    filterModel: null,
//    pre: function () {
//    },
//    success: function () {
//    }, //function(data) - instantiate the relevant models from the json for use by the application
//    error: function (e) {
//        throw "runSearch error: " + e;
//    }
//};
//
//options = _.extend({}, defaults, options);
//
//if (!data) {
//    throw "data not supplied";
//}

//            console.log(data);
//write the results to local storage, then return to the controller
//the controller can then coordinate the updating of any views

//var results = $.parseJSON(data);
//console.log(data);
//            var resultModels = [];
//
//            _.each(results, function (r) {
//                resultModels.push(_modelFactory.create(r));
//            });
//
//
//            _resultListModel.setResults(resultModels);

//                var resultModels = [];
//
//                _.each(results, function (r) {
//                    resultModels.push(_resultModelFactory.create(r));
//                });;(function (app) {
    "use strict";

    function AccountActivationView(model) {

        if (!(this instanceof app.AccountActivationView)) {
            return new app.AccountActivationView(model);
        }

        var that = this,
            _el = "#activation-panel";

        this.$el = null;
        this.Model = null;

        this.render = function () {
        };

        this.bindEvents = function () {
        };

        this.onDomReady = function(){
            that.$el = $(_el);
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            $.subscribe(that.Model.updateEventUri, that.render);

            return that;
        }

        return init();
    };

    app.AccountActivationView = AccountActivationView;
    invertebrate.View.isExtendedBy(app.AccountActivationView);

}(wizerati));
;(function (app) {
    "use strict";

    function ContractFavoriteView(model) {

        if (!(this instanceof app.ContractFavoriteView)) {
            return new app.ContractFavoriteView(model);
        }

        var that = this,
            _el = "<div class='thumbnail thumbnail-108'></div>",
            _templateName = "favorite.html";

        this.$el = $(_el);
        this.Model = null;

        this.render = function () {
            if (that.Model.isSelected) {
                that.$el.addClass('selected');
            } else {
                that.$el.removeClass('selected');
            }

            app.instance.renderTemplate(that.$el,
                                        _templateName,
                                        that.Model,
                                        {});

            return that;
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            return that;
        }

        return init();
    }

    app.ContractFavoriteView = ContractFavoriteView;
    invertebrate.View.isExtendedBy(app.ContractFavoriteView);

}(wizerati));
;(function (app) {
    "use strict";

    function ContractItemOfInterestView(model) {

        if (!(this instanceof app.ContractItemOfInterestView)) {
            return new app.ContractItemOfInterestView(model);
        }

        var that = this,
            _el = '<article class="item-of-interest overflow-y-scroll overflow-x-hidden lucid-column"></article>',
            _templateName = "item-of-interest.html";

        this.$el = $(_el);
        this.Model = null;

        this.render = function () {
            that.$el.attr('data-id', that.Model.id);

            if (that.Model.isSelected) {
                that.$el.addClass('selected');
            }

            if (that.Model.shouldAnimateIn) {
                that.$el.addClass('collapsed');
            }

            app.instance.renderTemplate(that.$el,
                                        _templateName,
                                        that.Model,
                                        {});

            return that;
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            return that;
        }

        return init();
    }

    app.ContractItemOfInterestView = ContractItemOfInterestView;
    invertebrate.View.isExtendedBy(app.ContractItemOfInterestView);

}(wizerati));
;(function (app) {
    "use strict";

    function ContractResultView(model) {

        if (!(this instanceof app.ContractResultView)) {
            return new app.ContractResultView(model);
        }

        var that = this,
            _el = "<li class='t t-219'></li>",
            _templateName = "result.html";

        this.$el = $(_el);
        this.Model = null;

        this.render = function () {
            if (that.Model.isSelected) {
                that.$el.addClass('selected');
            } else {
                that.$el.removeClass('selected');
            }

            app.instance.renderTemplate(that.$el,
                                        _templateName,
                                        that.Model,
                                        {});

            return that;
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            return that;
        }

        return init();
    }

    app.ContractResultView = ContractResultView;
    invertebrate.View.isExtendedBy(app.ContractResultView);

}(wizerati));
;(function (app) {
    "use strict";

    function ContractorFavoriteView(model) {

        if (!(this instanceof app.ContractorFavoriteView)) {
            return new app.ContractorFavoriteView(model);
        }

        var that = this,
            _el = "<div class='thumbnail thumbnail-108'></div>",
            _templateName = "favorite.html";

        this.$el = $(_el);
        this.Model = null;

        this.render = function () {
            app.instance.renderTemplate(that.$el,
                                        _templateName,
                                        that.Model,
                                        {});

            return that;
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            that.render();

            return that;
        }

        return init();
    }

    app.ContractorFavoriteView = ContractorFavoriteView;
    invertebrate.View.isExtendedBy(app.ContractorFavoriteView);

}(wizerati));
;(function (app) {
    "use strict";

    function ContractorItemOfInterestView(model) {

        if (!(this instanceof app.ContractorItemOfInterestView)) {
            return new app.ContractorItemOfInterestView(model);
        }

        var that = this,
            _el = '<article id="selected-item" class="overflow-y-scroll lucid-column"></article>',
            _templateName = "item-of-interest.html";

        this.$el = $(_el);
        this.Model = null;

        this.render = function () {
            that.$el.attr('data-id', that.Model.id);

            if (that.Model.isSelected) {
                that.$el.addClass('selected');
            }

            if (that.Model.shouldAnimateIn) {
                that.$el.addClass('collapsed');
            }

            app.instance.renderTemplate(that.$el,
                                        _templateName,
                                        that.Model,
                                        {});

            return that;
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            return that;
        }

        return init();
    }

    app.ContractorItemOfInterestView = ContractorItemOfInterestView;
    invertebrate.View.isExtendedBy(app.ContractorItemOfInterestView);

}(wizerati));
;(function (app) {
    "use strict";

    function ContractorResultView(model) {

        if (!(this instanceof app.ContractorResultView)) {
            return new app.ContractorResultView(model);
        }

        var that = this,
            _el = "<li class='thumbnail thumbnail-219' data-id='" + model.Id + "'></li>",
            _templateName = "result.html";

        this.$el = null;
        this.Model = null;

        this.render = function (options) {
            app.instance.renderTemplate(that.$el,
                                        _templateName,
                                        that.Model,
                                        {});

            return that;
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            return that;
        }

        return init();
    }

    app.ContractorResultView = ContractorResultView;
    invertebrate.View.isExtendedBy(app.ContractorResultView);

}(wizerati));
;(function (app) {
    "use strict";

    function DeleteFavoriteGroupConfirmationDialogView(model, favoritesCubeModel) {

        if (!(this instanceof app.DeleteFavoriteGroupConfirmationDialogView)) {
            return new app.DeleteFavoriteGroupConfirmationDialogView(model, favoritesCubeModel);
        }

        var that = this,
            _el = "#delete-favorite-group-confirmation-dialog",
            _messageContainerEl = ".message-container",
            _deleteButtonEl = ".btn-danger",
            _favoritesCubeModel = null,
            _uiModeEnum = wizerati.mod("enum").UIMode;

        this.$el = null;
        this.Model = null;

        this.render = function () {
            var favoriteGroupId = that.Model.getFavoriteGroupId();
            var favoriteGroupName =  _favoritesCubeModel.getFavoriteGroupName(favoriteGroupId);
            that.$el.find(_messageContainerEl).html('<p>You have chosen to delete the following group of favorites:</p><blockquote><em>' + favoriteGroupName  + '</em></blockquote><p>This cannot be undone.</p><p>Are you sure you want to delete this group?</p>')
            that.$el.find(_deleteButtonEl).attr('href', '/favoritegroup/destroy?id=' + favoriteGroupId);
        };

        this.bindEvents = function () {
            $(document).keyup(function (e) {
                if (e.keyCode === 27 && app.mod("views").uiRootView.Model.getModal() === _uiModeEnum.DeleteFavoriteGroupConfirmationDialog) {
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
                throw "model not supplied";
            }

            if (!favoritesCubeModel) {
                throw "favoritesCubeModel not supplied";
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

}(wizerati));
;(function (app) {
    "use strict";

    function FavoritesCubeView(model,
                               favoriteViewFactory,
                               selectedCubeFaceModel,
                               selectedItemModel,
                               hiddenItemsModel,
                               actionedItemsModel,
                               itemsOfInterestModel) {

        if (!(this instanceof app.FavoritesCubeView)) {
            return new app.FavoritesCubeView(model,
                                             favoriteViewFactory,
                                             selectedCubeFaceModel,
                                             selectedItemModel,
                                             hiddenItemsModel,
                                             actionedItemsModel,
                                             itemsOfInterestModel);
        }

        var that = this,
            _el = "#favorites-cube",
            _favoriteViewFactory = null,
            _selectedCubeFaceModel = null,
            _selectedItemModel = null,
            _actionedItemsModel = null,
            _hiddenItemsModel = null,
            _itemsOfInterestModel = null,
            _labelEls = [ ".cube-face-labels li:nth-child(1)",   //top
                          ".cube-face-labels li:nth-child(2)",   //left
                          ".cube-face-labels li:nth-child(3)",   //front
                          ".cube-face-labels li:nth-child(4)",   //right
                          ".cube-face-labels li:nth-child(5)",   //bottom
                          ".cube-face-labels li:nth-child(6)" ], //back
            _faceEls = [".top", ".left", ".front", ".right", ".bottom", ".back" ],
            _modeEnum = app.mod('enum').FavoritesCubeMode;

        this.$el = null;
        this.Model = null;

        this.render = function () {
            var mode = that.Model.getMode();
            that.$el.attr('data-mode', mode);
            that.$el.find('.favorites-cube-edit-link').attr('href', '/favoritescubemode/update?mode=' + (mode === _modeEnum.Default ? _modeEnum.Edit : _modeEnum.Default));
            that.$el.find('.favorites-cube-edit-link').text((mode === _modeEnum.Default ? 'edit' : 'done'));
            that.$el.find('.cube-controls').attr('data-active-faces', that.Model.getFaceStatuses().reduce(function(previousValue, currentValue, index, array){
                return previousValue + (currentValue ? '1' : '0');
            }, ''))

            if(_.flatten(that.Model.getFavorites(), true).length == 0){
                that.$el.addClass('hide');
                return;
            } else {
                that.$el.removeClass('hide');
            }

            $.each(that.Model.getFavorites(), function (index1, faceFavorites) {
                var $face = that.$el.find(_faceEls[index1]);
                var $faceSelectorSpots = that.$el.find('.face-selector:nth-child(' + (index1+1) +') .spot'); //plus 1 because 1-based in DOM
                $face.find('*').not('.face-empty-message').remove();
                $faceSelectorSpots.removeClass('filled');
                $.each(faceFavorites, function(index2, f){
                    _favoriteViewFactory.create(f, _selectedCubeFaceModel.getSelectedCubeFaceId(), function($v) {
                        $face.append($v);
                        $($faceSelectorSpots[index2]).addClass('filled');
                    });
                });
            });

            that.$el.attr('data-selected-face-id',
                _selectedCubeFaceModel.getSelectedCubeFaceId());

            var faceLabels = that.Model.getFaceLabels();
            $.each(_labelEls, function(index, el){
                $(el).text(faceLabels[index]);
            });
        };

        this.onDomReady = function(){
            that.$el = $(_el);
            that.render();
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            if (!favoriteViewFactory) {
                throw "favoriteViewFactory not supplied";
            }

            if (!selectedCubeFaceModel) {
                throw "selectedCubeFaceModel not supplied";
            }

            if (!selectedItemModel) {
                throw "selectedItemModel not supplied";
            }

            if (!hiddenItemsModel) {
                throw "hiddenItemsModel not supplied";
            }

            if (!actionedItemsModel) {
                throw "actionedItemsModel not supplied";
            }

            if (!itemsOfInterestModel) {
                throw "itemsOfInterestModel not supplied";
            }

            that.Model = model;
            _favoriteViewFactory = favoriteViewFactory;
            _selectedCubeFaceModel = selectedCubeFaceModel;
            _selectedItemModel = selectedItemModel;
            _hiddenItemsModel = hiddenItemsModel;
            _actionedItemsModel = actionedItemsModel;
            _itemsOfInterestModel = itemsOfInterestModel;

            $.subscribe(that.Model.updateEventUriPrivate, that.render);
            $.subscribe(that.Model.updateEventUri, that.render);
            $.subscribe(_selectedCubeFaceModel.updateEventUri, that.render);
            $.subscribe(_selectedItemModel.updateEventUri, that.render);
            $.subscribe(_hiddenItemsModel.updateEventUri, that.render);
            $.subscribe(_actionedItemsModel.updateEventUri, that.render);
            $.subscribe(_itemsOfInterestModel.updateEventUri, that.render);

            return that;
        }

        return init();
    }

    app.FavoritesCubeView = FavoritesCubeView;
    invertebrate.View.isExtendedBy(app.FavoritesCubeView);

}(wizerati));;(function (app) {
    "use strict";

    //todo, render to in mem dom fragment with
    //single write to DOM to minimise repaint
    //use JQUery scrollTop to reset scroll position of
    //scrolled elements
    //fix jankiness of item selection and items of interest update
    function ItemsOfInterestView(model, itemOfInterestViewFactory, selectedCubeFaceModel, selectedItemModel, favoritesCubeModel, hiddenItemsModel, actionedItemsModel) {

        if (!(this instanceof app.ItemsOfInterestView)) {
            return new app.ItemsOfInterestView(model,
                itemOfInterestViewFactory,
                selectedCubeFaceModel,
                selectedItemModel,
                favoritesCubeModel,
                hiddenItemsModel,
                actionedItemsModel);
        }

        var that = this,
            _el1 = "#items-of-interest-panel-1",
            _el2 = "#items-of-interest-panel-2",
            _itemOfInterestViewFactory = null,
            _selectedCubeFaceModel = null,
            _selectedItemModel = null,
            _favoritesCubeModel = null,
            _hiddenItemsModel = null,
            _actionedItemsModel = null,
            _scrollTopValues = {},
            _scrollLeft = 0;

        this.$el = null;
        this.$el2 = null;
        this.$currentEl = null;
        this.Model = null;

        function storeScrollTopValues() {
            var selectedItem = that.$el.find('.item-of-interest.selected');

            if (selectedItem) {
                _scrollTopValues[selectedItem.attr('data-id') + 's'] = $(selectedItem).scrollTop();
            }

            _.each(that.$el.find('.item-of-interest:not(.selected)'), function (e) {
                _scrollTopValues[$(e).attr('data-id')] = $(e).scrollTop();
            });
        }

        function storeScrollLeftValue() {
            _scrollLeft = $('body').scrollLeft();
        }

        this.renderWithSelectedItemAnimation = function () {
            renderPrivate();
        }

        this.render = function () {
            var args = Array.prototype.slice.call(arguments);
            var options = args.length > 1 ? args[1] : {};
            renderPrivate({ animateSelectedItem: false, removedItemId: options.removedItemId });
        };

        function renderPrivate(options) {
            options = options || {animateSelectedItem: true};

            storeScrollTopValues();
            storeScrollLeftValue();

            var $prevEl = that.$currentEl || that.$el2;
            that.$currentEl = $prevEl === that.$el ? that.$el2 : that.$el; //Double buffering to ensure the user sees no "flicker" as the results are rendered.
            that.$currentEl.empty();

            var items = that.Model.getItemsOfInterest();
            items.selectedItem = _selectedItemModel.getSelectedItemId();

            if (items.selectedItem) {
                _itemOfInterestViewFactory.create(items.selectedItem,
                    _selectedCubeFaceModel.getSelectedCubeFaceId(),
                    true,
                    options.animateSelectedItem,
                    function ($v) {

                        function addSelectedItem() {
                            that.$currentEl.prepend($v);
                            $v.scrollTop(_scrollTopValues[items.selectedItem + 's']);
                            setTimeout(function () {
                                $v.removeClass('collapsed')
                            }, 300);

                            $('body').scrollLeft(_scrollLeft);
                        }

                        addPinnedItems(items.pinnedItems, addSelectedItem);
                    });
            } else {
                addPinnedItems(items.pinnedItems, function () {
                    $('body').scrollLeft(_scrollLeft);
                });
            }

            if(options.removedItemId) {
                $prevEl.find('.item-of-interest[data-id=' + options.removedItemId + ']').addClass('collapsed');
                setTimeout(function(){
                    $prevEl.addClass('buffer');
                    that.$currentEl.removeClass('buffer');
                    setTimeout(function(){ $prevEl.empty(); }, 300)
                }, 200); //wait for removal animation to complete

                return;
            }

            $prevEl.addClass('buffer');
            that.$currentEl.removeClass('buffer');
            setTimeout(function(){ $prevEl.empty(); }, 300)
        }

        function addPinnedItems(items, done) {
            done = done || function () {
            };

            _.each(items, function (id) {
                if (id === null) {
                    return;
                }
                _itemOfInterestViewFactory.create(id,
                    _selectedCubeFaceModel.getSelectedCubeFaceId(),
                    false,
                    false,
                    function ($v) {
                        that.$currentEl.prepend($v)
                        $v.scrollTop(_scrollTopValues[id]);
                    });
            });
            done();
        }

        this.onDomReady = function () {
            that.$el = $(_el1);
            that.$el2 = $(_el2);
            that.render();
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            if (!itemOfInterestViewFactory) {
                throw "itemOfInterestViewFactory not supplied";
            }

            if (!selectedCubeFaceModel) {
                throw "selectedCubeFaceModel not supplied";
            }

            if (!selectedItemModel) {
                throw "selectedItemModel not supplied";
            }

            if (!favoritesCubeModel) {
                throw "selectedItemModel not supplied";
            }

            if (!hiddenItemsModel) {
                throw "hiddenItemsModel not supplied";
            }

            if (!actionedItemsModel) {
                throw "actionedItemsModel not supplied";
            }

            that.Model = model;
            _itemOfInterestViewFactory = itemOfInterestViewFactory;
            _selectedCubeFaceModel = selectedCubeFaceModel;
            _selectedItemModel = selectedItemModel;
            _favoritesCubeModel = favoritesCubeModel;
            _hiddenItemsModel = hiddenItemsModel;
            _actionedItemsModel = actionedItemsModel;

            $.subscribe(that.Model.updateEventUri, that.render);
            $.subscribe(_selectedCubeFaceModel.updateEventUri, that.render);
            $.subscribe(_selectedItemModel.updateEventUri, that.renderWithSelectedItemAnimation);
            $.subscribe(_favoritesCubeModel.updateEventUri, that.render);
            $.subscribe(_hiddenItemsModel.updateEventUri, that.render);
            $.subscribe(_actionedItemsModel.updateEventUri, that.render);

            return that;
        }

        return init();
    }

    app.ItemsOfInterestView = ItemsOfInterestView;
    invertebrate.View.isExtendedBy(app.ItemsOfInterestView);

}(wizerati));;(function (app) {
    "use strict";

    function LoginPanelView(model) {

        if (!(this instanceof app.LoginPanelView)) {
            return new app.LoginPanelView(model);
        }

        var that = this,
            _el = "#log-in-panel",
            _cancelButtonEl = ".btn-cancel",
            _successButtonEl = ".log-in .btn-success",
            _usernameEl = ".username",
            _passwordEl = ".password",
            _uiModeEnum = wizerati.mod("enum").UIMode;

        this.$el =
        this.$cancelButton =
        this.$successButton =
        this.$username =
        this.$password =
        this.Model = null;

        this.render = function () {
            if(that.Model.getIsVisible()) {
                that.$el.removeClass('hide');
            }

            if (that.Model.getIsLoginFailedMessageVisible()) {
                that.$el.addClass('login-error');
            }
        };

        this.bindEvents = function () {
            that.$username.on('change', function () {
                that.Model.setUsername(that.$username.val());
            });

            that.$password.on('change', function () {
                that.Model.setPassword(that.$password.val());
            });

            that.$cancelButton.on('click', function () {
                cancel();
            });

            that.$successButton.on('click', function () {
                app.instance.router.route('/session/create', { $parentDomNode: that.$el });
            });

            $(document).keyup(function (e) {
                if (e.keyCode === 27 && app.mod("views").uiRootView.Model.getUIMode() === _uiModeEnum.LogIn) {
                    cancel();
                }
            });
        };

        function cancel() {
            app.instance.router.route('/');
        }

        this.onDomReady = function(){
            that.$el = $(_el);
            that.$cancelButton = that.$el.find(_cancelButtonEl);
            that.$password = that.$el.find(_passwordEl);
            that.$username = that.$el.find(_usernameEl);
            that.$successButton = that.$el.find(_successButtonEl);
            that.bindEvents();
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            $.subscribe(that.Model.updateEventUri, that.render);

            return that;
        }

        return init();
    }

    app.LoginPanelView = LoginPanelView;
    invertebrate.View.isExtendedBy(app.LoginPanelView);

}(wizerati));
;(function (app) {
    "use strict";

    function PurchasePanelView(model) {

        if (!(this instanceof app.PurchasePanelView)) {
            return new app.PurchasePanelView(model);
        }

        var that = this,
            _el = "#purchase-panel";

        this.$el = null;
        this.Model = null;

        this.render = function () {
            that.$el.attr('data-state', that.Model.getActiveTab());
            that.$el.attr('data-is-waiting', that.Model.getIsWaiting());
        };

        this.bindEvents = function () {
        };

        this.onDomReady = function(){
            that.$el = $(_el);
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            $.subscribe(that.Model.updateEventUri, that.render);

            return that;
        }

        return init();
    };

    app.PurchasePanelView = PurchasePanelView;
    invertebrate.View.isExtendedBy(app.PurchasePanelView);

}(wizerati));
;(function (app) {
    "use strict";

    function ResultListView(model, resultViewFactory, selectedCubeFaceModel, selectedItemModel, favoritesCubeModel, hiddenItemsModel, actionedItemsModel, itemsOfInterestModel) {

        if (!(this instanceof app.ResultListView)) {
            return new app.ResultListView(model,
                resultViewFactory,
                selectedCubeFaceModel,
                selectedItemModel,
                favoritesCubeModel,
                hiddenItemsModel,
                actionedItemsModel,
                itemsOfInterestModel);
        }

        var that = this,
            _elContainer = ".result-list-container",
            _el1 = "#result-list-panel-1",
            _el2 = "#result-list-panel-2",
            _resultViewFactory = null,
            _selectedCubeFaceModel = null,
            _selectedItemModel = null,
            _favoritesCubeModel = null,
            _actionedItemsModel = null,
            _hiddenItemsModel = null,
            _itemsOfInterestModel = null,
            _scrollTopValue = 0,
            _lastKnownSearchId = null;

        this.$elContainer = null;
        this.$el = null;
        this.$el2 = null;
        this.$currentEl = null;
        this.Model = null;

        function calculateScrollTopValueToMaintain($el, searchId) {
            if(_lastKnownSearchId === searchId) {
                _scrollTopValue = $el.scrollTop();
            } else {
                _scrollTopValue = 0;
                _lastKnownSearchId = searchId;
            }
        }

        this.render = function () {
            var $prevEl = that.$currentEl || that.$el2;
            var searchId = that.Model.getSearchId();
            var isFreshSearch = _lastKnownSearchId !== searchId;
            calculateScrollTopValueToMaintain($prevEl, searchId);
            that.$currentEl = $prevEl === that.$el ? that.$el2 : that.$el; //Double buffering to ensure the user sees no "flicker" as the results are rendered.
            that.$currentEl.empty();

            that.$currentEl.addClass('ios-scroll-enable');

            var selectedCubeFaceId = _selectedCubeFaceModel.getSelectedCubeFaceId();
            _.each(that.Model.getResults(), function (id) {
                _resultViewFactory.create(id, selectedCubeFaceId, function ($v) {
                    that.$currentEl.append($v);
                });
            });

            that.$currentEl.scrollTop(_scrollTopValue);
            setTimeout(function(){$prevEl.addClass('buffer');}, 0); //reduces jank on iOS (yes really)

            var mode = that.Model.getMode();
            if(isFreshSearch) {
                setTimeout(function(){ //this avoids the user seeing the appending of results to the DOM as an "animation"
                    that.$currentEl.removeClass('buffer');
                    that.$elContainer.attr('data-mode', mode);
                }, 350);
            } else {
                setTimeout(function(){
                    that.$currentEl.removeClass('buffer');
                    that.$elContainer.attr('data-mode', mode);
                }, 0); //reduces jank on iOS (yes really)
            }

            setTimeout(function(){
                //Circumvent iOS bug whereby scrolling is applied to the hidden "buffer" list.
                $prevEl.empty();
                $prevEl.removeClass('ios-scroll-enable');
            }, 300); //This timeout must be longer than the css transition to avoid interrupting it with a flicker.
        };

//        function renderResults(results, index) {
//            index = index === undefined ? 0 : index;
//
//            if (index === results.length) {
//                return;
//            }
//
//            _resultViewFactory.create(results[index], _selectedCubeFaceModel.getSelectedCubeFaceId(), function ($v) {
//                that.$el1.append($v);
//            });
//
//            setTimeout(function () {
//                renderResults(results, ++index)
//            }, 950);
//        }

        this.onDomReady = function () {
            that.$el = $(_el1);
            that.$el2 = $(_el2);
            that.$elContainer = $(_elContainer);
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            if (!resultViewFactory) {
                throw "resultViewFactory not supplied";
            }

            if (!selectedCubeFaceModel) {
                throw "selectedCubeFaceModel not supplied";
            }

            if (!selectedItemModel) {
                throw "selectedItemModel not supplied";
            }

            if (!favoritesCubeModel) {
                throw "selectedItemModel not supplied";
            }

            if (!hiddenItemsModel) {
                throw "hiddenItemsModel not supplied";
            }

            if (!actionedItemsModel) {
                throw "actionedItemsModel not supplied";
            }

            if (!itemsOfInterestModel) {
                throw "itemsOfInterestModel not supplied";
            }

            that.Model = model;
            _resultViewFactory = resultViewFactory;
            _selectedCubeFaceModel = selectedCubeFaceModel;
            _selectedItemModel = selectedItemModel;
            _favoritesCubeModel = favoritesCubeModel;
            _hiddenItemsModel = hiddenItemsModel;
            _actionedItemsModel = actionedItemsModel;
            _itemsOfInterestModel = itemsOfInterestModel;

            $.subscribe(that.Model.updateEventUri, that.render);
            $.subscribe(_selectedCubeFaceModel.updateEventUri, that.render);
            $.subscribe(_selectedItemModel.updateEventUri, that.render);
            $.subscribe(_favoritesCubeModel.updateEventUri, that.render);
            $.subscribe(_hiddenItemsModel.updateEventUri, that.render);
            $.subscribe(_actionedItemsModel.updateEventUri, that.render);
            $.subscribe(_itemsOfInterestModel.updateEventUri, that.render);

            return that;
        }

        return init();
    }

    app.ResultListView = ResultListView;
    invertebrate.View.isExtendedBy(app.ResultListView);

}(wizerati));;(function (app) {
    "use strict";

    function SearchFormView(model) {

        if (!(this instanceof app.SearchFormView)) {
            return new app.SearchFormView(model);
        }

        var that = this,
            _el = "#search-form",
            _templateName = "search-form.html",
            _postRenderScriptName = "search-form.js",
            _waitStateIsBeingMonitored = false;; //is the periodic check for whether we are waiting running?

        this.$el = null;
        this.Model = null;

        this.render = function () {
            var options = { done: that.bindEvents, postRenderScriptName: null };

            return app.instance.renderTemplate(that.$el,
                _templateName, that.Model, options);
        };

        this.bindEvents = function () {
            var $keywords = that.$el.find("#keywords");
            $keywords.on('change', function () {
                that.Model.setKeywords($keywords.val(), { silent: true });
            });

            var $location = that.$el.find("#location");
            $location.on('change', function () {
                that.Model.setLocation($location.val(), { silent: true });
            });

            var $rate = that.$el.find("input[name='r']");
            $rate.on('change', function () {
                that.Model.setRate(that.$el.find("input[name='r']:checked").val(), { silent: true });
            });

            if (!_waitStateIsBeingMonitored) {
                monitorWaitState();
            }
        };

        this.postRender = function () {
        };

        //We take control here in the view of changes to the view when the wait state changes (i.e. we do not leave this to the usual template rendering process).
        //We do this because we want to control the precise timings of the checks to correspond to individual revolutions of the wait animation.
        //This enables us to always stop the animation at its natural end, rather than stopping the animation half way through, which looks jarring.
        //If we are waiting, then re-set the data-is-waiting state to false and wait a tick to enable the DOM to register the change in data attribute (so we can re-trigger the animation).
        //On the next tick, we trigger the animation and wait the precise duration of the animation.
        //We then (taking our time, because we are using setTimeout and not setInterval) see if we are still waiting, if we are, we repeat the process.
        //If we are not waiting then we set the data-attribute to stop the animation and set a flag variable to indicate we are no-longer monitoring the model for changes to the wait state.
        //Re-setting this flag means that when the search form is re-rendered, we know to kick off the wait state monitoring process again.
        function monitorWaitState() {
            _waitStateIsBeingMonitored = true;

            if (that.Model.getIsWaiting() === "true") {
                that.$el.find('.btn-primary').attr('data-is-waiting', "false");
                setTimeout(function () {
                    that.$el.find('.btn-primary').attr('data-is-waiting', "true"); //trigger animation
                    setTimeout(monitorWaitState, 2500); //wait for animation to complete before checking
                }, 0);
            } else {
                that.$el.find('.btn-primary').attr('data-is-waiting', "false");
                _waitStateIsBeingMonitored = false;
            }
        }

        this.onDomReady = function () {
            that.$el = $(_el);
            that.render();
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            $.subscribe(that.Model.updateEventUri, that.render);

            return that;
        }

        return init();
    };

    app.SearchFormView = SearchFormView;
    invertebrate.View.isExtendedBy(app.SearchFormView);

}(wizerati));
;(function (app) {
    "use strict";

    function SearchPanelView(model) {

        if (!(this instanceof app.SearchPanelView)) {
            return new app.SearchPanelView(model);
        }

        var that = this,
            _el = "#search-panel",
            _searchPanelModeEnum = wizerati.mod("enum").SearchPanelMode;

        this.$el = null;
        this.Model = null;

        this.render = function (e, options) {
            options = options || { done: that.postRender };

            that.$el.attr("data-mode", that.Model.getMode());
            var oppositeMode = that.Model.getMode() === _searchPanelModeEnum.Default ? _searchPanelModeEnum.Minimized : _searchPanelModeEnum.Default;
            that.$el.find('.handle').attr("href", '/searchpanelmode/update?mode=' + oppositeMode);;
         };

        this.postRender = function () {
        };

        this.bindEvents = function () {
        };

        this.onDomReady = function(){
            that.$el = $(_el);
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            $.subscribe(that.Model.updateEventUri, that.render);

            that.bindEvents();

            return that;
        }

        return init();
    }

    app.SearchPanelView = SearchPanelView;
    invertebrate.View.isExtendedBy(app.SearchPanelView);

}(wizerati));
;(function (app) {
    "use strict";

    function UIRootView(model) {

        if (!(this instanceof app.UIRootView)) {
            return new app.UIRootView(model);
        }

        var that = this,
            _el = "body";

        this.$el = null;
        this.Model = null;

        this.render = function (e, options) {
            options = options || { done: that.postRender };

            //two step DOM manipulation to enable visibility of CSS transition
            //first set display property
            var modal = that.Model.getModal();
            that.$el.removeClass("modal-visible"); //re-adding of this class will trigger CSS transition
            that.$el.attr("data-ui-mode", that.Model.getUIMode());
            that.$el.attr("data-modal", modal);

            if(modal) {
                setTimeout(function(){
                    that.$el.addClass("modal-visible");
                }, 0)  //re-adding of this class will trigger CSS transition
            }

         };

        this.postRender = function () {
        };

        this.bindEvents = function () {
        };

        this.onDomReady = function(){
            that.$el = $(_el);
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            $.subscribe(that.Model.updateEventUri, that.render);

            that.bindEvents();

            return that;
        }

        return init();
    }

    app.UIRootView = UIRootView;
    invertebrate.View.isExtendedBy(app.UIRootView);

}(wizerati));
;"use strict";

//provides top-level "namespace" (property on window)
//to hang everything else off.
window.wizerati = {

    mod: function () {
        var mods = {};

        return function (name) {
            if (mods[name]) {

                return mods[name];
            }

            return mods[name] = {};
        };
    }()

};
