// @flow
const { chunk, range } = require("lodash");

const makeGrid = (size: number): number[][] =>
  chunk(range(1, size ** 2 + 1), size);

module.exports = makeGrid;
