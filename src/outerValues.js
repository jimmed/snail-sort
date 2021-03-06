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

module.exports = getOuterValues;
