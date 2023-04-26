function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      return bubbleSort(arr);
    }
  }
  return arr;
}

const arr = [38, 27, 43, 3, 9, 82, 10]
console.log(bubbleSort(arr))


export default bubbleSort
