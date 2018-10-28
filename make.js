function make(...args) {
  let currentSum = [...args];
  return function f(...argsF) {
    const execFunction = argsF[0];
    if (typeof execFunction === 'function') {
      return currentSum.reduce((acc, elem) => execFunction(acc, elem));
    }
    currentSum = [...currentSum, ...argsF];
    return f;
  };
}
function sum(a, b) {
  return a + b;
}
make(15)(34, 21, 666)(41)(sum);
