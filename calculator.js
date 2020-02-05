const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const mod = function(n1, n2) {
  if (n1 < n2) return n1;

  return mod(n1 - n2, n2);
};

const main = function() {
  const [operand1, operand2, sign] = process.argv.slice(2);
  const selectOperation = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
    '%': mod
  };
  const result = selectOperation[sign](operand1, operand2);
  console.log(result);
};
