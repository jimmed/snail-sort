// @flow
const getOuterValues = <T>(input: T[][]): T[] => {
  const width = input.length;
  return width
    ? [
        ...input[0].slice(0, width),
        ...input.slice(1).map(inner => inner[width - 1]),
        ...input[width - 1].reverse().slice(1),
        ...input
          .slice(1, -1)
          .map(inner => inner[0])
          .reverse()
      ]
    : [];
};

const getInnerValues = <T>(input: T[][]): T[][] =>
  input.slice(1, -1).map(x => x.slice(1, -1));

const snailSort = <T>(input: T[][]): T[] => {
  const [first, second] = input;
  if (input.length === 1) {
    return first;
  }
  if (input.length === 2) {
    return [...first, ...second.reverse()];
  }

  return [...getOuterValues(input), ...snailSort(getInnerValues(input))];
};

module.exports = { getOuterValues, getInnerValues, snailSort };
