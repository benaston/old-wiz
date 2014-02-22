(function (invertebrate) {
  'use strict';

  var util = {};

  //`decoratingFunction` should accept arguments `context, done(err, result)`.
  util.decorate = function (objectToDecorate, decoratingFunction) {

    var decoratedObject = Object.create(objectToDecorate);

    getAllMethodNames(objectToDecorate).forEach(function (methodName) {
      decoratedObject[methodName] = function decoratorFunction() {
        var args = [].slice.call(arguments, 0);
        var context = { ctor: objectToDecorate.constructor.name,
          pType: objectToDecorate.prototype,
          objectType: typeof (objectToDecorate),
          methodName: methodName,
          timestamp: new Date().toISOString(),
          args: args.map(function (a) {
            if (typeof a === 'object') {
              return JSON.stringify(a);
            }

            return a;
          }) };

        return decoratingFunction(context, function done(err) {
          if (err) {
            throw err;
          }

          return objectToDecorate[methodName].apply(objectToDecorate, args);
        });
      };
    });

    return decoratedObject;
  };

  function getAllMethodNames(object) {
    return Object.getOwnPropertyNames(object).filter(function (property) {
      return typeof object[property] === 'function';
    });
  }


  invertebrate.util = util;

}(invertebrate));
