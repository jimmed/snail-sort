// @flow
const outerValues = require("../src/outerValues");
const makeGrid = require("./makeGrid");

describe("outerValues", () => {
  it("should be a function", () => {
    expect(outerValues).toBeInstanceOf(Function);
  });

  it("should return an empty array with an empty array", () => {
    expect(outerValues(makeGrid(0))).toEqual([]);
  });

  it("should return a single value fora 1x1 grid", () => {
    expect(outerValues(makeGrid(1))).toEqual([1]);
  });

  it("should return the values in circumference order for a 2x2 grid", () => {
    expect(outerValues(makeGrid(2))).toEqual([1, 2, 4, 3]);
  });

  it("should return the outer values for a 3x3 grid", () => {
    expect(outerValues(makeGrid(3))).toEqual([1, 2, 3, 6, 9, 8, 7, 4]);
  });

  it("should return the outer values for a 4x4 grid", () => {
    // prettier-ignore
    expect(outerValues(makeGrid(4))).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5]);
  });
});
