(function (app) {
    "use strict";

    function WizeratiClientRequestFactory() {

        if (!(this instanceof app.WizeratiClientRequestFactory)) {
            return new app.WizeratiClientRequestFactory();
        }

        var that = this,
            _config = null;

        this.createForGet = function (entity) {
            if(!entity) {
                throw "entity not supplied."
            }

            return { uri: "/foo", method: "PUT", data: "bar" };
        };

        function init() {

            return that;
        }

        return init();
    }

    app.WizeratiClientRequestFactory = WizeratiClientRequestFactory;

}(wizerati));
