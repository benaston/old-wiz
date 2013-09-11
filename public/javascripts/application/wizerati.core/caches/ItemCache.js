(function (app) {
    "use strict";

    function ItemCache() {

        if (!(this instanceof app.ItemCache)) {
            return new app.ItemCache();
        }

        var that = this;

        this.items = {};

        //note: if the item already exists then
        // any additional metadata on the object
        // is retained (e.g. whether it is
        // currently selected)
        this.insert = function(items){
            if(!items){
                throw "items not supplied.";
            }

            _.each(items, function(i){
                that.items[i.id] = _.extend({}, that.items[i.id], i);
            });
        };

        this.exists = function(key){
            if(!key){
                throw "key not supplied.";
            }

            return !!(that.items[key]);
        };

        function init() {

            return that;
        }

        return init();
    }

    app.ItemCache = ItemCache;

}(wizerati));