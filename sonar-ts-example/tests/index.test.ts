import { fibonacci } from "../src/index"

it("should return '1' for 1", () => {
  expect(fibonacci(1)).toBe(1);
}

it("should return '2' for 2", () => {
  expect(fibonacci(2)).toBe(2);
}

it("should return '3' for 3", () => {
  expect(fibonacci(3)).toBe(3);
}

it("should return '5' for 4", () => {
  expect(fibonacci(4)).toBe(5);
}
