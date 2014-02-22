//order of declaration matters here.
window.wizerati = {
  mod: function () {
    var mods = {};

    return function (name) {
      if (mods[name]) {

        return mods[name];
      }

      return mods[name] = {};
    };
  }()
};
