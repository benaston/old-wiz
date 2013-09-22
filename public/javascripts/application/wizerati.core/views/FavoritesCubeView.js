(function (app) {
    "use strict";

    function FavoritesCubeView(model,
                               favoriteViewFactory,
                               selectedCubeFaceModel,
                               selectedItemModel,
                               hiddenItemsModel,
                               actionedItemsModel) {

        if (!(this instanceof app.FavoritesCubeView)) {
            return new app.FavoritesCubeView(model,
                                             favoriteViewFactory,
                                             selectedCubeFaceModel,
                                             selectedItemModel,
                                             hiddenItemsModel,
                                             actionedItemsModel);
        }

        var that = this,
            _el = "#favorites-cube",
            _favoriteViewFactory = null,
            _selectedCubeFaceModel = null,
            _selectedItemModel = null,
            _actionedItemsModel = null,
            _hiddenItemsModel = null,
            _labelEls = [ ".cube-face-labels li:nth-child(1)",   //top
                          ".cube-face-labels li:nth-child(2)",   //left
                          ".cube-face-labels li:nth-child(3)",   //front
                          ".cube-face-labels li:nth-child(4)",   //right
                          ".cube-face-labels li:nth-child(5)",   //bottom
                          ".cube-face-labels li:nth-child(6)" ], //back
            _faceEls = [".top", ".left", ".front", ".right", ".bottom", ".back" ];

        this.$el = null;
        this.Model = null;

        this.render = function () {
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
                    _favoriteViewFactory.create(f, _selectedCubeFaceModel.getSelectedCubeFaceId(), function($v) {
                        $face.append($v)
                    });
                });
            });

            that.$el.attr('data-selected-face-id',
                _selectedCubeFaceModel.getSelectedCubeFaceId());

            var faceLabels = that.Model.getFaceLabels();
            $.each(_labelEls, function(index, el){
                $(el).text(faceLabels[index]);
            });
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

            if (!hiddenItemsModel) {
                throw "hiddenItemsModel not supplied";
            }

            if (!actionedItemsModel) {
                throw "actionedItemsModel not supplied";
            }

            that.Model = model;
            _favoriteViewFactory = favoriteViewFactory;
            _selectedCubeFaceModel = selectedCubeFaceModel;
            _selectedItemModel = selectedItemModel;
            _hiddenItemsModel = hiddenItemsModel;
            _actionedItemsModel = actionedItemsModel;

            $.subscribe(that.Model.updateEventUri, that.render);
            $.subscribe(_selectedCubeFaceModel.updateEventUri, that.render);
            $.subscribe(_selectedItemModel.updateEventUri, that.render);
            $.subscribe(_hiddenItemsModel.updateEventUri, that.render);
            $.subscribe(_actionedItemsModel.updateEventUri, that.render);

            return that;
        }

        return init();
    }

    app.FavoritesCubeView = FavoritesCubeView;
    invertebrate.View.isExtendedBy(app.FavoritesCubeView);

}(wizerati));