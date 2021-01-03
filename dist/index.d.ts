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
/**
 * Wraps array of promises with Promise.all
 * @since 1.0.0
 */
declare const traversePromises: <A>(arrayOfPromises: Promise<A>[]) => Promise<A[]>;
/**
 * @deprecated
 */
declare function composeAsync(): (initial: any) => any;
/**
 * @deprecated - use traversePromises instead
 */
declare const mapAllAsync: import("Function/Curry").Curry<(<A>(transformer: (a: A) => Promise<A>, collection: A[]) => Promise<A[]>)>;
export { pipeAsync, composeAsync, traversePromises, mapAllAsync };
//# sourceMappingURL=index.d.ts.map