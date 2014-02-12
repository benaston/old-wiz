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

        this.$el1 =
        this.$cancelButton =
        this.$successButton =
        this.$username =
        this.$password =
        this.Model = null;

        this.render = function () {
            if(that.Model.getIsVisible()) {
                that.$el1.removeClass('hide');
            }

            if (that.Model.getIsLoginFailedMessageVisible()) {
                that.$el1.addClass('login-error');
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
                app.instance.router.route('/session/create', { $parentDomNode: that.$el1 });
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
            that.$el1 = $(_el);
            that.$cancelButton = that.$el1.find(_cancelButtonEl);
            that.$password = that.$el1.find(_passwordEl);
            that.$username = that.$el1.find(_usernameEl);
            that.$successButton = that.$el1.find(_successButtonEl);
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
