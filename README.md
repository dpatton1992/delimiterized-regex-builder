# Delimiterized Regex Builder

This is a simple library that takes an array of strings and returns a regex that matches the strings, in order separated, by whitespace or a wildcard. It was created to write tests that would ignore whitespace changes. Example:

```javascript
import {
	generateRegexFromArray,
	Delimiter,
} from '@dpatton1992/delimiterized-regex-builder';

expect(locator).toHaveText(
	generateRegexFromArray(
		[element1.innerText(), element2.innerText(), element3.innerText()],
		Delimiter.whitespace
	)
);
```

If you would like to add other delimiters, feel free to open a PR or add an Issue.