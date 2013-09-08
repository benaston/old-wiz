(function (app) {
    "use strict";

    function FavoritesCubeView(model, favoriteViewFactory) {

        if (!(this instanceof app.FavoritesCubeView)) {
            return new app.FavoritesCubeView(model, favoriteViewFactory);
        }

        var that = this,
            _el = "#favorites-cube",
            _favoriteViewFactory = null,
            _labelEls = [
                "label[for=f-t]",       //top
                "label[for=f-l]",       //left
                "label[for=f-f]",       //front
                "label[for=f-r]",       //right
                "label[for=f-bottom]",  //bottom
                "label[for=f-back]"     //back
                 ],
            _faceEls = [
                ".top",
                ".left",
                ".front",
                ".right",
                ".bottom",
                ".back"
                 ];

        this.$el = $(_el);
        this.Model = null;

        this.getCurrentFace = function () {
            return that.$el.find('input[type=radio]:checked').index() + '';
        };

        this.render = function (options) {
            var defaults = { done: function () {} };
            options = _.extend({}, defaults, options);

            if(_.flatten(that.Model.getFavorites(), true).length == 0){
                that.$el.addClass('hide');
                return;
            } else{
                that.$el.removeClass('hide');
            }

            $.each(that.Model.getFavorites(), function (index, face) {
                var $face = that.$el.find(_faceEls[index]);
                $face.empty();
                $.each(face, function(index, f){
                    $face.append(_favoriteViewFactory.create(f).$el)
                });
            });

            options.done();
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            if (!favoriteViewFactory) {
                throw "favoriteViewFactory not supplied";
            }

            that.Model = model;
            _favoriteViewFactory = favoriteViewFactory;

            that.render();

            $.subscribe(that.Model.updateEventUri, that.render);

            return that;
        }

        return init();
    }

    app.FavoritesCubeView = FavoritesCubeView;
    invertebrate.View.isExtendedBy(app.FavoritesCubeView);
}(wizerati));