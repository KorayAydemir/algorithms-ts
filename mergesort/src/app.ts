function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) { return arr }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)
  return mergeCarefully(mergeSort(leftArr), mergeSort(rightArr));
}

function mergeCarefully(leftArr: number[], rightArr: number[]): number[] {
  const resultArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      resultArr.push(leftArr.shift()!);
    }
    else { resultArr.push(rightArr.shift()!); }
  }
  return [...resultArr, ...leftArr, ...rightArr];

}

const arr = [38, 27, 43, 3, 9, 82, 10]
console.log(mergeSort(arr))


export default mergeSort
