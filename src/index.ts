import jp, {PathComponent} from "jsonpath";

const findPathsByValue = (haystack: object, needle: string = ""): string[] => {
	const result: any[] = [
		// Search in the root
		jp.paths(haystack, `$[?(@=="${needle}")]`).map((p: PathComponent[]) => p.filter(pp => pp !== "$").join(".")),

		// Search in all children
		jp.paths(haystack, `$..*[?(@=="${needle}")]`).map((p: PathComponent[]) => p.filter(pp => pp !== "$").join(".")),
	];
	return result.flat(1);
};

export {
	findPathsByValue
};