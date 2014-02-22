(function (app, $, invertebrate) {
  'use strict';

  function SearchPanelView(model) {

    if (!(this instanceof app.SearchPanelView)) {
      return new app.SearchPanelView(model);
    }

    var that = this,
        _el = '#search-panel',
        _searchPanelModeEnum = app.mod('enum').SearchPanelMode;

    this.$el = null;
    this.Model = null;

    this.render = function (e, options) {
      options = options || { done: that.postRender };

      that.$el.attr('data-mode', that.Model.getMode());
      var oppositeMode = that.Model.getMode() === _searchPanelModeEnum.Default ? _searchPanelModeEnum.Minimized : _searchPanelModeEnum.Default;
      that.$el.find('.handle').attr('href', '/searchpanelmode/update?mode=' + oppositeMode);
    };

    this.postRender = function () {
    };

    this.bindEvents = function () {
    };

    this.onDomReady = function () {
      that.$el = $(_el);
    };

    function init() {
      if (!model) {
        throw 'model not supplied';
      }

      that.Model = model;
      $.subscribe(that.Model.updateEventUri, that.render);
      that.bindEvents();
      return that;
    }

    return init();
  }

  app.SearchPanelView = SearchPanelView;
  invertebrate.View.isExtendedBy(app.SearchPanelView);

}(wizerati, $, invertebrate));
