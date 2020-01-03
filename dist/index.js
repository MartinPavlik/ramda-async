"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeAsync = exports.pipeAsync = void 0;

var pipeAsync = function pipeAsync() {
  var fns = Array.prototype.slice.call(arguments, 0);
  return function composed(initial) {
    return fns.reduce(function (promise, fn) {
      return promise.then(fn);
    }, Promise.resolve(initial));
  };
};

exports.pipeAsync = pipeAsync;

var composeAsync = function composeAsync() {
  var fns = Array.prototype.slice.call(arguments, 0).reverse();
  return function composed(initial) {
    return fns.reduce(function (promise, fn) {
      return promise.then(fn);
    }, Promise.resolve(initial));
  };
};

exports.composeAsync = composeAsync;