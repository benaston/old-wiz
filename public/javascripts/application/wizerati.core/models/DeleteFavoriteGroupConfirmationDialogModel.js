(function (app) {
    "use strict";

    function DeleteFavoriteGroupConfirmationDialogModel() {

        if (!(this instanceof app.DeleteFavoriteGroupConfirmationDialogModel)) {
            return new app.DeleteFavoriteGroupConfirmationDialogModel();
        }

        var that = this,
            _favoriteGroupId = null,
            _isWaiting = '', //should identify the dom element to indicate waiting
            _notifications = []; //eg. [{ type: "formField", id: "foo" }]

        this.updateEventUri = "update://DeleteFavoriteGroupConfirmationDialogModel/";

        this.getFavoriteGroupId = function () {
            return _favoriteGroupId;
        }

        this.setFavoriteGroupId = function (value, options) {
            options = options || { silent: false }

            if (!value) {
                throw "value not supplied."
            }

            _favoriteGroupId = value;

            if (!options.silent) {
                $.publish(that.updateEventUri);
            }
        };

        this.getIsWaiting = function () {
            return _isWaiting;
        }

        this.setIsWaiting = function (value, options) {
            options = options || { silent: false }

            if (!value) {
                throw "value not supplied."
            }

            _isWaiting = value;

            if (!options.silent) {
                $.publish(that.updateEventUri);
            }
        };

        function init() {
            return that;
        }

        return init();
    }

    app.DeleteFavoriteGroupConfirmationDialogModel = DeleteFavoriteGroupConfirmationDialogModel;
    invertebrate.Model.isExtendedBy(app.DeleteFavoriteGroupConfirmationDialogModel);

}(wizerati));
