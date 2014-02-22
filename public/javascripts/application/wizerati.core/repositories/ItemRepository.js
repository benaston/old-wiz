(function (app, $) {
  'use strict';

  function ItemRepository(itemCache, croniclService) {

    if (!(this instanceof app.ItemRepository)) {
      return new app.ItemRepository(itemCache,
          croniclService);
    }

    var that = this,
        _itemCache = null,
        _croniclService = null;

    this.getById = function (id, done) {
      var cachedItem = _itemCache.items[id];
      if (cachedItem) {
        done(cachedItem);
        return;
      }

      function success(data) {
        if (!data) {
          throw 'data not supplied';
        }

        var result = $.parseJSON(data);
        _itemCache.insert([result]);

        done(result);
      }

      setTimeout(function () {
        $.ajax({ url: _croniclService.getCroniclUri() + 'items/' + id,
          success: success,
          cache: false });
      }, 2000);
    };

    function init() {
      if (!itemCache) {
        throw 'itemCache not supplied.';
      }

      if (!croniclService) {
        throw 'croniclService not supplied.';
      }

      _itemCache = itemCache;
      _croniclService = croniclService;

      return that;
    }

    return init();
  }

  app.ItemRepository = ItemRepository;

}(wizerati, $));
