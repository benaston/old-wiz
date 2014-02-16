(function (app) {
    "use strict";

    function SelectedItemController(selectedItemModel, searchPanelModel) {

        if (!(this instanceof app.SelectedItemController)) {
            return new app.SelectedItemController(selectedItemModel, searchPanelModel);
        }

        var that = this,
            _selectedItemModel = null,
            _searchPanelModel = null,
            _searchPanelModeEnum = wizerati.mod("enum").SearchPanelMode;

        this.update = function (dto) {
            try {
                if(!dto){
                    throw "dto not supplied";
                }

                if(dto.__isInvertebrateExternal__){
                    app.instance.router.redirect('/items/show?id=' + dto.id);
                    return;
                }

                _searchPanelModel.setMode(_searchPanelModeEnum.Minimized)
                _selectedItemModel.setSelectedItemId(dto.id);
            } catch (err) {
                console.log("error: SelectedItemController.update. " + err);
            }
        };

        function init() {
            if (!selectedItemModel) {
                throw "selectedItemModel not supplied.";
            }

            if (!searchPanelModel) {
                throw "searchPanelModel not supplied.";
            }

            _selectedItemModel = selectedItemModel;
            _searchPanelModel = searchPanelModel;

            return that;
        }

        return init();
    }

    app.SelectedItemController = SelectedItemController;

}(wizerati));
