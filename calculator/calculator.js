const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  let sum = 0
	for (i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
};

const multiply = function(array) {
  let ans = 1

  for (i = 0; i < array.length; i++) {
    ans = ans * array[i]
  }
  return ans
};

const power = function(a, b) {
	return a**b
};

const factorial = function(num) {
	if (num == 0) {
    return 1
  }
  let ans = 1
  for (i = 1; i < num + 1; i++) {
    ans = ans * i
  }
  return ans
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
