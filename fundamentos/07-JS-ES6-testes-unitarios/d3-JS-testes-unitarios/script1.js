const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

const sumEqual = sum(4, 5);
assert.strictEqual(sumEqual, 9, '4 + 5 é igual a 9');