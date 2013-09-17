(function (app) {
    "use strict";

    function ResultListModel() {
        if (!(this instanceof app.ResultListModel)) {
            return new app.ResultListModel();
        }

        var that = this,
            _results = []; //note these will be GUIDs - use the ItemCache for the actual objects

        this.updateEventUri = "update://ResultListModel/";

        this.getResults = function () {

            return _results;
        };

        this.setResults = function (value) {

            _results = value;

            $.publish(that.updateEventUri);
        };

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