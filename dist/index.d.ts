/// <reference types="ts-toolbelt" />
/**
 * Performs left-to-right function composition and automatically lifts the initial value to a promise.
 */
declare function pipeAsync<A, B, C>(ab: (a: A) => B | Promise<B>): (a: A) => Promise<B>;
declare function pipeAsync<A, B, C>(ab: (a: A) => B | Promise<B>, bc: (b: B) => C | Promise<C>): (a: A) => Promise<C>;
declare function pipeAsync<A, B, C, D>(ab: (a: A) => B | Promise<B>, bc: (b: B) => C | Promise<C>, cd: (c: C) => D | Promise<D>): (a: A) => Promise<D>;
declare function pipeAsync<A, B, C, D, E>(ab: (a: A) => B | Promise<B>, bc: (b: B) => C | Promise<C>, cd: (c: C) => D | Promise<D>, de: (d: D) => E | Promise<E>): (a: A) => Promise<E>;
declare function pipeAsync<A, B, C, D, E, F>(ab: (a: A) => B | Promise<B>, bc: (b: B) => C | Promise<C>, cd: (c: C) => D | Promise<D>, de: (d: D) => E | Promise<E>, ef: (e: E) => F | Promise<F>): (a: A) => Promise<F>;
declare function pipeAsync<A, B, C, D, E, F, G>(ab: (a: A) => B | Promise<B>, bc: (b: B) => C | Promise<C>, cd: (c: C) => D | Promise<D>, de: (d: D) => E | Promise<E>, ef: (e: E) => F | Promise<F>, fg: (f: F) => G | Promise<G>): (a: A) => Promise<G>;
declare function pipeAsync<A, B, C, D, E, F, G, H>(ab: (a: A) => B | Promise<B>, bc: (b: B) => C | Promise<C>, cd: (c: C) => D | Promise<D>, de: (d: D) => E | Promise<E>, ef: (e: E) => F | Promise<F>, fg: (f: F) => G | Promise<G>, gh: (g: G) => H | Promise<H>): (a: A) => Promise<H>;
declare function pipeAsync<A, B, C, D, E, F, G, H, I>(ab: (a: A) => B | Promise<B>, bc: (b: B) => C | Promise<C>, cd: (c: C) => D | Promise<D>, de: (d: D) => E | Promise<E>, ef: (e: E) => F | Promise<F>, fg: (f: F) => G | Promise<G>, gh: (g: G) => H | Promise<H>, hi: (h: H) => I | Promise<I>): (a: A) => Promise<I>;
declare function pipeAsync<A, B, C, D, E, F, G, H, I, J>(ab: (a: A) => B | Promise<B>, bc: (b: B) => C | Promise<C>, cd: (c: C) => D | Promise<D>, de: (d: D) => E | Promise<E>, ef: (e: E) => F | Promise<F>, fg: (f: F) => G | Promise<G>, gh: (g: G) => H | Promise<H>, hi: (h: H) => I | Promise<I>, ij: (i: I) => J | Promise<J>): (a: A) => Promise<J>;
declare function pipeAsync<A, B, C, D, E, F, G, H, I, J, K>(ab: (a: A) => B | Promise<B>, bc: (b: B) => C | Promise<C>, cd: (c: C) => D | Promise<D>, de: (d: D) => E | Promise<E>, ef: (e: E) => F | Promise<F>, fg: (f: F) => G | Promise<G>, gh: (g: G) => H | Promise<H>, hi: (h: H) => I | Promise<I>, ij: (i: I) => J | Promise<J>, jk: (j: J) => K | Promise<K>): (a: A) => Promise<K>;
declare function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, M>(ab: (a: A) => B | Promise<B>, bc: (b: B) => C | Promise<C>, cd: (c: C) => D | Promise<D>, de: (d: D) => E | Promise<E>, ef: (e: E) => F | Promise<F>, fg: (f: F) => G | Promise<G>, gh: (g: G) => H | Promise<H>, hi: (h: H) => I | Promise<I>, ij: (i: I) => J | Promise<J>, jk: (j: J) => K | Promise<K>, km: (k: K) => M | Promise<M>): (a: A) => Promise<M>;
declare function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, M, N>(ab: (a: A) => B | Promise<B>, bc: (b: B) => C | Promise<C>, cd: (c: C) => D | Promise<D>, de: (d: D) => E | Promise<E>, ef: (e: E) => F | Promise<F>, fg: (f: F) => G | Promise<G>, gh: (g: G) => H | Promise<H>, hi: (h: H) => I | Promise<I>, ij: (i: I) => J | Promise<J>, jk: (j: J) => K | Promise<K>, km: (k: K) => M | Promise<M>, mn: (m: M) => N | Promise<N>): (a: A) => Promise<N>;
/**
 * Wraps array of promises with Promise.all
 * @since 1.0.0
 */
declare const traversePromises: <A>(arrayOfPromises: Promise<A>[]) => Promise<A[]>;
/**
 * @deprecated I have no idea how to type this function, any help appreciated
 */
declare function composeAsync(): (initial: any) => any;
/**
 * @deprecated use traversePromises instead
 */
declare const mapAllAsync: import("Function/Curry").Curry<(<A>(transformer: (a: A) => Promise<A>, collection: A[]) => Promise<A[]>)>;
export { pipeAsync, composeAsync, traversePromises, mapAllAsync };
//# sourceMappingURL=index.d.ts.map