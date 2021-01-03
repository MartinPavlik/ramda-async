"use strict";
exports.__esModule = true;
exports.traversePromises = exports.composeAsync = exports.pipeAsync = void 0;
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
