(function (app) {
    "use strict";

    function HiddenItemsModel() {

        if (!(this instanceof app.HiddenItemsModel)) {
            return new app.HiddenItemsModel();
        }

        var that = this,
            _hiddenItems = {};

        this.updateEventUri = "update://HiddenItemsModel/";

        this.isHidden = function (id) {

            return !!_hiddenItems[id];
        }

        this.addHiddenItemId = function (value) {
            _hiddenItems[value] = value;

            $.publish(that.updateEventUri);
        }

        this.removeHiddenItemId = function (value) {
            delete _hiddenItems[value];

            $.publish(that.updateEventUri);
        }

        function init() {

            return that;
        }

        return init();
    };

    app.HiddenItemsModel = HiddenItemsModel;
    invertebrate.Model.isExtendedBy(app.HiddenItemsModel);

}(wizerati));