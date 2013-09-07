(function (invertebrate) {
    "use strict";

    function Router(homeRoute) {

        function extractQueryString(queryString) {
            if (queryString == "") return {};
            var b = {};
            for (var i = 0; i < queryString.length; ++i) {
                var p = queryString[i].split('=');
                if (p.length != 2) continue;
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
            return b;
        }


        var that = this,
            _homeRoute = '/';

        this.routes = {};

        this.registerRoute = function (uri, action) {
            that.routes[uri] = action;
        };

        this.route = function (uri, dto) {
            if (uri === _homeRoute) {
                uri = '/';
            }
            history.pushState(null, null, uri);

            var splitUri = uri.split('?');
            var uriWithoutQueryString = splitUri[0];
            var queryString = splitUri[1];

            var escapedRoute = uriWithoutQueryString.replace(/\//g, '\\/');
            var pattern = new RegExp('^' + escapedRoute, 'g');

            var firstMatchingRouteUri = _.filter(Object.keys(that.routes), function (key) {
                return pattern.exec(key);
            })[0];

            if (!firstMatchingRouteUri) {
                throw "no matching route " + uriWithoutQueryString;
            }

            if (!queryString || dto) {
                that.routes[firstMatchingRouteUri](dto);
                return;
            }
            var queryStringArguments = queryString.split('&');
            that.routes[firstMatchingRouteUri](extractQueryString(queryStringArguments));
        };

        function routeHyperlink(evt) {
            var href = $(this).attr('href');
            var protocol = 'http//';

            if (href.slice(protocol.length) !== protocol) {
                evt.preventDefault();
                that.route(href);
            }
        }

        function routeFormSubmission(evt) {
            var action = $(this).attr('action');
            var protocol = 'http//';

            if (action.slice(protocol.length) !== protocol) {
                evt.preventDefault();
                that.route(action);
            }
        }

        function init() {
            _homeRoute = homeRoute;

            window.addEventListener("popstate", function (e) {
                that.route(location.pathname);
            });

            $(document).on('click', 'a:not([data-bypass])', routeHyperlink);
            $(document).on('submit', 'form', routeFormSubmission);
        }

        init();
    }

    invertebrate.Router = Router;
}(invertebrate));
