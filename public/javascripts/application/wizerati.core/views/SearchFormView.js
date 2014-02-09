(function (app) {
    "use strict";

    function SearchFormView(model) {

        if (!(this instanceof app.SearchFormView)) {
            return new app.SearchFormView(model);
        }

        var that = this,
            _el = "#search-form",
            _templateName = "search-form.html",
            _postRenderScriptName = "search-form.js",
            _waitStateIsBeingMonitored = false;; //is the periodic check for whether we are waiting running?

        this.$el = null;
        this.Model = null;

        this.render = function () {
            var options = { done: that.bindEvents, postRenderScriptName: null };

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

            if (!_waitStateIsBeingMonitored) {
                monitorWaitState();
            }
        };

        this.postRender = function () {
        };


        //We take control here in the view of changes to the view when the wait state changes (i.e. we do not leave this to the usual template rendering process).
        //We do this because we want to control the precise timings of the checks to correspond to individual revolutions of the wait animation.
        //This enables us to always stop the animation at its natural end, rather than stopping the animation half way through, which looks jarring.
        //If we are waiting, then re-set the data-is-waiting state to false and wait a tick to enable the DOM to register the change in data attribute (so we can re-trigger the animation).
        //On the next tick, we trigger the animation and wait the precise duration of the animation.
        //We then (taking our time, because we are using setTimeout and not setInterval) see if we are still waiting, if we are, we repeat the process.
        //If we are not waiting then we set the data-attribute to stop the animation and set a flag variable to indicate we are no-longer monitoring the model for changes to the wait state.
        //Re-setting this flag means that when the search form is re-rendered, we know to kick off the wait state monitoring process again.
        function monitorWaitState() {
            _waitStateIsBeingMonitored = true;

            if (that.Model.getIsWaiting() === "true") {
                that.$el.find('.btn-primary').attr('data-is-waiting', "false");
                setTimeout(function () {
                    that.$el.find('.btn-primary').attr('data-is-waiting', "true"); //trigger animation
                    setTimeout(monitorWaitState, 2500); //wait for animation to complete before checking
                }, 0);
            } else {
                that.$el.find('.btn-primary').attr('data-is-waiting', "false");
                _waitStateIsBeingMonitored = false;
            }
        }

        this.onDomReady = function () {
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
