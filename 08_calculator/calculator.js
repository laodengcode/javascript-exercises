const add = function (a, b) {
  return a + b;

};

const subtract = function (a, b) {

  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((total, current) => total + current, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((total, current) => total * current, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let result = 1;
  while (a > 1) {
    result *= a;
    a--;
  }

  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
