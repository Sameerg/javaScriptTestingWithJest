const sum = require("./sum");

describe("A simple module", () => {
  test("add 2 number", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
