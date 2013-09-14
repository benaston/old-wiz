(function (app) {
    "use strict";

    function ItemsOfInterestController(itemsOfInterestModel) {

        if (!(this instanceof app.ItemsOfInterestController)) {
            return new app.ItemsOfInterestController(itemsOfInterestModel);
        }

        var that = this,
            _itemsOfInterestModel = null;

        this.create = function (dto) {
            if(!dto) { throw "dto not supplied." }

            if(_.find(_itemsOfInterestModel.getItemsOfInterest(), function(id){ return id === dto.id; })) {
                return;
            }

            _itemsOfInterestModel.addItemOfInterest(dto.id);
        };

        //todo: result list items should be object literals like {id:'foo'}
        this.destroy = function (dto) {

            _itemsOfInterestModel.removeItemOfInterest(dto.id);
        };

        function init() {
            if (!itemsOfInterestModel) {
                throw "itemsOfInterestModel not supplied.";
            }

            _itemsOfInterestModel = itemsOfInterestModel;

            return that;
        }

        return init();
    }

    app.ItemsOfInterestController = ItemsOfInterestController;
}(wizerati));
