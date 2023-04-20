"use strict";
function fib_recursive(n) {
    if (n <= 2)
        return 1;
    return fib_recursive(n - 1) + fib_recursive(n - 2);
}
console.log("recursive (top-down): ", fib_recursive(20));
function fib_iterative(n) {
    let curr = 0;
    let prev = 1;
    let prev_prev = 0;
    for (let i = 1; i < n; i++) {
        curr = prev + prev_prev;
        prev_prev = prev;
        prev = curr;
    }
    return prev;
}
console.log("iterative (bottom-up): ", fib_iterative(60));
function fib_recursive_memoized(n, memo = {}) {
    if (n in memo)
        return memo[n];
    if (n <= 2)
        return 1;
    memo[n] = fib_recursive_memoized(n - 1, memo) + fib_recursive_memoized(n - 2, memo);
    return memo[n];
}
console.log("recursive memoized: ", fib_recursive_memoized(60));
function fib_r_bottom_up(n, m = 3) {
    if (m > n)
        return 1;
    return fib_r_bottom_up(n, m + 1) + fib_r_bottom_up(n, m + 2);
}
console.log("recursive bottom-up: ", fib_r_bottom_up(20));
function fib_r_bottom_up_memoized(n, m = 3, memo = {}) {
    if (m in memo)
        return memo[m];
    if (m > n)
        return 1;
    memo[m] = fib_r_bottom_up_memoized(n, m + 1, memo) + fib_r_bottom_up_memoized(n, m + 2, memo);
    return memo[m];
}
console.log("recursive bottom-up memoized: ", fib_r_bottom_up_memoized(60));
