
const memoize = (fn: Function) => {
  let cache: { [key: string]: any } = {};
  return (...args: any[]) => {
    let n: number = args[0]
    if (n in cache) {
      console.log('Fetching from cache', n)
      return cache[n];
    }
    else {
      console.log("Calculating result", n);
      let result = fn(n);
      cache[n] = result;
      return result
    }
  }

}
const factorial = memoize(
  (n: number): number => {
    if (n === 1) {
      return 1
    }
    return n * factorial(n - 1)

  }
)

let result = factorial(5)

let result2 = factorial(5)

console.log(result2)

