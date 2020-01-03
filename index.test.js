import { pipeAsync, composeAsync, mapAllAsync } from './index';
import { map, flatten } from 'ramda';

describe('mapAllAsync', () => {
  it('should map all the collection and wrap the result with Promise.all', () => {
    const fA = x => Promise.resolve(x + 2);
    expect(
      mapAllAsync(
        fA
      )([1, 2])
    ).resolves.toEqual([3, 4])
  });
});

describe('pipeAsync', () => {
  it('should pipe sync functions', () => {
    expect(
      pipeAsync(
        map(x => [x, x]),
        flatten,
      )([1, 2])
    ).resolves.toEqual([1, 1, 2, 2])
    expect(
      pipeAsync(
        map(x => [x, x]),
        flatten,
      )(Promise.resolve([1, 2]))
    ).resolves.toEqual([1, 1, 2, 2])
  });
  it('should pipe async functions', () => {
    const fA = x => Promise.resolve(x * 2);
    const fB = x => Promise.resolve(x + 3);
    expect(
      pipeAsync(
        fA,
        fB,
      )(1)
    ).resolves.toEqual(5)
    expect(
      pipeAsync(
        fA,
        fB,
      )(Promise.resolve(1))
    ).resolves.toEqual(5)
  });
  it('should pipe mix of async and sync functions', () => {
    const fA = x => Promise.resolve([x, x]);
    expect(
      pipeAsync(
        fA,
        flatten,
        map(x => x * 2),
      )([1, 2])
    ).resolves.toEqual([2, 4, 2, 4])
  });
});

describe('composeAsync', () => {
  it('should compose sync functions', () => {
    expect(
      composeAsync(
        flatten,
        map(x => [x, x]),
      )([1, 2])
    ).resolves.toEqual([1, 1, 2, 2])
    expect(
      composeAsync(
        flatten,
        map(x => [x, x]),
      )(Promise.resolve([1, 2]))
    ).resolves.toEqual([1, 1, 2, 2])
  });
  it('should compose async functions', () => {
    const fA = x => Promise.resolve(x * 2);
    const fB = x => Promise.resolve(x + 3);
    expect(
      composeAsync(
        fB,
        fA,
      )(1)
    ).resolves.toEqual(5)
    expect(
      composeAsync(
        fB,
        fA,
      )(Promise.resolve(1))
    ).resolves.toEqual(5)
  });
  it('should compose mix of async and sync functions', () => {
    const fA = x => Promise.resolve([x, x]);
    expect(
      composeAsync(
        map(x => x * 2),
        flatten,
        fA,
      )([1, 2])
    ).resolves.toEqual([2, 4, 2, 4])
  });
});