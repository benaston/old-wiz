"use strict";

(function (app) {
    function SelectedResultModel() {

        if (!(this instanceof app.SelectedResultModel)) {
            return new app.SelectedResultModel();
        }

        var that = this,
            _selectedResultId = null;

        this.updateEventUri = "update://SelectedResultModel/";

        this.getSelectedResultId = function () {

            return _selectedResultId;
        }

        this.setSelectedResultId = function (value) {
            _selectedResultId = value;

            $.publish(that.updateEventUri);
        }

        function init() {

            return that;
        }

        return init();
    };

    app.SelectedResultModel = SelectedResultModel;

}(wizerati));

//wiz.mod("cronicl").CroniclSvc.getMyItemMetadata(function (metadata) {
//    $("#searchField").attr("placeholder", metadata.searchFieldPlaceholderValue);
//    $("#newItemLink").text("New " + metadata.itemNameAlternative);
//    $("#emptyMessageMyItems").text("My  " + metadata.itemNameAlternativePlural + " are shown here");
//    metadata.prefetchTemplates();
//    metadata.prefetchPostRenderActions();
//});
//wiz.mod("cronicl").CroniclSvc.getSearchItemMetadata(function (metadata) {
//    metadata.prefetchTemplates();
//    metadata.prefetchPostRenderActions();
//});
