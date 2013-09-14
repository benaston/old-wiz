(function (app) {
    "use strict";

    function FavoritesCubeView(model,
                               favoriteViewFactory,
                               selectedCubeFaceModel,
                               selectedItemModel) {

        if (!(this instanceof app.FavoritesCubeView)) {
            return new app.FavoritesCubeView(model,
                                             favoriteViewFactory,
                                             selectedCubeFaceModel,
                                             selectedItemModel);
        }

        var that = this,
            _el = "#favorites-cube",
            _favoriteViewFactory = null,
            _selectedCubeFaceModel = null,
            _selectedItemModel = null,
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

        this.$el = null;
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

            $.each(that.Model.getFavorites(), function (index, faceFavorites) {
                var $face = that.$el.find(_faceEls[index]);
                $face.empty();
                $.each(faceFavorites, function(index, f){
                    _favoriteViewFactory.create(f, that.getCurrentFace(), function($v) {
                        $face.append($v)
                    });
                });
            });

            that.$el.attr('data-selected-face-id',
                _selectedCubeFaceModel.getSelectedCubeFaceId());

            options.done();
        };

        this.onDomReady = function(){
            that.$el = $(_el);
            that.render();
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            if (!favoriteViewFactory) {
                throw "favoriteViewFactory not supplied";
            }

            if (!selectedCubeFaceModel) {
                throw "selectedCubeFaceModel not supplied";
            }

            if (!selectedItemModel) {
                throw "selectedItemModel not supplied";
            }

            that.Model = model;
            _favoriteViewFactory = favoriteViewFactory;
            _selectedCubeFaceModel = selectedCubeFaceModel;
            _selectedItemModel = selectedItemModel;

            $.subscribe(that.Model.updateEventUri, that.render);
            $.subscribe(_selectedCubeFaceModel.updateEventUri, that.render);
            $.subscribe(_selectedItemModel.updateEventUri, that.render);

            return that;
        }

        return init();
    }

    app.FavoritesCubeView = FavoritesCubeView;
    invertebrate.View.isExtendedBy(app.FavoritesCubeView);
}(wizerati));