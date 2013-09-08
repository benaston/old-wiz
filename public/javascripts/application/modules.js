"use strict";

//order of declaration matters here.
(function (mod) {

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

    mod.Config = new wizerati.Config(invertebrate.env.dev);

}(wizerati.mod("config")));

(function (mod) {

    mod.AuthenticationService = new wizerati.AuthenticationService();
    mod.CookieService = new wizerati.CookieService();
    mod.LogInService = new wizerati.LogInService(mod.CookieService);
    mod.CroniclService = new wizerati.CroniclService(mod.LogInService, wizerati.mod("config").Config); //pass in login service instead?
    mod.SearchService = new wizerati.SearchService(mod.CroniclService);

}(wizerati.mod("services")));

(function (mod) {

    mod.ResultViewFactory = new wizerati.ResultViewFactory(wizerati.mod("services").LogInService);
    mod.FavoriteViewFactory = new wizerati.FavoriteViewFactory(wizerati.mod("services").LogInService);

}(wizerati.mod("factories")));

(function (mod) {

    mod.TemplateServerSvc = new invertebrate.TemplateServerSvc(wizerati.mod("config").Config, wizerati.mod("services").CroniclService.getCroniclUri);

}(wizerati.mod("templates")));

