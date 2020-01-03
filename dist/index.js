"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapAllAsync = exports.composeAsync = exports.pipeAsync = void 0;

var _ramda = require("ramda");

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
var mapAllAsync = (0, _ramda.curry)(function mapAllAsync(transformer, collection) {
  return Promise.all((0, _ramda.map)(transformer, collection));
});
exports.mapAllAsync = mapAllAsync;