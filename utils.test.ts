import { sum, multipication } from "./utils";

describe("utils testing", () => {
  test("sum", () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });

  test("multiplication", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});
