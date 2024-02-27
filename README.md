# delimiterized-regex-builder

A simple library that generates a regex from an array of strings, matching them in order and separated by a specified delimiter. This library was initially created to write tests that would ignore whitespace changes.

## Installation

```bash
npm install @dpatt/delimiterized-regex-builder
```

## Usage

```javascript
import { generateRegexFromArray, Delimiter } from '@dpatt/delimiterized-regex-builder';

const stringArray = ['apple', 'orange', 'banana'];
const regex = generateRegexFromArray(stringArray, Delimiter.whitespace);

const testString = 'apple orange banana';
const isMatch = regex.test(testString);

console.log(isMatch);
// Output: true
```

## Functions

### `generateRegexFromArray`

Generate a regex from an array of strings to match all of the strings, in order, separated by a specified delimiter.

```javascript
import { generateRegexFromArray, Delimiter } from '@dpatt/delimiterized-regex-builder';

const stringArray = ['apple', 'orange', 'banana'];
const regex = generateRegexFromArray(stringArray, Delimiter.whitespace);

const testString = 'apple orange banana';
const isMatch = regex.test(testString);

console.log(isMatch);
// Output: true
```

#### Parameters

- `array`: An array of strings to generate the regex.
- `delimiter` (Optional): The delimiter to use between the strings. Defaults to `Delimiter.whitespace`.

### `Delimiter`

An enum representing common delimiters for generating regex.

- `whitespace`: Represents one or more whitespace characters `[\\s\\n]+`.
- `wildcard`: Represents the wildcard characters `.*`.

## Usage in Tests

Below is an example of how to use `generateRegexFromArray` in a Playwright test.

```javascript
import {
	generateRegexFromArray,
	Delimiter,
} from '@dpatt/delimiterized-regex-builder';

expect(locator).toHaveText(
	generateRegexFromArray(
		[element1.innerText(), element2.innerText(), element3.innerText()],
		Delimiter.whitespace
	)
);
```

## Contribution

If you would like to add support for other delimiters, feel free to open a PR or create an Issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the README further based on any additional information you want to include or specific usage instructions you may have.