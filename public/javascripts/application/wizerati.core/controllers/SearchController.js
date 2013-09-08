(function (app) {
    "use strict";

    function SearchController(uiRootModel,
                              searchFormModel,
                              searchService,
                              resultListModel) {

        if (!(this instanceof app.SearchController)) {
            return new app.SearchController(uiRootModel,
                                            searchFormModel,
                                            searchService,
                                            resultListModel);
        }

        var that = this,
            _uiModeEnum = wizerati.mod("enum").UIMode,
            _uiRootModel = null,
            _searchFormModel = null,
            _searchService = null,
            _resultListModel = null;

        this.show = function (dto) {
            try {
                _uiRootModel.setUIMode(_uiModeEnum.Search);

                _searchService.runSearch(_searchFormModel.getKeywords(),
                    _searchFormModel.getLocation(),
                    _searchFormModel.getRate(),
                    function(results){
                        _itemCache.insert(results);
                        _resultListModel.setResults(_.map(results, function(r){ return r.id; }));
                    });
            } catch (err) {
                console.log("error: SearchController.show. " + err);
            }
        };

        function init() {
            if (!uiRootModel) {
                throw "uiRootModel not supplied.";
            }

            if (!searchFormModel) {
                throw "searchFormModel not supplied.";
            }

            if (!searchService) {
                throw "searchService not supplied.";
            }

            if (!resultListModel) {
                throw "resultListModel not supplied.";
            }

            _uiRootModel = uiRootModel;
            _searchFormModel = searchFormModel;
            _searchService = searchService;
            _resultListModel = resultListModel;

            return that;
        }

        return init();
    }

    app.SearchController = SearchController;

}(wizerati));
