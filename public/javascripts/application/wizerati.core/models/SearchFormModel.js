(function (app) {
    "use strict";

    function SearchFormModel() {

        if (!(this instanceof app.SearchFormModel)) {
            return new app.SearchFormModel();
        }

        var that = this,
            _keywords = null,
            _location = null,
            _isWaiting = 'false',
            _rate = null;

        this.updateEventUri = "update://SearchFormModel/";

        this.getKeywords = function () {
            return _keywords;
        };

        this.setKeywords = function (value, options) {
            options = options || { silent: false };

            _keywords = value;

            if (options && options.silent === true) {
                return;
            }

            $.publish(that.updateEventUri);
        };

        this.getLocation = function () {
            return _location;
        };

        this.getIsWaiting = function () {
            return _isWaiting;
        };

        this.setIsWaiting = function (value, options) {
            options = options || { silent: false };

            if (value === null || value === undefined) {
                throw "value not supplied."
            }

            if (value !== "true" && value !== "false") {
                throw "invalid argument (value)."
            }

            _isWaiting = value;

            if (options.silent !== true) {
                $.publish(that.updateEventUri);
            }
        };

        this.setLocation = function (value, options) {
            _location = value;

            if (options && options.silent === true) {
                return;
            }

            $.publish(that.updateEventUri);
        };

        this.getRate = function () {
            return _rate;
        };

        this.setRate = function (value, options) {
            _rate = value;

            if (options && options.silent === true) {
                return;
            }

            $.publish(that.updateEventUri);
        };

        function init() {
            return that;
        }

        return init();
    };

    app.SearchFormModel = SearchFormModel;
    invertebrate.Model.isExtendedBy(app.SearchFormModel);

}(wizerati));
