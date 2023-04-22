import findPeak from "./app";

test("Should return a peak when peak is in the middle in odd length array", () => {
  const result = findPeak([5, 3, 5, 2, 9]);
  expect(result).toEqual({ peak: 5, index: 2 })
})

test("Should return a peak when peak is in the middle in even length array. And choose first element as middle, as opposed to second.", () => {
  const result = findPeak([5, 3, 8, 6, 2, 9]);
  expect(result).toEqual({ peak: 8, index: 2 })
})


test("Should return last index in an ascending order array.", () => {
  const result = findPeak([1, 2, 3, 4, 5]);
  expect(result).toEqual({ peak: 5, index: 4 })
})

test("Should return first index in a descending order array.", () => {
  const result = findPeak([5, 4, 3, 2, 1]);
  expect(result).toEqual({ peak: 5, index: 0 })
})

test("Should return a peak from right when only right side is bigger", () => {
  const result = findPeak([1, 2, 4, 7, 3]);
  expect(result).toEqual({ peak: 7, index: 3 })
})


test("Should return a peak from left when only left side is bigger", () => {
  const result = findPeak([1, 6, 2, 2, 4]);
  expect(result).toEqual({ peak: 6, index: 1 })
})


test("Should return a peak when all numbers are same", () => {
  const result = findPeak([6, 6, 6, 6, 6]);
  expect(result).toEqual({ peak: 6, index: 2 })
})
