// @flow
const snailSort = require("../src/snailSort");
const makeGrid = require("./makeGrid");
const fixtures = require("./snailSort.fixtures");

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
