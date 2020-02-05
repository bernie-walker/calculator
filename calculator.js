const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const main = function () {
  const [operand1, operand2, sign] = process.argv.slice(2);
  const selectOperation = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
  };
  const result = selectOperation[sign](operand1, operand2)
  console.log(result);
};
