(function (app) {
    "use strict";

    function SearchController(uiRootModel, searchFormModel, searchService, resultListModel, guidFactory) {

        if (!(this instanceof app.SearchController)) {
            return new app.SearchController(uiRootModel,
                searchFormModel,
                searchService,
                resultListModel, guidFactory);
        }

        var that = this,
            _uiModeEnum = wizerati.mod("enum").UIMode,
            _uiRootModel = null,
            _searchFormModel = null,
            _searchService = null,
            _resultListModel = null,
            _guidFactory = null;

        this.show = function (dto) {
            try {
                if(dto.__isInvertebrateExternal__) {
                    _searchFormModel.setKeywords(dto.keywords, {silent:true});
                    _searchFormModel.setLocation(dto.location, {silent:true});
                    _searchFormModel.setRate(dto.r, {silent:true});
                }

                _uiRootModel.setUIMode(_uiModeEnum.Search);
                _searchFormModel.setIsWaiting("true");
                _searchService.runSearch(dto.keywords,
                    dto.location,
                    dto.r,
                    function (results) {
                        _resultListModel.setResults(_.map(results, function (r) {
                            return r.id;
                        }), _guidFactory.create());
                        _searchFormModel.setIsWaiting("false", {silent:true}); //silent to because we are taking special control over the rendering of the wait state.
                    });
            } catch (err) {
                console.log("error: SearchController.show. " + err);
            }
        };

        this.uriTransformShow = function (uri, dto) {
            return uri + '?keywords=' + encodeURIComponent(dto.keywords) + "&location=" + encodeURIComponent(dto.location) + "&r=" + encodeURIComponent(dto.r);
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

            if (!guidFactory) {
                throw "guidFactory not supplied.";
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

}(wizerati));


//throw "script downloaded to be assigned to an object in a known location and then subsequently invoked by the search controller for wait, success, fail, timeout";