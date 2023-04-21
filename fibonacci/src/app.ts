export default function fib_recursive(n: number): number {
  if (n <= 2) return 1;
  return fib_recursive(n - 1) + fib_recursive(n - 2);
}
console.log("recursive (top-down): ", fib_recursive(20))

function fib_i_memoized(n: number): number {
  let f = new Array(n + 2)
  let i;
  f[0] = 0;
  f[1] = 1;
  for (i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
}
console.log("iterative (top-down) memoized: ", fib_i_memoized(60));

function fib_i_not_memoized(n: number): number {
  let f = new Array(n + 2)
  let i;
  f[0] = 0;
  f[1] = 1;
  for (i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
}
console.log("iterative not memoized: ", fib_i_not_memoized(10));

function fib_iterative(n: number): number {
  let curr;
  let prev = 1
  let prev_prev = 0
  for (let i = 1; i < n; i++) {
    curr = prev + prev_prev;
    prev_prev = prev
    prev = curr
  }
  return prev;
}
console.log("iterative (bottom-up): ", fib_iterative(60))

interface memo { [key: number]: number }
function fib_recursive_memoized(n: number, memo: memo = {}): number {
  if (n in memo) return memo[n];
  if (n <= 2) return 1
  memo[n] = fib_recursive_memoized(n - 1, memo) + fib_recursive_memoized(n - 2, memo)
  return memo[n]
}
console.log("recursive memoized: ", fib_recursive_memoized(60));


function fib_r_bottom_up(n: number, m = 3): number {
  if (m > n) return 1
  return fib_r_bottom_up(n, m + 1) + fib_r_bottom_up(n, m + 2);
}
console.log("recursive bottom-up: ", fib_r_bottom_up(20));

function fib_r_bottom_up_memoized(n: number, m = 3, memo: memo = {}): number {
  if (m in memo) return memo[m]
  if (m > n) return 1
  memo[m] = fib_r_bottom_up_memoized(n, m + 1, memo) + fib_r_bottom_up_memoized(n, m + 2, memo);
  return memo[m]
}
console.log("recursive bottom-up memoized: ", fib_r_bottom_up_memoized(60))



function fib(n: number): number {
  let [a, b] = [1, 1];
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

console.log(fib(10))
