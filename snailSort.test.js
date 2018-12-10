const { range, chunk } = require("lodash");
const snailSort = require("./snailSort");

const fixtures = {
  // 1: [1],
  // 2: [1, 2, 4, 3]
  3: [1, 2, 3, 6, 9, 8, 7, 4, 5]
  // 4: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10],
  // prettier-ignore
  // 5: [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
};

describe("snailSort", () => {
  it("should be a function", () => {
    expect(snailSort).toBeInstanceOf(Function);
  });

  Object.entries(fixtures).forEach(([key, expected]) => {
    const size = parseInt(key, 10);
    const total = size ** 2;
    const input = chunk(range(1, total + 1), size);

    it(`should snail sort a ${size}x${size} matrix`, () => {
      expect(snailSort(input)).toEqual(expected);
    });
  });
});
