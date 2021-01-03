import { pipeAsync, traversePromises } from "./index"
import { map, sum } from 'ramda'

describe('pipeAsync', () => {
  it('comsposes the function from left to right', async () => {
    expect(
      await pipeAsync(
        map((x: number) => x * 2), // [2, 4, 6]
        map(x => x + 2), // [4, 6, 8]
        map(x => x - 3), // [1, 3, 5]
        sum, // 9
      )([1, 2, 3])
    ).toEqual(9)
  })
  it('works with traversePromises', async () => {
    const f = (x: number) => Promise.resolve(x + 2)
    expect(
      await pipeAsync(
        map((x: number) => x * 2), // [2, 4, 6]
        map(f), // Array<Promise<number>>
        traversePromises, // Promise<Array<number>>
        map(x => x - 3), // [1, 3, 5]
        sum, // 9
      )([1, 2, 3])
    ).toEqual(9)
  })
  it('handles errors', async () => {
    const f = (_x: number) => new Promise<number>((_res, rej) => rej('test'))
    await expect(
      async () => await pipeAsync(
        map(f),
        traversePromises, // Promise<Array<number>>
      )([1, 2, 3])
    ).rejects
  })
})


describe('traversePromises', () => {
  it('works as expected', async () => {
    const f1 = (x: number) => Promise.resolve(x + 2)
    const f2 = (x: number) => Promise.resolve(x + 4)
    expect(
      await traversePromises([f1(1), f2(1)])
    ).toEqual([3, 5])
  })
})
