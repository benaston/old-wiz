(function (invertebrate) {
//    "use strict";

    var util = {};

    //`decoratingFunction` should accept arguments `context, done(err, result)`. `context` looks like this: `{methodName: ''}`.
    util.decorate = function (objectToDecorate, decoratingFunction) {

        var decoratedObject = Object.create(objectToDecorate);

        getAllMethodNames(objectToDecorate).forEach(function (methodName) {
            decoratedObject[methodName] = function decoratorFunction () {
                var args = [].slice.call(arguments, 0);
                var context = { callingFunction: getFunctionName(decoratorFunction.caller),
                                ctor: objectToDecorate.constructor.name,
                                ptype: objectToDecorate.prototype,
                                objectType: typeof (objectToDecorate),
                                methodName: methodName,
                                timestamp: new Date().toISOString(),
                                args: args.map(function(a) {
                                    if(typeof a === 'object') {
                                        return JSON.stringify(a);
                                    }

                                    return a;
                                }) };

                return decoratingFunction(context, function done(err) {
                    if(err) {
                        throw err;
                    }

                    return objectToDecorate[methodName].apply(objectToDecorate, args);
                });
            }
        });

        return decoratedObject;
    };

    function getFunctionName(fun) {
        fun = fun || '';
        var ret = fun.toString();
        ret = ret.substr('function '.length);
        ret = ret.substr(0, ret.indexOf('('));
        return ret;
    }

    function getAllMethodNames(object) {
        return Object.getOwnPropertyNames(object).filter(function (property) {
            return typeof object[property] == 'function';
        });
    }


    invertebrate.util = util;

}(invertebrate));
