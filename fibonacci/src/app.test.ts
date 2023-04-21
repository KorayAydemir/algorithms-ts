import fib_recursive from "./app";
test("fib recursive test", () => {
  const result = fib_recursive(10);
  expect(result).toEqual(55)
})



