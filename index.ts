import { map, curry } from 'ramda'

/**
 * Performs left-to-right function composition and automatically lifts the initial value to a promise.
 */
function pipeAsync<A, B, C>(
  ab: (a: A) => B | Promise<B>,
): (a: A) => Promise<B>;
function pipeAsync<A, B, C>(
  ab: (a: A) => B | Promise<B>,
  bc: (b: B) => C | Promise<C>,
): (a: A) => Promise<C>;
function pipeAsync<A, B, C, D>(
  ab: (a: A) => B | Promise<B>,
  bc: (b: B) => C | Promise<C>,
  cd: (c: C) => D | Promise<D>,
): (a: A) => Promise<D>;
function pipeAsync<A, B, C, D, E>(
  ab: (a: A) => B | Promise<B>,
  bc: (b: B) => C | Promise<C>,
  cd: (c: C) => D | Promise<D>,
  de: (d: D) => E | Promise<E>,
): (a: A) => Promise<E>;
function pipeAsync<A, B, C, D, E, F>(
  ab: (a: A) => B | Promise<B>,
  bc: (b: B) => C | Promise<C>,
  cd: (c: C) => D | Promise<D>,
  de: (d: D) => E | Promise<E>,
  ef: (e: E) => F | Promise<F>,
): (a: A) => Promise<F>;
function pipeAsync<A, B, C, D, E, F, G>(
  ab: (a: A) => B | Promise<B>,
  bc: (b: B) => C | Promise<C>,
  cd: (c: C) => D | Promise<D>,
  de: (d: D) => E | Promise<E>,
  ef: (e: E) => F | Promise<F>,
  fg: (f: F) => G | Promise<G>,
): (a: A) => Promise<G>;
function pipeAsync<A, B, C, D, E, F, G, H>(
  ab: (a: A) => B | Promise<B>,
  bc: (b: B) => C | Promise<C>,
  cd: (c: C) => D | Promise<D>,
  de: (d: D) => E | Promise<E>,
  ef: (e: E) => F | Promise<F>,
  fg: (f: F) => G | Promise<G>,
  gh: (g: G) => H | Promise<H>,
): (a: A) => Promise<H>;
function pipeAsync<A, B, C, D, E, F, G, H, I>(
  ab: (a: A) => B | Promise<B>,
  bc: (b: B) => C | Promise<C>,
  cd: (c: C) => D | Promise<D>,
  de: (d: D) => E | Promise<E>,
  ef: (e: E) => F | Promise<F>,
  fg: (f: F) => G | Promise<G>,
  gh: (g: G) => H | Promise<H>,
  hi: (h: H) => I | Promise<I>,
): (a: A) => Promise<I>;
function pipeAsync<A, B, C, D, E, F, G, H, I, J>(
  ab: (a: A) => B | Promise<B>,
  bc: (b: B) => C | Promise<C>,
  cd: (c: C) => D | Promise<D>,
  de: (d: D) => E | Promise<E>,
  ef: (e: E) => F | Promise<F>,
  fg: (f: F) => G | Promise<G>,
  gh: (g: G) => H | Promise<H>,
  hi: (h: H) => I | Promise<I>,
  ij: (i: I) => J | Promise<J>,
): (a: A) => Promise<J>;
function pipeAsync<A, B, C, D, E, F, G, H, I, J, K>(
  ab: (a: A) => B | Promise<B>,
  bc: (b: B) => C | Promise<C>,
  cd: (c: C) => D | Promise<D>,
  de: (d: D) => E | Promise<E>,
  ef: (e: E) => F | Promise<F>,
  fg: (f: F) => G | Promise<G>,
  gh: (g: G) => H | Promise<H>,
  hi: (h: H) => I | Promise<I>,
  ij: (i: I) => J | Promise<J>,
  jk: (j: J) => K | Promise<K>,
): (a: A) => Promise<K>;
function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, M>(
  ab: (a: A) => B | Promise<B>,
  bc: (b: B) => C | Promise<C>,
  cd: (c: C) => D | Promise<D>,
  de: (d: D) => E | Promise<E>,
  ef: (e: E) => F | Promise<F>,
  fg: (f: F) => G | Promise<G>,
  gh: (g: G) => H | Promise<H>,
  hi: (h: H) => I | Promise<I>,
  ij: (i: I) => J | Promise<J>,
  jk: (j: J) => K | Promise<K>,
  km: (k: K) => M | Promise<M>,
): (a: A) => Promise<M>;
function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, M, N>(
  ab: (a: A) => B | Promise<B>,
  bc: (b: B) => C | Promise<C>,
  cd: (c: C) => D | Promise<D>,
  de: (d: D) => E | Promise<E>,
  ef: (e: E) => F | Promise<F>,
  fg: (f: F) => G | Promise<G>,
  gh: (g: G) => H | Promise<H>,
  hi: (h: H) => I | Promise<I>,
  ij: (i: I) => J | Promise<J>,
  jk: (j: J) => K | Promise<K>,
  km: (k: K) => M | Promise<M>,
  mn: (m: M) => N | Promise<N>,
): (a: A) => Promise<N>;

function pipeAsync() {
  const fns = Array.prototype.slice.call(arguments, 0);

  return function composed(initial) {
    return fns.reduce((promise, fn) => {
      return promise.then(fn);
    }, Promise.resolve(initial));
  };
};

/**
 * Wraps array of promises with Promise.all
 * @since 1.0.0
 */
const traversePromises = <A>(arrayOfPromises: Promise<A>[]): Promise<A[]> =>
  Promise.all(arrayOfPromises);

/**
 * @deprecated I have no idea how to type this function, any help appreciated
 */
function composeAsync() {
  const fns = Array.prototype.slice.call(arguments, 0).reverse();

  return function composed(initial) {
    return fns.reduce((promise, fn) => {
      return promise.then(fn);
    }, Promise.resolve(initial));
  };
};

/**
 * @deprecated use traversePromises instead
 */
const mapAllAsync = curry(function mapAllAsync_<A>(transformer: ((a: A) => Promise<A>), collection: A[]) {
  return Promise.all(map(transformer, collection));
});

export { pipeAsync, composeAsync, traversePromises, mapAllAsync }
