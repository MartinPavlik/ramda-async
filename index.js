export const pipeAsync = function pipeAsync() {
  const fns = Array.prototype.slice.call(arguments, 0);

  return function composed(initial) {
    return fns.reduce((promise, fn) => {
      return promise.then(fn);
    }, Promise.resolve(initial));
  };
};

export const composeAsync = function composeAsync() {
  const fns = Array.prototype.slice.call(arguments, 0).reverse();

  return function composed(initial) {
    return fns.reduce((promise, fn) => {
      return promise.then(fn);
    }, Promise.resolve(initial));
  };
};