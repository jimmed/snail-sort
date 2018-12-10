// @flow
const getInnerValues = <T>(input: T[][]): T[][] =>
  input.slice(1, -1).map(x => x.slice(1, -1));

module.exports = getInnerValues;
