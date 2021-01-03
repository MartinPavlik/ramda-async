# ramda-async
Provides `pipeAsync` and `traversePromises` functions that play well with the rest of Ramda ecosystem. Now also plays "okish" with TypeScript.

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
  // Promise([number]) -> Promise<number>
  reduce((r, c) => r + c , 0),
)([
  "https://api.github.com/search/repositories?q=ramda",
  "https://api.github.com/search/repositories?q=react",
])
  // Prints total number of repositories found by two queries above
  .then(console.log);
```

You can run the example [here](https://ramdajs.com/repl/#?%0Afunction%20pipeAsync%28%29%20%7B%0A%20%20const%20fns%20%3D%20Array.prototype.slice.call%28arguments%2C%200%29%3B%0A%0A%20%20return%20function%20composed%28initial%29%20%7B%0A%20%20%20%20return%20fns.reduce%28%28promise%2C%20fn%29%20%3D%3E%20%7B%0A%20%20%20%20%20%20return%20promise.then%28fn%29%3B%0A%20%20%20%20%7D%2C%20Promise.resolve%28initial%29%29%3B%0A%20%20%7D%3B%0A%7D%3B%0A%0Aconst%20traversePromises%20%3D%20%28arrayOfPromises%29%20%3D%3E%0A%20%20Promise.all%28arrayOfPromises%29%3B%0A%0ApipeAsync%28%0A%20%20%2F%2F%20string%5B%5D%20-%3E%20Promise%3CResponse%3E%5B%5D%0A%20%20map%28fetch%29%2C%0A%20%20%2F%2F%20Promise%3CResponse%3E%5B%5D%20-%3E%20Promise%3CResponse%5B%5D%3E%0A%20%20traversePromises%2C%0A%20%20%2F%2F%20Promise%3CResponse%5B%5D%3E%20-%3E%20Promise%3Cobject%3E%5B%5D%0A%20%20map%28r%20%3D%3E%20r.json%28%29%29%2C%0A%20%20%2F%2F%20Promise%3Cobject%3E%5B%5D%20-%3E%20Promise%3Cobject%5B%5D%3E%0A%20%20traversePromises%2C%0A%20%20%2F%2F%20Promise%28%5Bobject%5D%29%20-%3E%20Promise%28%5Bnumber%5D%29%0A%20%20map%28prop%28%27total_count%27%29%29%2C%0A%20%20%2F%2F%20Promise%28%5Bnumber%5D%29%20-%3E%20Promise%3Cnumber%3E%0A%20%20reduce%28%28r%2C%20c%29%20%3D%3E%20r%20%2B%20c%20%2C%200%29%2C%0A%29%28%5B%0A%20%20%22https%3A%2F%2Fapi.github.com%2Fsearch%2Frepositories%3Fq%3Dramda%22%2C%0A%20%20%22https%3A%2F%2Fapi.github.com%2Fsearch%2Frepositories%3Fq%3Dreact%22%2C%0A%5D%29%0A%20%20%2F%2F%20Prints%20total%20number%20of%20repositories%20found%20by%20two%20queries%20above%0A%20%20.then%28console.log%29%3B)

## Api

### pipeAsync(...steps)(initialValue)
Performs left-to-right function composition of all the steps, automatically lifts the initial value to a promise and pipes it through the composed steps.


### traversePromises(arrayOfPromises)
Wraps the array of promises with `Promise.all`, so it traverses the types like this:
```ts
declare function traverse<A>(arrayOfPromises: Promise<A>[]): Promise<A[]>
```