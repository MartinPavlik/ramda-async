"use strict";
exports.__esModule = true;
exports.mapAllAsync = exports.traversePromises = exports.composeAsync = exports.pipeAsync = void 0;
var ramda_1 = require("ramda");
function pipeAsync() {
    var fns = Array.prototype.slice.call(arguments, 0);
    return function composed(initial) {
        return fns.reduce(function (promise, fn) {
            return promise.then(fn);
        }, Promise.resolve(initial));
    };
}
exports.pipeAsync = pipeAsync;
;
/**
 * Wraps array of promises with Promise.all
 * @since 1.0.0
 */
var traversePromises = function (arrayOfPromises) {
    return Promise.all(arrayOfPromises);
};
exports.traversePromises = traversePromises;
/**
 * @deprecated
 */
function composeAsync() {
    var fns = Array.prototype.slice.call(arguments, 0).reverse();
    return function composed(initial) {
        return fns.reduce(function (promise, fn) {
            return promise.then(fn);
        }, Promise.resolve(initial));
    };
}
exports.composeAsync = composeAsync;
;
/**
 * @deprecated - use traversePromises instead
 */
var mapAllAsync = ramda_1.curry(function mapAllAsync_(transformer, collection) {
    return Promise.all(ramda_1.map(transformer, collection));
});
exports.mapAllAsync = mapAllAsync;
