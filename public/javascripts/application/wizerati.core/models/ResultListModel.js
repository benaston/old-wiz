"use strict";

(function (app) {
    function ResultListModel() {
        if (!(this instanceof app.ResultListModel)) {
            return new app.ResultListModel();
        }

        var that = this,
            _results = [];

        this.updateEventUri = "update://ResultListModel/";
        this.deleteEventUri = "delete://ResultListModel/";

        this.setResults = function (results) {

            _results = results;

            $.publish(that.updateEventUri);
        };

        this.getResults = function () {

            return _results;
        };

        this.getResult = function (id) {
            if (!id) {
                throw "id not supplied";
            }

            return _results = _.filter(_results, function (result) {
                result.id === id;
            })[0];
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

        this.addResult = function (result) {
            if (!result) {
                throw "result not supplied";
            }

            _results.unshift(results);

            $.publish(that.updateEventUri);
        };

        this.removeResult = function (id, options) {
            if (!id) {
                throw "id not supplied";
            }

            _results = _.reject(_results, function (result) {
                result.id === id;
            });

            $.publish(that.deleteEventUri);
        };

        function init() {

            return that;
        }

        return init();
    }

    app.ResultListModel = ResultListModel;
    invertebrate.Model.isExtendedBy(app.ResultListModel);
}(wizerati));