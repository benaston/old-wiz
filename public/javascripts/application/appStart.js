"use strict";

jQuery(document).ready(function () {

    FastClick.attach(document.body);

    window.wizerati.instance = new wizerati.App(invertebrate.env.dev);


    self.wizerati.instance.searchForm = new wizerati.SearchFormView(new wizerati.SearchFormModel());
    self.wizerati.instance.uiRoot = new wizerati.UIRootView(new wizerati.UIRootModel());
    self.wizerati.instance.loginPanel = new wizerati.LoginPanelView(new wizerati.LoginPanelModel());
    self.wizerati.instance.resultList = new wizerati.ResultListView(new wizerati.ResultListModel(), wizerati.mod("factories").ResultViewFactory);

    self.wizerati.instance.sessionController = new wizerati.SessionController(self.wizerati.instance.loginPanel.Model, wizerati.mod("services").AuthenticationService);
    self.wizerati.instance.loginController = new wizerati.LoginController(self.wizerati.instance.loginPanel.Model, self.wizerati.instance.uiRoot.Model);
    self.wizerati.instance.homeController = new wizerati.HomeController(self.wizerati.instance.uiRoot.Model);
    self.wizerati.instance.advertisersController = new wizerati.AdvertisersController(self.wizerati.instance.uiRoot.Model);
    self.wizerati.instance.searchController = new wizerati.SearchController(self.wizerati.instance.uiRoot.Model, self.wizerati.instance.searchForm.Model, wizerati.mod("services").SearchService, self.wizerati.instance.resultList.Model);
    self.wizerati.instance.favoritesCube = new wizerati.FavoritesCubeView(new wizerati.FavoritesCubeModel(), wizerati.mod("factories").FavoriteViewFactory);
    self.wizerati.instance.selectedItemController = new wizerati.SelectedItemController(self.wizerati.instance.favoritesCube.Model, self.wizerati.instance.resultList.Model);
    self.wizerati.instance.favoritesController = new wizerati.FavoritesController(self.wizerati.instance.favoritesCube, self.wizerati.instance.resultList.Model);

    //self.wizerati.instance.itemsOfInterest = new wizerati.ItemsOfInterestView(new wizerati.ItemsOfInterestModel());

    //this should happen at the end here to ensure everything is initialized before routing begins
    self.wizerati.instance.router = new invertebrate.Router('Wizerati');
    self.wizerati.instance.registerRoutes();
});



