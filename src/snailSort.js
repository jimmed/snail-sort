// @flow
const outerValues = require("./outerValues");
const innerValues = require("./innerValues");

const snailSort = <T>(input: T[][]): T[] => {
  const [first, second] = input;
  if (input.length === 1) {
    return first;
  }
  if (input.length === 2) {
    return [...first, ...second.reverse()];
  }

  return [...outerValues(input), ...snailSort(innerValues(input))];
};

module.exports = snailSort;
