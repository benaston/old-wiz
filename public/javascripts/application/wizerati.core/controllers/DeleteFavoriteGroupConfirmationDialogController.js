(function (app) {
    "use strict";

    function DeleteFavoriteGroupConfirmationDialogController(deleteFavoriteGroupConfirmationDialogModel, uiRootModel) {

        if (!(this instanceof app.DeleteFavoriteGroupConfirmationDialogController)) {
            return new app.DeleteFavoriteGroupConfirmationDialogController(deleteFavoriteGroupConfirmationDialogModel, uiRootModel);
        }

        var that = this,
            _deleteFavoriteGroupConfirmationDialogModel = null,
            _uiRootModel = null,
            _modalEnum = wizerati.mod("enum").Modal;

        this.index = function (dto) {
            if(dto.__isInvertebrateExternal__){
                app.instance.router.redirect('/');
                return;
            }

            _deleteFavoriteGroupConfirmationDialogModel.setFavoriteGroupId(dto.id);

            if(_uiRootModel.getModal() != _modalEnum.DeleteFavoriteGroupConfirmationDialog) {
                _uiRootModel.setModal(_modalEnum.DeleteFavoriteGroupConfirmationDialog);
            }
        };

        this.destroy = function (dto) {
            try {
                _uiRootModel.setModal(null);
            } catch (err) {
                console.log("error: DeleteFavoriteGroupConfirmationDialogController.destroy. " + err);
            }
        };

        function init() {
            if (!deleteFavoriteGroupConfirmationDialogModel) {
                throw "deleteFavoriteGroupConfirmationDialogModel not supplied.";
            }

            if (!uiRootModel) {
                throw "uiRootModel not supplied.";
            }

            _uiRootModel = uiRootModel;
            _deleteFavoriteGroupConfirmationDialogModel = deleteFavoriteGroupConfirmationDialogModel;

            return that;
        }

        return init();
    }

    app.DeleteFavoriteGroupConfirmationDialogController = DeleteFavoriteGroupConfirmationDialogController;

}(wizerati));
