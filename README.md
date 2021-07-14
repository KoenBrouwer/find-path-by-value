### 🙋‍♂️ Made by [@koenbrouwer](https://twitter.com/KoenBrouwer).
---

# Welcome to find-path-by-value 👋

[![Version](https://img.shields.io/npm/v/@koenbrouwer/find-path-by-value.svg)](https://www.npmjs.com/package/@koenbrouwer/find-path-by-value)

This package contains a single function that returns the path inside a haystack object where a needle as value was found.

This is a [Node.js](https://nodejs.org/en/) package available through the [npm registry](https://nodejs.org/en/). \
You can install `find-path-by-value` with the [`npm install` command](https://docs.npmjs.com/downloading-and-installing-packages-locally).

# Install

```sh
npm install --save @koenbrouwer/find-path-by-value
```

# Usage

It's really straight forward, you will need a JS(ON) object as the haystack and a string as the needle,
`findPathByValue` will find the path(s) in the haystack where the needle was found:

```typescript
const data = {
	rootBad: "bad",
	level0: {
		whatever: "good",
		bad: "bad",
		level1: {
			good: "good",
			bad: "bad",
			some: {
				good: "good",
				other: {
					good: "good",
					deep: {
						good: "good",
						nested: {
							key: {
								that: {
									isBad: "bad",
								},
							},
						},
					},
				},
			},
		},
	},
};

const paths = findPathsByValue(haystack, needle);
```

The result of `paths` is:

```typescript
[
	'rootBad',
	'level0.bad',
	'level0.level1.bad',
	'level0.level1.some.other.deep.nested.key.that.isBad'
]
```

# Author

👤 **Koen Brouwer**

* Website: [KoenBrouwer.com](http://www.koenbrouwer.com/)
* Twitter: [@KoenBrouwer](https://twitter.com/KoenBrouwer)
* Github: [@KoenBrouwer](https://github.com/KoenBrouwer)

# 🤝 Contributing

Feel free to open an issue on the [issues page](https://github.com/KoenBrouwer/find-path-by-value/issues) or a pull request in
the [repo on GitHub](https://github.com/KoenBrouwer/find-path-by-value/pulls)!

# Show your support

Give a ⭐️ if this project helped you!

# License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

Contributions, issues and feature requests are welcome!