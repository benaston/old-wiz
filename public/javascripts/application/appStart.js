jQuery(document).ready(function () {
    "use strict";

    FastClick.attach(document.body);

    window.wizerati.instance = new wizerati.App(invertebrate.env.dev);

    self.wizerati.instance.searchForm = new wizerati.SearchFormView(new wizerati.SearchFormModel());
    self.wizerati.instance.uiRoot = new wizerati.UIRootView(new wizerati.UIRootModel());
    self.wizerati.instance.loginPanel = new wizerati.LoginPanelView(new wizerati.LoginPanelModel());
    var resultListModel = new wizerati.ResultListModel();
    var selectedCubeFaceModel = new wizerati.SelectedCubeFaceModel();
    var selectedItemModel = new wizerati.SelectedItemModel();
    self.wizerati.instance.favoritesCube = new wizerati.FavoritesCubeView(new wizerati.FavoritesCubeModel(wizerati.mod("repositories").ItemRepository, resultListModel), wizerati.mod("factories").FavoriteViewFactory, selectedCubeFaceModel, selectedItemModel);
    self.wizerati.instance.resultList = new wizerati.ResultListView(resultListModel,
                                                                wizerati.mod("factories").ResultViewFactory,
                                                                selectedCubeFaceModel,
                                                                selectedItemModel);

    self.wizerati.instance.sessionController = new wizerati.SessionController(self.wizerati.instance.loginPanel.Model, wizerati.mod("services").AuthenticationService);
    self.wizerati.instance.loginController = new wizerati.LoginController(self.wizerati.instance.loginPanel.Model, self.wizerati.instance.uiRoot.Model);
    self.wizerati.instance.homeController = new wizerati.HomeController(self.wizerati.instance.uiRoot.Model);
    self.wizerati.instance.advertisersController = new wizerati.AdvertisersController(self.wizerati.instance.uiRoot.Model);
    self.wizerati.instance.searchController = new wizerati.SearchController(self.wizerati.instance.uiRoot.Model, self.wizerati.instance.searchForm.Model, wizerati.mod("services").SearchService, self.wizerati.instance.resultList.Model, wizerati.mod("caches").ItemCache);
    self.wizerati.instance.selectedItemController = new wizerati.SelectedItemController(self.wizerati.instance.favoritesCube.Model, self.wizerati.instance.resultList.Model);
    self.wizerati.instance.favoritesController = new wizerati.FavoritesController(self.wizerati.instance.favoritesCube, self.wizerati.instance.resultList.Model);
    self.wizerati.instance.selectedCubeFaceController = new wizerati.SelectedCubeFaceController(new wizerati.SelectedCubeFaceModel());

    //self.wizerati.instance.itemsOfInterest = new wizerati.ItemsOfInterestView(new wizerati.ItemsOfInterestModel());

    //this should happen at the end here to ensure everything is initialized before routing begins
    self.wizerati.instance.router = new invertebrate.Router('Wizerati');
    self.wizerati.instance.registerRoutes();
});



