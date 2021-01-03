# ramda-async
`pipeAsync` and `traversePromises` function that play well with the rest of Ramda functions. Now also plays "okish" with TypeScript.

## Install
```
npm install ramda-async
```

## Example usage
```ts
import { pipeAsync, traversePromises } from 'ramda-async';
import { reduce, map, prop } from 'ramda';

pipeAsync(
  // string[] -> Promise<Response>[]
  map(fetch),
  // Promise<Response>[] -> Promise<Response[]>
  traversePromises,
  // Promise<Response[]> -> Promise<object>[]
  map(r => r.json()),
  // Promise<object>[] -> Promise<object[]>
  traversePromises,
  // Promise([object]) -> Promise([number])
  map(prop('total_count')),
  // Promise([number]) -> number
  reduce((r, c) => r + c , 0),
)([
  "https://api.github.com/search/repositories?q=ramda",
  "https://api.github.com/search/repositories?q=react",
])
  // Prints total number of repositories found by two queries above
  .then(console.log);
```

## Api

### pipeAsync(...steps)(initialValue)
Performs left-to-right function composition of all the steps, automatically lifts the initial value to a promise and pipes it through the composed steps.


### traversePromises(arrayOfPromises)
Wraps the array of promises with `Promise.all`, so it traverses the types like this:
```ts
declare function traverse<A>(arrayOfPromises: Promise<A>[]): Promise<A[]>
```