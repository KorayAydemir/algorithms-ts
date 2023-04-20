declare function fib_recursive(n: number): number;
declare function fib_iterative(n: number): number;
interface memo {
    [key: number]: number;
}
declare function fib_recursive_memoized(n: number, memo?: memo): number;
declare function fib_r_bottom_up(n: number, m?: number): number;
declare function fib_r_bottom_up_memoized(n: number, m?: number, memo?: memo): number;
