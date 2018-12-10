# snail-sort

> Probably the most useless sorting algorithm ever

A friend of mine sent me a coding challenge he'd been given by a potential employer, and I couldn't help but implement it.

## What does it do?

Given a square, two-dimensional array (i.e. a matrix, ish), like this one:

```js
[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
```

it will walk around the "outer edge" of the matrix to generate the sort order, and then continue, spiralling inwards. Accordingly, it would return:

```js
[1, 2, 3, 6, 9, 8, 7, 4, 5];
```

## Contributing / Development

### Installating

1. Clone the repo
2. Install dependencies using `yarn` or `npm install`
   - This will automatically install flow-typed library definitions.

Settings are provided for Visual Studio Code, as well as a .editorconfig file.

### Running Tests

1. Run unit tests using `npm test` or `yarn test`
2. Run linting checks using `npm run eslint` or `yarn eslint`
3. Run type checks using `npm run flow check` or `yarn flow check`
