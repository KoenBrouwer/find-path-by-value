const {findPathsByValue} = require("./index");

const needle = "__MISSING-TRANSLATION__";
const haystack = {
	rootBad: needle,
	level0: {
		whatever: "good",
		bad: needle,
		level1: {
			good: "good",
			bad: needle,
			some: {
				good: "good",
				other: {
					good: "good",
					deep: {
						good: "good",
						nested: {
							key: {
								that: {
									isBad: needle,
								},
							},
						},
					},
				},
			},
		},
	},
};

it("Returns the correct paths in the haystack where the needle was found.", () => {
	const paths = findPathsByValue(haystack, needle);

	expect(paths.length).toEqual(4);
	expect(paths[0]).toEqual("rootBad");
	expect(paths[1]).toEqual("level0.bad");
	expect(paths[2]).toEqual("level0.level1.bad");
	expect(paths[3]).toEqual("level0.level1.some.other.deep.nested.key.that.isBad");
});