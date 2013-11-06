(function (app) {
    "use strict";

    function App(env) {
        if (!(this instanceof app.App)) {
            return new app.App(env);
        }

        var that = this;

        this.registerRoutes = function () {

            that.router.registerRoute('/', function () {
                app.mod("controllers").homeController.index();
            });

            that.router.registerRoute('/session/create', function (model) {
                app.mod("controllers").sessionController.create(model);
            });

            that.router.registerRoute('/login', function () {
                app.mod("controllers").loginController.index();
            });

            that.router.registerRoute('/advertisers', function () {
                app.mod("controllers").advertisersController.index();
            });

            that.router.registerRoute('/search', function (dto) {
                app.mod("controllers").searchController.show(dto);
            }, { title: 'Wizerati Search' });

            that.router.registerRoute('/selecteditem/update', function (dto) {
                app.mod("controllers").selectedItemController.update(dto);
            }, { silent: true });

            that.router.registerRoute('/favorites/create', function (dto) {
                app.mod("controllers").favoritesController.create(dto);
            }, { silent: true });

            that.router.registerRoute('/favorites/destroy', function (dto) {
                app.mod("controllers").favoritesController.destroy(dto);
            }, { silent: true });

            that.router.registerRoute('/selectedcubeface/update', function (dto) {
                app.mod("controllers").selectedCubeFaceController.update(dto);
            }, { silent: true });

            that.router.registerRoute('/itemsofinterest/create', function (dto) {
                app.mod("controllers").itemsOfInterestController.create(dto);
            }, { silent: true });

            that.router.registerRoute('/itemsofinterest/destroy', function (dto) {
                app.mod("controllers").itemsOfInterestController.destroy(dto);
            }, { silent: true });

            that.router.registerRoute('/hiddenitems/create', function (dto) {
                app.mod("controllers").hiddenItemsController.create(dto);
            }, { silent: true });

            that.router.registerRoute('/hiddenitems/destroy', function (dto) {
                app.mod("controllers").hiddenItemsController.destroy(dto);
            }, { silent: true });

            that.router.registerRoute('/actioneditems/create', function (dto) {
                app.mod("controllers").actionedItemsController.create(dto);
            }, { silent: true });

            that.router.registerRoute('/actioneditems/destroy', function (dto) {
                app.mod("controllers").actionedItemsController.destroy(dto);
            }, { silent: true });

            that.router.registerRoute('/purchasepanel', function (dto) {
                app.mod("controllers").purchasePanelController.index(dto);
            });

            that.router.registerRoute('/purchasepanel/destroy', function (dto) {
                app.mod("controllers").purchasePanelController.destroy(dto);
            });

            that.router.registerRoute('/accountactivationpanel', function (dto) {
                app.mod("controllers").accountActivationPanelController.index(dto);
            });

            that.router.registerRoute('/accountactivationpanel/destroy', function (dto) {
                app.mod("controllers").accountActivationPanelController.destroy(dto);
            });

            that.router.registerRoute('/accountactivation/create', function (dto) {
                app.mod("controllers").accountActivationController.create(dto);
            });

            that.router.registerRoute('/purchasepanelaccounts/create', function (dto) {
                app.mod("controllers").purchasePanelAccountsController.create(dto);
            });
        };

        function init() {
            if (!env) {
                throw "env not supplied";
            }

            that.env = env;

            return _.extend(that, new invertebrate.App(app.mod("templates").TemplateUriHelper));
        }

        return init();
    }

    app.App = App;
}(wizerati));