(function (app) {
    "use strict";

    function SearchFormView(model) {

        if (!(this instanceof app.SearchFormView)) {
            return new app.SearchFormView(model);
        }

        var that = this,
            _el = "#search-form",
            _templateName = "search-form.html";

        this.$el = null;
        this.Model = null;

        this.render = function () {
//            throw 'see old wizerati implementation for the expected uri here, then complete the button wireup on the search form';
            var options = { done: that.bindEvents, postRenderActionScriptUri: '' };

            return app.instance.renderTemplate(that.$el,
                _templateName, that.Model, options);
        };

        this.bindEvents = function () {

            var $keywords = that.$el.find("#keywords");
            $keywords.on('change', function () {
                that.Model.setKeywords($keywords.val(), { silent: true });
            });

            var $location = that.$el.find("#location");
            $location.on('change', function () {
                that.Model.setLocation($location.val(), { silent: true });
            });

            var $rate = that.$el.find("input[name='r']");
            $rate.on('change', function () {
                that.Model.setRate(that.$el.find("input[name='r']:checked").val(), { silent: true });
            });

            that.$el.attr('data-is-waiting', that.Model.getIsWaiting());
            //todo: this to be connected using the post render code
            //downloaded from the template server.
        };

        this.onDomReady = function(){
            that.$el = $(_el);
            that.render();
        };

        function init() {
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            $.subscribe(that.Model.updateEventUri, that.render);

            return that;
        }

        return init();
    };

    app.SearchFormView = SearchFormView;
    invertebrate.View.isExtendedBy(app.SearchFormView);

}(wizerati));
