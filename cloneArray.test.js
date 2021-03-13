const cloneArray = require("./cloneArray");

test("add 2 number", () => {
  const arr = [1, 2, 3];
  expect(cloneArray(arr)).toEqual(arr);
  expect(cloneArray(arr)).not.toBe(arr);
});
