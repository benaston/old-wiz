(function (app) {
    "use strict";

    function postRenderScript ($, $el) {

        console.log(app);
    }

    return { postRenderScript: postRenderScript };

}(wizerati));
