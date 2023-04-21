type PeakAndIndex = { peak: number, index: number }

function findPeak(arr: number[], high = arr.length - 1, low = 0): PeakAndIndex | undefined {
  const mid = low + low + Math.floor((high - low) / 2)

  if (arr[mid] >= arr[mid + 1] && arr[mid] >= arr[mid - 1]) {
    return { peak: arr[mid], index: mid }
  }
}


let arr = [2, 3, 9, 5, 10]

console.log(findPeak(arr))
export default findPeak
