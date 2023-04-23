function joinElements(array: string[], joinString: string): string {
  let resultSoFar = ''

  for (let i = 0; i < array.length - 1; i++) {
    resultSoFar += array[i] + joinString;
  }

  return resultSoFar + array[array.length - 1];
}

let res1 = joinElements(['s', 'cr', 't cod', ' :) :)'], 'e');

function joinElementsRecurse(array: string[], joinString: string, resultSoFar = '', i = 0): string {

  if (i === array.length - 1) {
    return resultSoFar + array[array.length - 1]
  }

  resultSoFar += array[i] + joinString;


  i++
  return joinElementsRecurse(array, joinString, resultSoFar, i)

}

let res2 = joinElementsRecurse(['s', 'cr', 't cod', ' :) :)'], 'e');
console.log(res2)
console.log(res1)
