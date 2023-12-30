const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current);
}

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n === 0) return 1;
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
