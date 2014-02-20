(function (app) {
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

}(wizerati));