def fib(n):
    if n <= 2:
        return 1

    prev_1 = 1
    prev_2 = 0

    for _ in range(n - 2):
        for _ in range(prev_1):
            prev_2 += 1
        prev_1, prev_2 = prev_2, prev_1

    return prev_1 + prev_2

print(fib(40))
