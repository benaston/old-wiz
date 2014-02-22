(function (app) {
  'use strict';

  function WizeratiClient(requestFactory, restClientFetch, restClientStore) {

    if (!(this instanceof app.WizeratiClient)) {
      return new app.WizeratiClient(requestFactory,
          restClientFetch,
          restClientStore);
    }

    var that = this,
        _requestFactory = null,
        _restClientFetch = null,
        _restClientStore = null;

    this.get = function (entity, options) {
      if (!entity) {
        throw 'entity not supplied.';
      }

      if (!options) {
        throw 'options not supplied.';
      }

      if (!options.success) {
        throw 'options.success not supplied.';
      }

      if (!options.fail) {
        throw 'options.fail not supplied.';
      }

      var request = _requestFactory.createForGet(entity);

      _restClientFetch.Execute(request, options);
    };

    this.put = function (entity, options) {
      if (!entity) {
        throw 'entity not supplied.';
      }

      if (!options) {
        throw 'options not supplied.';
      }

      if (!options.success) {
        throw 'options.success not supplied.';
      }

      if (!options.fail) {
        throw 'options.fail not supplied.';
      }

      var request = _requestFactory.createForPut(entity);

      _restClientStore.Execute(request, options);
    };

    this.post = function (entity, options) {
      if (!entity) {
        throw 'entity not supplied.';
      }

      if (!options) {
        throw 'options not supplied.';
      }

      if (!options.success) {
        throw 'options.success not supplied.';
      }

      if (!options.fail) {
        throw 'options.fail not supplied.';
      }

      var request = _requestFactory.createForPost(entity);

      _restClientStore.Execute(request, options);
    };

    function init() {
      if (!requestFactory) {
        throw 'requestFactory not supplied';
      }

      if (!restClientFetch) {
        throw 'restClientFetch not supplied';
      }

      if (!restClientStore) {
        throw 'restClientStore not supplied';
      }

      _requestFactory = requestFactory;
      _restClientFetch = restClientFetch;
      _restClientStore = restClientStore;

      return that;
    }

    return init();
  }

  app.WizeratiClient = WizeratiClient;

}(wizerati));
