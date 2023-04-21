import findPeak from "./app";

test("Should return a peak when peak is in the middle in odd length array", () => {
  const result = findPeak([5, 3, 5, 2, 9]);
  expect(result).toEqual({ peak: 5, index: 2 })
})

test("Should return a peak when peak is in the middle in even length array. And choose first element as middle, as opposed to second.", () => {
  const result = findPeak([5, 3, 8, 6, 2, 9]);
  expect(result).toEqual({ peak: 8, index: 2 })
})


