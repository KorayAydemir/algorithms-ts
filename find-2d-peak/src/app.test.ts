import find2dPeak, { PeakRowCol } from "./app";

interface InputsAndResults { [key: string]: { input: number[][], result: PeakRowCol } }

describe('Should return a peak in ascending order 2D arrays', () => {
  const inputs: InputsAndResults = {
    "3x3": {
      input: [[1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]], result: { peak: 9, row: 2, col: 2 }
    },

    "4x4": {
      input: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ], result: { peak: 16, row: 3, col: 3 }
    },
    "5x5": {
      input: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
      ], result: { peak: 25, row: 4, col: 4 }
    },
    "1x1": {
      input: [[1]], result: { peak: 1, row: 0, col: 0 }
    },
    "2x2": {
      input: [[1, 2], [3, 4]], result: { peak: 4, row: 1, col: 1 }
    },
    "negative": {
      input: [[-5, -4, -3, -2],
      [-1, 0, 1, 2],
      [3, 4, 5, 6],
      [7, 8, 9, 10]], result: { peak: 10, row: 3, col: 3 }
    }
  }

  for (let matrix in inputs) {
    test(`${matrix} matrix`, () => {
      const input = inputs[matrix].input
      const expectedResult = inputs[matrix].result
      const result = find2dPeak(input);

      expect(result).toEqual(expectedResult)
    });
  }
});



describe('Random arrays', () => {
  const inputs: InputsAndResults = {
    "1": {
      input: [
        [9, 9, 6],
        [2, 10, 7],
        [10, 7, 8]
      ], result: { peak: 10, row: 1, col: 1 }
    },
    "2": {
      input: [
        [-43, -30, 9, -76, -29],
        [-92, 31, 99, 12, -79],
        [70, 69, -55, -96, 91],
        [-18, -100, -79, -90, 92],
        [36, -60, -29, 7, 88]
      ], result: { peak: 99, row: 1, col: 2 }
    },
  }

  for (let matrix in inputs) {
    test(`random matrix`, () => {
      const input = inputs[matrix].input
      const expectedResult = inputs[matrix].result
      const result = find2dPeak(input);

      expect(result).toEqual(expectedResult)
    });
  }


})
