export type PeakRowCol = { peak: number, row: number, col: number }

function find2dPeak(arr: number[][], colLow = 0, colHigh = arr[0].length - 1): PeakRowCol {
  let midCol = colLow + Math.floor((colHigh - colLow) / 2);
  let rowIndex = 0;
  const rowWithHighestCol = arr.reduce((pRow, cRow) => {
    if (pRow[midCol] >= cRow[midCol]) {
      return pRow;
    }
    else {
      rowIndex++
      return cRow;
    }
  })

  const highestCol = rowWithHighestCol[midCol];
  const leftOfHighestCol = rowWithHighestCol[midCol - 1];
  const rightOfHighestCol = rowWithHighestCol[midCol + 1];

  if (highestCol < leftOfHighestCol) {
    colHigh = midCol
    return find2dPeak(arr, colLow, colHigh)
  }
  else if (highestCol < rightOfHighestCol) {
    colLow = midCol + 1
    return find2dPeak(arr, colLow, colHigh)
  }
  else { return { peak: rowWithHighestCol[midCol], row: rowIndex, col: midCol } }
}


export default find2dPeak

