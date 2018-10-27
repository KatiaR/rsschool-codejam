function make(...args) {
	const currentSum = [...args];
	return function f(...argsF) {
		let execFunction = argsF[0];
		if (typeof execFunction === 'function') 
		{
			return currentSum.reduce((acc, elem) => execFunction(acc, elem))
		}
		currentSum = [...currentSum, ...argsF];
		return f;
	}
	return f;
}