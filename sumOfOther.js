function sumOfOther2(arr) {
	const result = [];
	const sum = arr.reduce((acc, elem) => acc + elem)
	arr.forEach((item) => result.push(sum - item))
	return result;
	}