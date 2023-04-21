type PeakAndIndex = { peak: number, index: number }

function findPeak(arr: number[], high = arr.length - 1, low = 0): PeakAndIndex {
  let mid = low + Math.floor((high - low) / 2)

  if (arr[mid] < arr[mid - 1]) {
    high = mid;
  }
  else if (arr[mid] < arr[mid + 1]) {
    low = mid + 1;
  }
  else { return { peak: arr[mid], index: mid } }
  return findPeak(arr, high, low);
}
// 5 4 3 2 1 
export default findPeak
