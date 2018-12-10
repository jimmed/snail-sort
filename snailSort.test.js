const { range, chunk } = require("lodash");
const {
  getInnerValues,
  getOuterValues,
  snailSort
} = require("./snailSort.flow");

const makeGrid = size => chunk(range(1, size ** 2 + 1), size);

describe("getInnerValues", () => {
  it("should be a function", () => {
    expect(getInnerValues).toBeInstanceOf(Function);
  });

  it("should return an empty array for a 0x0", () => {
    expect(getInnerValues(makeGrid(0))).toEqual([]);
  });
  it("should return an empty array for a 1x1", () => {
    expect(getInnerValues(makeGrid(1))).toEqual([]);
  });

  it("should return an empty array for a 2x2", () => {
    expect(getInnerValues(makeGrid(2))).toEqual([]);
  });

  it("should return the middle value for a 3x3", () => {
    expect(getInnerValues(makeGrid(3))).toEqual([[5]]);
  });

  it("should return the middle values for a 4x4", () => {
    expect(getInnerValues(makeGrid(4))).toEqual([[6, 7], [10, 11]]);
  });
});

describe("getOuterValues", () => {
  it("should be a function", () => {
    expect(getOuterValues).toBeInstanceOf(Function);
  });

  it("should return an empty array with an empty array", () => {
    expect(getOuterValues(makeGrid(0))).toEqual([]);
  });

  it("should return a single value fora 1x1 grid", () => {
    expect(getOuterValues(makeGrid(1))).toEqual([1]);
  });

  it("should return the values in circumference order for a 2x2 grid", () => {
    expect(getOuterValues(makeGrid(2))).toEqual([1, 2, 4, 3]);
  });

  it("should return the outer values for a 3x3 grid", () => {
    expect(getOuterValues(makeGrid(3))).toEqual([1, 2, 3, 6, 9, 8, 7, 4]);
  });

  it("should return the outer values for a 4x4 grid", () => {
    // prettier-ignore
    expect(getOuterValues(makeGrid(4))).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5]);
  });
});

const fixtures = {
  1: [1],
  2: [1, 2, 4, 3],
  3: [1, 2, 3, 6, 9, 8, 7, 4, 5],
  4: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10],
  // prettier-ignore
  5: [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
};

describe("snailSort", () => {
  it("should be a function", () => {
    expect(snailSort).toBeInstanceOf(Function);
  });

  Object.entries(fixtures)
    .reverse()
    .forEach(([key, expected]) => {
      const size = parseInt(key, 10);
      const total = size ** 2;
      const input = makeGrid(size);

      it(`should snail sort a ${size}x${size} matrix`, () => {
        expect(snailSort(input)).toEqual(expected);
      });
    });
});
