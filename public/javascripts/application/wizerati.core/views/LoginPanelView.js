(function (app) {
    "use strict";

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

        this.$el =
        this.$cancelButton =
        this.$successButton =
        this.$username =
        this.$password =
        this.Model = null;

        this.render = function () {
            if(that.Model.getIsVisible()) {
                that.$el.removeClass('hide');
            }

            if (that.Model.getIsLoginFailedMessageVisible()) {
                that.$el.addClass('login-error');
            }
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
                if (e.keyCode === 27 && app.mod("views").uiRootView.Model.getUIMode() === _uiModeEnum.LogIn) {
                    cancel();
                }
            });
        };

        function cancel() {
            app.instance.router.route('/');
        }

        this.onDomReady = function(){
            that.$el = $(_el);
            that.$cancelButton = that.$el.find(_cancelButtonEl);
            that.$password = that.$el.find(_passwordEl);
            that.$username = that.$el.find(_usernameEl);
            that.$successButton = that.$el.find(_successButtonEl);
            that.bindEvents();
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
    }

    app.LoginPanelView = LoginPanelView;
    invertebrate.View.isExtendedBy(app.LoginPanelView);

}(wizerati));
