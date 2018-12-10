// @flow
const innerValues = require("../src/innerValues");
const makeGrid = require("./makeGrid");

describe("innerValues", () => {
  it("should be a function", () => {
    expect(innerValues).toBeInstanceOf(Function);
  });

  it("should return an empty array for a 0x0", () => {
    expect(innerValues(makeGrid(0))).toEqual([]);
  });
  it("should return an empty array for a 1x1", () => {
    expect(innerValues(makeGrid(1))).toEqual([]);
  });

  it("should return an empty array for a 2x2", () => {
    expect(innerValues(makeGrid(2))).toEqual([]);
  });

  it("should return the middle value for a 3x3", () => {
    expect(innerValues(makeGrid(3))).toEqual([[5]]);
  });

  it("should return the middle values for a 4x4", () => {
    expect(innerValues(makeGrid(4))).toEqual([[6, 7], [10, 11]]);
  });
});
