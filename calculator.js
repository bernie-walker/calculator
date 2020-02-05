const mul = function(n1,n2){
  let product = 0;
  for(let index = 0; index<n2;index++){
    product = add(product,n1)
  }
  return product;
}

const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const main = function() {
  const [operand1, operand2, sign] = process.argv.slice(2);
  const selectOperation = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
  };
  const result = selectOperation[sign](operand1, operand2);
  console.log(result);
};
