"use strict";

(function (app) {

    function LoginPanelView(model) {

        if (!(this instanceof app.LoginPanelView)) {
            return new app.LoginPanelView(model);
        }

        var that = this,
            _el = "#log-in-panel",
            _cancelButtonEl = ".btn-cancel",
            _successButtonEl = ".log-in .btn-success",
            _usernameEl = ".username",
            _passwordEl = ".password",
            _uiModeEnum = wizerati.mod("enum").UIMode;

        this.$el = $(_el);
        this.$cancelButton = $(_el).find(_cancelButtonEl);
        this.$successButton = $(_el).find(_successButtonEl);
        this.$username = $(_el).find(_usernameEl);
        this.$password = $(_el).find(_passwordEl);
        this.Model = null;

        this.render = function (e, options) {
            options = options || { done: that.postRender };

            if (that.Model.getIsLoginFailedMessageVisible()) {
                that.$el.addClass('login-error');
            }
        };

        this.postRender = function () {
        };

        this.bindEvents = function () {
            that.$username.on('change', function () {
                that.Model.setUsername(that.$username.val());
            });

            that.$password.on('change', function () {
                that.Model.setPassword(that.$password.val());
            });

            that.$cancelButton.on('click', function () {
                cancel();
            });

            that.$successButton.on('click', function () {
                app.instance.router.route('/session/create', { $parentDomNode: that.$el });
            });

            $(document).keyup(function (e) {
                if (e.keyCode === 27 && app.instance.uiRoot.Model.getUIMode() === _uiModeEnum.LogIn) {
                    cancel();
                }
            });
        };

        function cancel() {
            app.instance.router.route('/');
        }

        function init() {
            that.bindEvents();
            if (!model) {
                throw "model not supplied";
            }

            that.Model = model;

            $.subscribe(that.Model.updateEventUri, that.render);

            return that;
        }

        return init();
    };

    app.LoginPanelView = LoginPanelView;
    invertebrate.View.isExtendedBy(app.LoginPanelView);
}(wizerati));
