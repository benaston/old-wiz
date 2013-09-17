//order of declaration matters here.
(function (mod) {
    "use strict";

    mod.UserRole = {
        Contractor: "1",
        Employer: "2",
        ContractorStranger: "3",
        EmployerStranger: "4"
    };

    mod.UIMode = {
        GreenfieldSearch: "1",
        LogIn: "2",
        Purchase: "3",
        Search: "4"
    };

    mod.SelectedItemLocation = {
        ResultsList: "1",
        FavouritesCube: "2"
    };

}(wizerati.mod("enum")));


(function (mod) {

    mod.config = new wizerati.Config(invertebrate.env.dev);

}(wizerati.mod("config")));

(function (mod) {

    mod.authenticationService = new wizerati.AuthenticationService();
    mod.cookieService = new wizerati.CookieService();
    mod.logInService = new wizerati.LogInService(mod.cookieService);
    mod.croniclService = new wizerati.CroniclService(mod.logInService, wizerati.mod("config").config); //pass in login service instead?
    mod.searchService = new wizerati.SearchService(mod.croniclService);

}(wizerati.mod("services")));

(function (mod) {

    mod.itemCache = new wizerati.ItemCache();

}(wizerati.mod("caches")));

(function (mod) {

    mod.itemRepository = new wizerati.ItemRepository(wizerati.mod("caches").itemCache, wizerati.mod("services").croniclService);

}(wizerati.mod("repositories")));

(function (mod) {

    mod.TemplateServerSvc = new invertebrate.TemplateServerSvc(wizerati.mod("config").config, wizerati.mod("services").croniclService.getCroniclUri);

}(wizerati.mod("templates")));

(function (mod) {

    mod.searchFormModel = new wizerati.SearchFormModel();
    mod.uiRootModel = new wizerati.UIRootModel();
    mod.loginPanelModel = new wizerati.LoginPanelModel();
    mod.resultListModel = new wizerati.ResultListModel();
    mod.selectedCubeFaceModel = new wizerati.SelectedCubeFaceModel();
    mod.selectedItemModel = new wizerati.SelectedItemModel();
    mod.favoritesCubeModel = new wizerati.FavoritesCubeModel(wizerati.mod("repositories").itemRepository, mod.resultListModel);
    mod.itemsOfInterestModel = new wizerati.ItemsOfInterestModel(mod.selectedItemModel);

}(wizerati.mod("models")));

(function (mod) {

    mod.favoriteViewFactory = new wizerati.FavoriteViewFactory(wizerati.mod("services").logInService, wizerati.mod("repositories").itemRepository, wizerati.mod("models").selectedItemModel);
    mod.itemOfInterestViewFactory = new wizerati.ItemOfInterestViewFactory(wizerati.mod("services").logInService, wizerati.mod("repositories").itemRepository, wizerati.mod("models").selectedItemModel, wizerati.mod("models").itemsOfInterestModel, wizerati.mod("models").selectedCubeFaceModel);
    mod.resultViewFactory = new wizerati.ResultViewFactory(wizerati.mod("services").logInService, wizerati.mod("repositories").itemRepository, wizerati.mod("models").selectedItemModel);

}(wizerati.mod("factories")));

(function (mod) {

    mod.searchFormView = new wizerati.SearchFormView(wizerati.mod("models").searchFormModel);
    mod.uiRootView = new wizerati.UIRootView(wizerati.mod("models").uiRootModel);
    mod.loginPanelView = new wizerati.LoginPanelView(wizerati.mod("models").loginPanelModel);
    mod.favoritesCubeView = new wizerati.FavoritesCubeView(wizerati.mod("models").favoritesCubeModel, wizerati.mod("factories").favoriteViewFactory, wizerati.mod("models").selectedCubeFaceModel, wizerati.mod("models").selectedItemModel);
    mod.resultListView = new wizerati.ResultListView(wizerati.mod("models").resultListModel,         wizerati.mod("factories").resultViewFactory,         wizerati.mod("models").selectedCubeFaceModel,         wizerati.mod("models").selectedItemModel,         wizerati.mod("models").favoritesCubeModel);
    mod.itemsOfInterestView = new wizerati.ItemsOfInterestView(wizerati.mod("models").itemsOfInterestModel,         wizerati.mod("factories").itemOfInterestViewFactory,         wizerati.mod("models").selectedCubeFaceModel,         wizerati.mod("models").selectedItemModel,         wizerati.mod("models").favoritesCubeModel);

}(wizerati.mod("views")));

(function (mod) {

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
        wizerati.mod("caches").itemCache);
    mod.selectedItemController = new wizerati.SelectedItemController(wizerati.mod("models").selectedItemModel);
    mod.favoritesController = new wizerati.FavoritesController(wizerati.mod("views").favoritesCubeView, wizerati.mod("models").selectedCubeFaceModel);
    mod.selectedCubeFaceController = new wizerati.SelectedCubeFaceController(wizerati.mod("models").selectedCubeFaceModel);
    mod.itemsOfInterestController = new wizerati.ItemsOfInterestController(wizerati.mod("models").itemsOfInterestModel);

}(wizerati.mod("controllers")));

