function sumOfOther(arr) {
  const result = [];
  const sum = arr.reduce((acc, elem) => acc + elem);
  arr.forEach(item => result.push(sum - item));
  return result;
}

sumOfOther([2, 3, 4, 1]);
