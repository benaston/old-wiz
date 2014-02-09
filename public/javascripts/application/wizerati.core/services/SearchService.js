//try forcing service types to communicate with the UI only via routing and local storage?
(function (app) {
    "use strict";

    function SearchService(croniclService) {

        if (!(this instanceof app.SearchService)) {
            return new app.SearchService(croniclService);
        }

        var that = this,
            _croniclService = null;

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

                done(results);
            }

            setTimeout(function(){$.ajax({
                url: _croniclService.getCroniclUri() + 'search',
                success: success, cache: false });}, 5000);
        };

        function init() {
            if (!croniclService) {
                throw "croniclService not supplied."
            }

            _croniclService = croniclService;

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
//                });